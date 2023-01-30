import {useEffect, useState} from 'react';

import {getItemFromStorage, saveItemToStorage} from 'utils/storage';

export const useSearchHistory = (key: string, idKey: string) => {
  const [searchHistoryItems, setSearchHistoryItems] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const item = await getItemFromStorage(key);
      if (item) {
        const previousSearches = JSON.parse(item);
        // restrict number of history items to 15
        previousSearches.slice(0, 14);
        setSearchHistoryItems(previousSearches);
      }
    })();
  }, [key]);

  const addItemToSearchHistory = (item: any) => {
    const filteredData = searchHistoryItems?.filter(searchItem => {
      return searchItem[idKey] !== item[idKey];
    });
    setSearchHistoryItems([item, ...filteredData]);
    saveItemToStorage('places', JSON.stringify([item, ...filteredData]));
  };

  return {searchHistoryItems, addItemToSearchHistory};
};
