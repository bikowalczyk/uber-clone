import React from 'react';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@emotion/react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {SharedValue} from 'react-native-reanimated';
import {withTiming, useAnimatedStyle} from 'react-native-reanimated';

import {Divider} from 'components/common/Divider';
import {Spacer} from 'components/common/Spacer';
import {CustomText} from 'components/common/CustomText';
import {ActionButton} from 'components/common/ActionButton';
import type {RideItem} from 'types/rideItem';

import {
  ButtonContainer,
  Container,
  HorizontalContainer,
  IconsContainer,
  LeftIconContainer,
  TextContainer,
} from './Footer.styles';

interface FooterProps {
  selectedRide: RideItem;
  offset: SharedValue<number>;
}

export const Footer = ({selectedRide, offset}: FooterProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: withTiming(offset.value)}],
    };
  });

  return (
    <Container style={animatedStyle} insets={insets}>
      <Divider />
      <Spacer height={scale(15)} />
      <HorizontalContainer>
        <IconsContainer>
          <LeftIconContainer>
            <Icon
              name="person"
              color={
                theme.colors.components.rideBottomSheet.footerLeftIconColor
              }
              size={scale(14)}
            />
          </LeftIconContainer>
          <Icon name="briefcase-sharp" size={scale(14)} />
        </IconsContainer>
        <Spacer width={scale(10)} />
        <TextContainer>
          <CustomText variant="smHeader">Personal</CustomText>
          <CustomText variant="caption">Apple Pay</CustomText>
        </TextContainer>
        <Icon
          name="chevron-forward"
          size={scale(16)}
          color={theme.colors.typography.body}
        />
      </HorizontalContainer>
      <Spacer height={scale(15)} />
      <ButtonContainer>
        <ActionButton text={`Choose: ${selectedRide.type} `} />
      </ButtonContainer>
    </Container>
  );
};
