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

    const fetchTestData = async (urlUse) => {
      try {
        const data = await fetch(urlUse, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })
          .then((response) => {
            setLoading(false);
            return response.json();
          })
          .then((response) => {
            setLoading(false);
            return response.data;
          });
        setData(data);
      } catch (error) {
        setLoading(false);
        setError('Error:' + error);
        // console.error('Error:', error);
      }
    };

    fetchTestData(url);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;