import React from 'react';

import {
  BodyText,
  TitleText,
  CaptionText,
  HeaderText,
} from './CustomText.styles';

interface CustomText {
  variant: 'body' | 'title' | 'caption' | 'header';
  children: string;
}

const getComponent = (variant: CustomText['variant']) => {
  switch (variant) {
    case 'body':
      return BodyText;
    case 'title':
      return TitleText;
    case 'caption':
      return CaptionText;
    case 'header':
      return HeaderText;
    default:
      return BodyText;
  }
};

export const CustomText = ({variant, children}: CustomText) => {
  const Component = getComponent(variant);

  return <Component>{children}</Component>;
};
