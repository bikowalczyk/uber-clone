import {useCallback, useEffect, useRef, useState} from 'react';
import type {LatLng, UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';
import type {MapDirectionsResponse} from 'react-native-maps-directions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

import {useUserLocationStateContext} from 'context/UserLocationStateContext';

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [mapMarkers, setMapMarkers] = useState<LatLng[]>([]);
  const [mapDirectionsInfo, setMapDirectionsInfo] =
    useState<MapDirectionsResponse>();

  const insets = useSafeAreaInsets();

  const {userLocation, setUserLocation} = useUserLocationStateContext();

  useEffect(() => {
    if (mapDirectionsInfo?.coordinates) {
      mapRef.current?.fitToCoordinates(mapDirectionsInfo?.coordinates, {
        edgePadding: {
          top: insets.top + scale(15),
          bottom: scale(15),
          left: scale(15),
          right: scale(15),
        },
      });
    }
  }, [insets.top, mapDirectionsInfo?.coordinates]);

  const centerToUserLocation = useCallback(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        longitude: userLocation.coords.longitude,
        latitude: userLocation.coords.latitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);

  useEffect(() => {
    centerToUserLocation();
  }, [centerToUserLocation]);

  const closeDestinationModal = () => {
    setModalVisible(false);
  };

  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    if (coordinate) {
      setUserLocation({
        coords: {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        },
      });
    }
  };

  const handleMapSearchBarPress = () => {
    setModalVisible(true);
  };

  const handlePlaceItemPress = (coords: LatLng) => {
    return () => {
      if (userLocation?.coords) {
        setMapMarkers([userLocation?.coords, coords]);
        setModalVisible(false);
      }
    };
  };

  const handleMapDirectionsReady = (response: MapDirectionsResponse) => {
    setMapDirectionsInfo(response);
  };

  const handleRoundButtonPress = () => {
    if (mapMarkers.length === 2) {
      setMapMarkers([]);
      centerToUserLocation();
    }
  };

  return {
    models: {
      mapRef,
      modalVisible,
      mapMarkers,
    },
    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeDestinationModal,
      handlePlaceItemPress,
      handleMapDirectionsReady,
      handleRoundButtonPress,
    },
  };
};
