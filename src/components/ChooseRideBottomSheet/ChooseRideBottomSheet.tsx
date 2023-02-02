import React from 'react';
import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';

import {rideSheetSnapPoints} from 'constants/bottomSheetSnapPoints';

interface ChooseRideBottomSheetProps {
  onChange: (index: number) => void;
}

export const ChooseRideBottomSheet = ({
  onChange,
}: ChooseRideBottomSheetProps) => {
  return (
    <BottomSheet index={1} onChange={onChange} snapPoints={rideSheetSnapPoints}>
      <BottomSheetSectionList sections={[]} />
    </BottomSheet>
  );
};
