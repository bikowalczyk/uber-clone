import styled from '@emotion/native';
import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

export const Container = styled.View({});

export const HorizontalContainer = styled.View({
  flexDirection: 'row',
  width: Dimensions.get('window').width - scale(50),
});
