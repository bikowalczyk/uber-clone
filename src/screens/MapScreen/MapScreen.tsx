import React from 'react';
import {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {useTheme} from '@emotion/react';
import {scale} from 'react-native-size-matters';

import {RoundButton} from 'components/RoundButton';
import {MapSearchBar} from 'components/MapSearchBar';
import {DestinationModal} from 'components/DestinationModal';
import {ChooseRideBottomSheet} from 'components/ChooseRideBottomSheet';

import {useMapScreen} from './useMapScreen';
import {StyledMapView, Container} from './MapScreen.styles';

export const MapScreen = () => {
  const {models, operations} = useMapScreen();
  const theme = useTheme();

  const renderMapMarkers = () => {
    return models.mapMarkers.map((item, index) => {
      return <Marker coordinate={item} key={index} />;
    });
  };

  return (
    <Container>
      <StyledMapView
        ref={models.mapRef}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsMyLocationButton={false}
        showsCompass={false}>
        {renderMapMarkers()}
        <MapViewDirections
          origin={models.mapMarkers[0]}
          destination={models.mapMarkers[1]}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeColor={theme.colors.screens.mapScreen.directionsStroke}
          strokeWidth={scale(5)}
          onReady={operations.handleMapDirectionsReady}
        />
      </StyledMapView>
      {models.isRouteVisible ? null : (
        <MapSearchBar onPress={operations.handleMapSearchBarPress} />
      )}
      <RoundButton
        onPress={operations.handleRoundButtonPress}
        icon={models.isRouteVisible ? 'arrow-back-outline' : 'ios-menu-outline'}
      />
      <DestinationModal
        visible={models.modalVisible}
        closeModal={operations.closeDestinationModal}
        onPlaceItemPress={operations.handlePlaceItemPress}
      />
      {models.isRouteVisible ? (
        <ChooseRideBottomSheet
          onChange={operations.handleBottomSheetChange}
          mapDirections={models.mapDirections}
        />
      ) : null}
    </Container>
  );
};
