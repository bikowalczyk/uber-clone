import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

export const StyledDivider = styled.View(({theme}) => {
  return {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: theme.colors.components.divider.backgroundColor,
  };
});
