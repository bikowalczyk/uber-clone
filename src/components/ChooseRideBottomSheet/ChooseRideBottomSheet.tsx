import React from 'react';
import BottomSheet, {BottomSheetSectionList} from '@gorhom/bottom-sheet';
import type {SectionListData, SectionListRenderItem} from 'react-native/types';
import type {MapDirectionsResponse} from 'react-native-maps-directions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {rideSheetSnapPoints} from 'constants/bottomSheetSnapPoints';
import type {RideItem} from 'types/rideItem';
import {calculateRidePrice} from 'utils/calculateRidePrice';
import {SectionHeader} from 'components/ChooseRideBottomSheet/components/SectionHeader';

import {ChooseRideItem} from './components/ChooseRideItem';
import {ridesData} from './mockData';
import {useChooseRideBottomSheet} from './useChooseRideBottomSheet';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

interface ChooseRideBottomSheetProps {
  onChange: (index: number) => void;
  mapDirections?: MapDirectionsResponse;
}

export const ChooseRideBottomSheet = ({
  onChange,
  mapDirections,
}: ChooseRideBottomSheetProps) => {
  const insets = useSafeAreaInsets();
  const {models, operations} = useChooseRideBottomSheet({onChange});

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<RideItem>;
  }) => {
    return models.isBottomSheetExpanded ? (
      <SectionHeader title={section.title} />
    ) : null;
  };

  const renderSectionItem: SectionListRenderItem<RideItem> = ({item}) => {
    return (
      <ChooseRideItem
        key={item.id}
        variant={models.isBottomSheetExpanded ? 'expanded' : 'compact'}
        onPress={operations.handleRideItemPress(item)}
        title={item.type}
        price={calculateRidePrice(item.price, mapDirections)}
        eta={item.eta}
        description={item.description}
        selected={item.id === models.selectedRide.id}
        maxPassengers={item.maxPassengers}
      />
    );
  };

  return (
    <>
      <BottomSheet
        index={1}
        onChange={operations.handleBottomSheetChange}
        snapPoints={rideSheetSnapPoints(insets)}>
        <BottomSheetSectionList
          ListHeaderComponent={<Header />}
          renderItem={renderSectionItem}
          sections={ridesData}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled={false}
        />
      </BottomSheet>
      <Footer selectedRide={models.selectedRide} offset={models.footerOffset} />
    </>
  );
};
