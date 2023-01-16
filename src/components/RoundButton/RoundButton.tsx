import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

import {StyledPressable} from './RoundButton.styles';

interface RoundButtonProps {
  icon: 'ios-menu-outline' | 'arrow-back-outline';
  onPress?: () => void;
}

export const RoundButton = ({icon, onPress}: RoundButtonProps) => {
  const insets = useSafeAreaInsets();
  return (
    <StyledPressable insets={insets} onPress={onPress}>
      <Icon name={icon} size={scale(27)} />
    </StyledPressable>
  );
};
