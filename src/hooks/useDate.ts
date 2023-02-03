import type {Dayjs} from 'dayjs';
import dayjs from 'dayjs';
import {useEffect, useRef, useState} from 'react';

export const useDate = () => {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const intervalIds = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const _intervalIds = intervalIds;
    const intervalID = setInterval(() => {
      if (
        dayjs().format('DD-MM-YYYY:HH:mm') !== date.format('DD-MM-YYYY:HH:mm')
      ) {
        setDate(dayjs());
      }
    }, 1000);

    intervalIds.current.push(intervalID);

    return () => {
      _intervalIds.current.forEach(id => {
        clearInterval(id);
      });
    };
  }, [date]);

  return {date};
};
