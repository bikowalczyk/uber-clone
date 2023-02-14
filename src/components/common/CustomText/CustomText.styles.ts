import styled from '@emotion/native';
import {scale} from 'react-native-size-matters';

export const BodyText = styled.Text(({theme}) => {
  return {
    fontSize: scale(14),
    color: theme.colors.typography.body,
  };
});

export const TitleText = styled.Text(({theme}) => {
  return {
    fontSize: scale(15),
    fontWeight: '700',
    color: theme.colors.typography.common,
  };
});

export const CaptionText = styled.Text(({theme}) => {
  return {
    fontSize: scale(13),
    color: theme.colors.typography.body,
  };
});

export const HeaderText = styled.Text(({theme}) => {
  return {
    fontSize: scale(17),
    color: theme.colors.typography.common,
    fontWeight: '500',
  };
});

export const SmallHeaderText = styled.Text(({theme}) => {
  return {
    fontSize: scale(15),
    color: theme.colors.typography.common,
    fontWeight: '500',
  };
});
