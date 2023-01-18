import {useState} from 'react';
import {useDebounce} from 'use-debounce';

import {useTextSearchQuery} from 'models/places/useTextSearchQuery';

export const useDestinationModal = () => {
  const [destinationInputValue, setDestinationInputValue] = useState('');
  const [debouncedDestinationInputValue] = useDebounce(
    destinationInputValue,
    500,
  );

  const {responseData} = useTextSearchQuery(debouncedDestinationInputValue);

  const handleDestinationInputTextChange = (value: string) => {
    setDestinationInputValue(value);
  };
  return {
    models: {
      destinationInputValue,
      textSearchQueryResponseData: responseData?.results || [],
    },
    operations: {handleDestinationInputTextChange},
  };
};
