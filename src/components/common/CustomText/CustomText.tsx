import React from 'react';

import {
  BodyText,
  TitleText,
  CaptionText,
  HeaderText,
  SmallHeaderText,
} from './CustomText.styles';

interface CustomText {
  variant: 'body' | 'title' | 'caption' | 'header' | 'smHeader';
  children: string;
  color?: string;
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
    case 'smHeader':
      return SmallHeaderText;
    default:
      return BodyText;
  }
};

export const CustomText = ({variant, children, color}: CustomText) => {
  const Component = getComponent(variant);

  const sharedProps = {
    style: {
      ...(color ? {color} : {}),
    },
  };

  return <Component {...sharedProps}>{children}</Component>;
};
