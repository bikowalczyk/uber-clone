import styled from '@emotion/native';
import type {EdgeInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

interface StyledPressableProps {
  insets: EdgeInsets;
}

export const StyledPressable = styled.Pressable<StyledPressableProps>(
  ({theme, insets}) => {
    return {
      width: scale(45),
      height: scale(45),
      borderRadius: scale(45 / 2),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      position: 'absolute',
      top: insets.top || scale(15),
      left: scale(20),
      ...theme.shadows.primary(theme),
    };
  },
);
