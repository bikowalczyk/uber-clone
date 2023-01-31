import styled from '@emotion/native';
import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import type {EdgeInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

interface ContainerProps {
  insets: EdgeInsets;
}

export const Container = styled(Animated.View)<ContainerProps>(({insets}) => {
  return {
    top: (insets.top || scale(15)) + scale(60),
    position: 'absolute',
    alignSelf: 'center',
  };
});

export const StyledPressable = styled.Pressable(({theme}) => {
  return {
    backgroundColor: theme.colors.common.background,
    width: Dimensions.get('window').width - scale(50),
    minHeight: scale(42),
    alignItems: 'center',
    padding: scale(15),
    ...theme.shadows.primary(theme),
    flexDirection: 'row',
  };
});

export const Square = styled.View(({theme}) => {
  return {
    width: scale(7),
    height: scale(7),
    backgroundColor: theme.colors.components.mapSearchBar.squareColor,
    marginRight: scale(20),
  };
});
