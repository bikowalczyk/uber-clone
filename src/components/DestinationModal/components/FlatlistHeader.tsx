import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

import {DestinationInput} from 'components/DestinationInput';
import {Spacer} from 'components/common/Spacer';

import {Container, HorizontalContainer} from './FlatlistHeader.styles';

export const FlatlistHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <Spacer height={insets.top + scale(60)} />
      <HorizontalContainer>
        <Container>
          <DestinationInput disabled placeholder="Current Location" />
          <DestinationInput />
        </Container>
      </HorizontalContainer>
    </Container>
  );
};
