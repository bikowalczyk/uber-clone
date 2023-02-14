const pallette = {
  white: '#fff',
  black: '#000',
  grey: 'rgba(34,34,34,0.8)',
  lightGrey: 'rgba(100,100,100,0.35)',
  lighterGrey: 'rgba(100,100,100,0.1)',
  blue: '#4a80f5',
};

export const colors = {
  typography: {
    body: pallette.grey,
    textDisabled: pallette.lightGrey,
    common: pallette.black,
  },
  common: {
    background: pallette.white,
    shadowDefault: pallette.black,
  },
  components: {
    mapSearchBar: {
      squareColor: pallette.black,
    },
    destinationInput: {
      disabledBackground: pallette.lighterGrey,
      activeBackground: pallette.lightGrey,
    },
    destinationModal: {
      decoratorCircle: pallette.lightGrey,
      decoratorSquare: pallette.black,
    },
    divider: {
      backgroundColor: pallette.lightGrey,
    },
    placeItem: {
      iconBackground: pallette.blue,
      iconTint: pallette.white,
    },
    chooseRideItem: {
      selectedBorderColor: pallette.black,
      borderColor: pallette.white,
    },
    rideBottomSheet: {
      footerRightIconBackground: pallette.lighterGrey,
      footerLeftIconBackground: pallette.black,
      footerLeftIconColor: pallette.white,
    },
    actionButton: {
      backgroundColor: pallette.black,
      fontColor: pallette.white,
    },
  },
  screens: {
    mapScreen: {
      directionsStroke: pallette.blue,
    },
  },
};

export type Colors = typeof colors;
