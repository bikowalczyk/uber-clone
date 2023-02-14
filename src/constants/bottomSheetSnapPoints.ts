import {Dimensions} from 'react-native';
import type {EdgeInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

import {ridesData} from 'components/ChooseRideBottomSheet/mockData';

const {height} = Dimensions.get('screen');

export const rideSheetSnapPoints = (insets: EdgeInsets) => {
  const footerHeight = scale(120) + (insets.bottom || scale(10));
  const itemHeight = scale(85);
  const headerHeight = scale(50) + 24;

  return [
    footerHeight + itemHeight + headerHeight,
    footerHeight + headerHeight + ridesData[0].data.length * itemHeight,
    height - insets.top,
  ];
};

export const mapRideSheetIndexToMapPadding = [
  height * 0.3,
  height * 0.45,
  height * 0.45,
];
