import React from 'react';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';

import {Spacer} from 'components/common/Spacer';
import {CustomText} from 'components/common/CustomText';
import {useDate} from 'hooks/useDate';

import {
  CarImage,
  Container,
  IconContainer,
  StyledPressable,
  TextContainer,
} from './ChooseRideItem.styles';

interface ChooseRideItemProps {
  title: string;
  price: string;
  description: string;
  eta: number;
  maxPassengers: number | null;
  selected: boolean;
  onPress: () => void;
  variant: 'compact' | 'expanded';
}

export const ChooseRideItem = ({
  title,
  selected,
  onPress,
  maxPassengers,
  variant,
  description,
  price,
  eta,
}: ChooseRideItemProps) => {
  const {date} = useDate();
  const isExtended = variant === 'expanded';

  const formattedEta = date.add(eta, 'minutes').format('HH:mm');

  return (
    <StyledPressable selected={selected} onPress={onPress}>
      <CarImage source={require('assets/UberX.jpeg')} />
      <Spacer width={scale(5)} />
      <TextContainer>
        <Container>
          <IconContainer>
            <CustomText variant="header">{title}</CustomText>
            <Spacer width={scale(5)} />
            {maxPassengers && (selected || isExtended) ? (
              <>
                <Icon name="person" size={scale(14)} />
                <CustomText variant="body">
                  {maxPassengers.toString()}
                </CustomText>
              </>
            ) : null}
          </IconContainer>
          {!isExtended ? (
            <CustomText variant="body">
              {selected
                ? `${formattedEta} • ${eta} mins to arrival`
                : formattedEta}
            </CustomText>
          ) : null}
          {isExtended ? (
            <CustomText variant="caption">{description}</CustomText>
          ) : null}
        </Container>
        <CustomText variant="header">{price}</CustomText>
      </TextContainer>
    </StyledPressable>
  );
};
