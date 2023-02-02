import {Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export const rideSheetSnapPoints = ['20%', '50%', '90%'];

export const mapRideSheetIndexToMapPadding = [
  height * 0.2,
  height * 0.5,
  height * 0.5,
];
