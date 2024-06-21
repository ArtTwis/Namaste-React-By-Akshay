import { useEffect, useState } from "react";

const useLocalStorage = (key = undefined, value = undefined) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (key != undefined && value === undefined) {
      let item = localStorage.getItem(key);
      setResult(JSON.parse(item));
    } else if (key != undefined && value != undefined) {
      if (typeof value === "object") value = JSON.stringify(value);
      setResult(localStorage.setItem(key, value));
    } else {
      setResult(undefined);
    }
  }, []);

  return result;
};

export default useLocalStorage;
