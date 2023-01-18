import React from 'react';
import {scale} from 'react-native-size-matters';

import {CustomText} from 'components/common/CustomText';
import {Spacer} from 'components/common/Spacer';
import {Divider} from 'components/common/Divider';

import {
  Container,
  IconContainer,
  IconImage,
  TextContainer,
} from './PlaceItem.styles';

interface PlaceItemProps {
  name: string;
  address: string;
  iconUrl: string;
  onPress: () => void;
}

export const PlaceItem = ({
  onPress,
  iconUrl,
  name,
  address,
}: PlaceItemProps) => {
  return (
    <Container onPress={onPress}>
      <IconContainer>
        <IconImage source={{uri: iconUrl}} />
      </IconContainer>
      <Spacer width={scale(10)} />
      <TextContainer>
        <CustomText variant="title">{name}</CustomText>
        <Spacer height={scale(3)} />
        <CustomText variant="caption">{address}</CustomText>
        <Spacer height={scale(5)} />
        <Divider />
      </TextContainer>
    </Container>
  );
};
