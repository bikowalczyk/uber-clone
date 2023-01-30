import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

import {DestinationInput} from 'components/DestinationInput';
import {Spacer} from 'components/common/Spacer';
import {Divider} from 'components/common/Divider';

import {
  Container,
  DecoratorCircle,
  DecoratorLine,
  DecoratorsContainer,
  DecoratorSquare,
  HorizontalContainer,
  InputsContainer,
} from './FlatlistHeader.styles';

interface FlatlistHeaderProps {
  destinationValue: string;
  onDestinationTextChange: (text: string) => void;
}

export const FlatlistHeader = ({
  destinationValue,
  onDestinationTextChange,
}: FlatlistHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Container>
        <Spacer height={(insets.top || scale(15)) + scale(60)} />
        <HorizontalContainer>
          <DecoratorsContainer>
            <DecoratorCircle />
            <DecoratorLine />
            <DecoratorSquare />
          </DecoratorsContainer>
          <Spacer width={scale(10)} />
          <InputsContainer>
            <DestinationInput disabled placeholder="Current Location" />
            <Spacer height={scale(10)} />
            <DestinationInput
              value={destinationValue}
              onChangeText={onDestinationTextChange}
              autoFocus
            />
          </InputsContainer>
        </HorizontalContainer>
        <Spacer height={scale(15)} />
        <Divider />
      </Container>
      <Spacer height={scale(15)} />
    </>
  );
};
