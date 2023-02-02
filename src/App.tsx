import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {UserLocationStateContextProvider} from 'context/UserLocationStateContext';
import {MapScreen} from 'screens/MapScreen';
import {LocationPermissionsService} from 'services/LocationPermissionsService';
import {ThemeProvider} from 'theme/ThemeProvider';

export const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider>
          <UserLocationStateContextProvider>
            <MapScreen />
            <LocationPermissionsService />
          </UserLocationStateContextProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
