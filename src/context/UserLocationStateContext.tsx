import type {ReactNode} from 'react';
import React, {useContext, createContext, useState} from 'react';

interface LocationStateContextProviderProps {
  children: ReactNode;
}

type UserLocation = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

const useUserLocationStateContextValue = () => {
  const [userLocation, setUserLocation] = useState<UserLocation>();

  return {userLocation, setUserLocation};
};

type UserLocationStateContextValue = ReturnType<
  typeof useUserLocationStateContextValue
>;

const UserLocationStateContext =
  createContext<UserLocationStateContextValue | null>(null);

export const UserLocationStateContextProvider = ({
  children,
}: LocationStateContextProviderProps) => {
  const userLocationStateContextValue = useUserLocationStateContextValue();

  return (
    <UserLocationStateContext.Provider value={userLocationStateContextValue}>
      {children}
    </UserLocationStateContext.Provider>
  );
};

export const useUserLocationStateContext = () => {
  const context = useContext(UserLocationStateContext);

  if (!context) {
    throw new Error(
      'useUserLocationStateContext must be used inside UserLocationStateContextProvider',
    );
  }

  return context;
};
