const pallette = {
  white: '#fff',
  black: '#000',
  grey: 'rgba(34,34,34,0.8)',
};

export const colors = {
  typography: {
    body: pallette.grey,
  },
  common: {
    background: pallette.white,
    shadowDefault: pallette.black,
  },
  components: {
    mapSearchBar: {
      squareColor: pallette.black,
    },
  },
};

export type Colors = typeof colors;
