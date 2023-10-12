import { useState, useEffect } from 'react';
import { ApiResponseType } from '../types';

// Modified Use Fetch Hook from https://blog.openreplay.com/building-a-custom-fetch-hook-in-react/
export const useFetch = (url: string) => {
  const [data, setData] = useState({} as ApiResponseType);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<null | unknown | string>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setError(err);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
};
