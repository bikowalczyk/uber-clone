import {useEffect} from 'react';
import * as Location from 'expo-location';

export const LocationPermissionsService = () => {
  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  return null;
};
