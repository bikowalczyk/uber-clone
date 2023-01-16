import React from 'react';

import {BodyText} from './CustomText.styles';

interface CustomText {
  variant: 'body';
  children: string;
}

const getComponent = (variant: CustomText['variant']) => {
  switch (variant) {
    case 'body':
      return BodyText;
    default:
      return BodyText;
  }
};

export const CustomText = ({variant, children}: CustomText) => {
  const Component = getComponent(variant);

  return <Component>{children}</Component>;
};
