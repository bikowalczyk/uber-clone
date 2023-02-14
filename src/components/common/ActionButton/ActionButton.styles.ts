import styled from '@emotion/native';
import {scale} from 'react-native-size-matters';

export const StyledPressable = styled.Pressable(({theme}) => {
  return {
    height: scale(50),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.components.actionButton.backgroundColor,
  };
});
