import apiClient from '@/services/apiClient';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);

  return { data, error, isLoading };
}

export default useData;
