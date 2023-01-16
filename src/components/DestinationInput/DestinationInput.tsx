import React from 'react';

import {DisabledInput, Input} from './DestinationInput.styles';

interface DestinationInputProps {
  disabled?: boolean;
  placeholder?: string;
  autofocus?: boolean;
}

export const DestinationInput = ({
  disabled,
  placeholder,
  autofocus,
}: DestinationInputProps) => {
  const sharedProps = {placeholder, autofocus};

  return disabled ? (
    <DisabledInput {...sharedProps} />
  ) : (
    <Input {...sharedProps} />
  );
};
