import {useState} from 'react';

export const useDestinationModal = () => {
  const [destinationInputValue, setDestinationInputValue] = useState('');

  const handleDestinationInputTextChange = (value: string) => {
    setDestinationInputValue(value);
  };
  return {
    models: {destinationInputValue},
    operations: {handleDestinationInputTextChange},
  };
};
