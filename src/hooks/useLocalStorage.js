import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue)
  
 
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) { 
            console.log('si');
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
      }catch (e) {
        setError(e);
      }
    }, 1000)
  })
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (e) {
        setError(e);
      }
    };
      return {
          item,
          saveItem,
          loading,
          error,
      };
    }
export default useLocalStorage;