import {useState} from 'react';
import {useDebounce} from 'use-debounce';
import type {LatLng} from 'react-native-maps';

import {useTextSearchQuery} from 'models/places/useTextSearchQuery';
import {useSearchHistory} from 'hooks/useSearchHistory';
import type {TextSearchItem} from 'models/places/types/TextSearchItem';

type UseDestinationModal = {
  onPlaceItemPress: (coords: LatLng) => void;
  closeModal: () => void;
};

export const useDestinationModal = ({
  onPlaceItemPress,
  closeModal,
}: UseDestinationModal) => {
  const [destinationInputValue, setDestinationInputValue] = useState('');
  const [debouncedDestinationInputValue] = useDebounce(
    destinationInputValue,
    500,
  );

  const {searchHistoryItems, addItemToSearchHistory} = useSearchHistory(
    'places',
    'place_id',
  );

  const {responseData} = useTextSearchQuery(debouncedDestinationInputValue);

  const handleDestinationInputTextChange = (value: string) => {
    setDestinationInputValue(value);
  };

  const handlePlaceItemPress = (item: TextSearchItem) => {
    return () => {
      onPlaceItemPress({
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
      });
      addItemToSearchHistory(item);
    };
  };

  const handleRoundButtonPress = () => {
    closeModal();
  };

  const handleModalDismiss = () => {
    setDestinationInputValue('');
  };

  return {
    models: {
      destinationInputValue,
      textSearchQueryResponseData: responseData?.results || searchHistoryItems,
    },
    operations: {
      handleDestinationInputTextChange,
      handlePlaceItemPress,
      handleRoundButtonPress,
      handleModalDismiss,
    },
  };
};
