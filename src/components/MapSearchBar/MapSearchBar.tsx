import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInDown} from 'react-native-reanimated';

import {CustomText} from 'components/common/CustomText';

import {Container, Square, StyledPressable} from './MapSearchBar.styles';

interface MapSearchBarProps {
  onPress: () => void;
}

export const MapSearchBar = ({onPress}: MapSearchBarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Container entering={FadeInDown} insets={insets}>
      <StyledPressable onPress={onPress}>
        <Square />
        <CustomText variant="body">Where to?</CustomText>
      </StyledPressable>
    </Container>
  );
};
