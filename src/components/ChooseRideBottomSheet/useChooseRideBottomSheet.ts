import {useEffect, useState} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {scale} from 'react-native-size-matters';

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
  const footerOffset = useSharedValue(0);

  const isBottomSheetExpanded = snapIndex === 2;

  useEffect(() => {
    if (isBottomSheetExpanded) {
      footerOffset.value = scale(200);
    } else {
      footerOffset.value = 0;
    }
  }, [footerOffset, isBottomSheetExpanded]);

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
    models: {selectedRide, snapIndex, isBottomSheetExpanded, footerOffset},
    operations: {handleRideItemPress, handleBottomSheetChange},
  };
};
