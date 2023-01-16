import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  width?: number | string;
  height?: number | string;
}

export const Spacer = ({width, height}: SpacerProps) => {
  return <View style={{width, height}} />;
};
