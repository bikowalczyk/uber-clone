import {useEffect, useRef, useState} from 'react';
import type {UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent['nativeEvent']['coordinate']>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        longitude: userLocation.longitude,
        latitude: userLocation.latitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);

  const closeDestinationModal = () => {
    setModalVisible(false);
  };

  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    setUserLocation(coordinate);
  };

  const handleMapSearchBarPress = () => {
    setModalVisible(true);
  };

  return {
    models: {
      mapRef,
      modalVisible,
    },
    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeDestinationModal,
    },
  };
};
