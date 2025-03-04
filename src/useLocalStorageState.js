import { useEffect, useState } from "react";

export const useLocalStorageState = (initialState, keyValue) => {
  const [value, setValue] = useState(function () {
    const storedMovies = localStorage.getItem(keyValue);
    return storedMovies ? JSON.parse(storedMovies) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(keyValue, JSON.stringify(value));
  }, [value, keyValue]);
  return [value, setValue];
};
