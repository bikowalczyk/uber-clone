import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItemToStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

export const getItemFromStorage = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key);
    if (item) {
      return item;
    }
  } catch (err) {
    console.log(err);
  }
};
