import {useState} from 'react';

import {ridesData} from 'components/ChooseRideBottomSheet/mockData';
import type {RideItem} from 'types/rideItem';

interface UseChooseRideBottomSheetProps {
  onChange: (index: number) => void;
}

export const useChooseRideBottomSheet = ({
  onChange,
}: UseChooseRideBottomSheetProps) => {
  const [selectedRide, setSelectedRide] = useState<RideItem>(
    ridesData[0].data[0],
  );
  const [snapIndex, setSnapIndex] = useState(1);

  const handleRideItemPress = (item: RideItem) => {
    return () => {
      setSelectedRide(item);
    };
  };

  const handleBottomSheetChange = (index: number) => {
    setSnapIndex(index);
    onChange(index);
  };

  return {
    models: {selectedRide, snapIndex},
    operations: {handleRideItemPress, handleBottomSheetChange},
  };
};
