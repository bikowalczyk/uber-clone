import React from 'react';

import {RoundButton} from 'components/RoundButton';
import {MapSearchBar} from 'components/MapSearchBar';
import {DestinationModal} from 'components/DestinationModal';

import {useMapScreen} from './useMapScreen';
import {StyledMapView, Container} from './MapScreen.styles';

export const MapScreen = () => {
  const {models, operations} = useMapScreen();

  return (
    <Container>
      <StyledMapView
        ref={models.mapRef}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsMyLocationButton={false}
        showsCompass={false}
      />
      <MapSearchBar onPress={operations.handleMapSearchBarPress} />
      <RoundButton icon="ios-menu-outline" />
      <DestinationModal
        visible={models.modalVisible}
        closeModal={operations.closeDestinationModal}
      />
    </Container>
  );
};
