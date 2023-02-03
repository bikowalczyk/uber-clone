export type RideItemPrice = {
  perKm: number;
  perMinute: number;
  currency: string;
};

export type RideItem = {
  type: string;
  description: string;
  eta: number;
  maxPassengers: number | null;
  id: string;
  price: RideItemPrice;
};
