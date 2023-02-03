import React from 'react';
import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';
import type {SectionListRenderItem} from 'react-native/types';

import {rideSheetSnapPoints} from 'constants/bottomSheetSnapPoints';
import type {RideItem} from 'types/rideItem';

import {ChooseRideItem} from './components/ChooseRideItem';
import {ridesData} from './mockData';

interface ChooseRideBottomSheetProps {
  onChange: (index: number) => void;
}

export const ChooseRideBottomSheet = ({
  onChange,
}: ChooseRideBottomSheetProps) => {
  const renderSectionItem: SectionListRenderItem<RideItem> = ({item}) => {
    return (
      <ChooseRideItem
        key={item.id}
        variant="compact"
        onPress={() => {}}
        title={item.type}
        price={'50'}
        eta={item.eta}
        description={item.description}
        selected={item.id === '1'}
        maxPassengers={item.maxPassengers}
      />
    );
  };

  return (
    <BottomSheet index={1} onChange={onChange} snapPoints={rideSheetSnapPoints}>
      <BottomSheetSectionList
        renderItem={renderSectionItem}
        sections={ridesData}
      />
    </BottomSheet>
  );
};
