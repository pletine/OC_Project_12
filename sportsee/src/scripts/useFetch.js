import { useState, useEffect } from 'react';

/**
 * Custom Hook to fetch data from API
 * @param {String} url - Url of the API 
 * @returns {object} - Return the data of the user in format of {data, loading, error}
 */
const useFetch = (url) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading('Loading...');
    setData(null);
    setError(null);

    const fetchData = async (urlUse) => {
        const dataFetch = await fetch(urlUse, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        const dataFetchJson = await dataFetch.json();
        const data = dataFetchJson.data;
        console.log(data);
        setData(data);
    };

    fetchData(url);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;