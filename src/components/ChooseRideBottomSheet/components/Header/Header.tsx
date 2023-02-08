import React from 'react';
import {scale} from 'react-native-size-matters';

import {CustomText} from 'components/common/CustomText';
import {Spacer} from 'components/common/Spacer';
import {Divider} from 'components/common/Divider';

import {Container} from './Header.styles';

export const Header = () => {
  return (
    <Container>
      <CustomText variant="header">Choose your ride</CustomText>
      <Spacer height={scale(15)} />
      <Divider />
    </Container>
  );
};
