import {useCallback, useEffect, useRef, useState} from 'react';
import type {LatLng, UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';
import type {MapDirectionsResponse} from 'react-native-maps-directions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

import {useUserLocationStateContext} from 'context/UserLocationStateContext';
import {mapRideSheetIndexToMapPadding} from 'constants/bottomSheetSnapPoints';

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [mapMarkers, setMapMarkers] = useState<LatLng[]>([]);
  const [mapDirections, setMapDirections] = useState<MapDirectionsResponse>();
  const insets = useSafeAreaInsets();

  const {userLocation, setUserLocation} = useUserLocationStateContext();

  const isRouteVisible = mapMarkers.length === 2;

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
    if (coordinate && !modalVisible && !isRouteVisible) {
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
    if (userLocation?.coords) {
      setMapMarkers([userLocation?.coords, coords]);
      setModalVisible(false);
    }
  };

  const handleMapDirectionsReady = (routeInfo: MapDirectionsResponse) => {
    setMapDirections(routeInfo);
  };

  const handleRoundButtonPress = () => {
    if (isRouteVisible) {
      setMapMarkers([]);
      centerToUserLocation();
    }
  };

  const handleBottomSheetChange = (index: number) => {
    if (mapDirections?.coordinates) {
      mapRef.current?.fitToCoordinates(mapDirections?.coordinates, {
        edgePadding: {
          top: insets.top + scale(30),
          bottom: mapRideSheetIndexToMapPadding[index],
          left: scale(15),
          right: scale(15),
        },
      });
    }
  };

  return {
    models: {
      mapRef,
      modalVisible,
      mapMarkers,
      isRouteVisible,
      mapDirections,
    },
    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeDestinationModal,
      handlePlaceItemPress,
      handleMapDirectionsReady,
      handleRoundButtonPress,
      handleBottomSheetChange,
    },
  };
};
