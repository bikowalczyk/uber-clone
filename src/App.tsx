import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {MapScreen} from 'screens/MapScreen';
import {LocationPermissionsService} from 'services/LocationPermissionsService';
import {ThemeProvider} from 'theme/ThemeProvider';

export const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MapScreen />
        <LocationPermissionsService />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
