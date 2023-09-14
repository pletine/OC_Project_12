import { useEffect, useState } from 'react';

/**
 * Custom Hook to choose the mode of data selection
 * The function change the mode of data selection when the user press the key "l"
 * @returns {object} - Return the mode of data selection in format of {getDataMode, setGetDataMode}
 */
const useChooseDataMode = () => {
    // Mode of data selection : data from API or from Mock
    // If true, use API, else use Mock
    const [getDataMode, setGetDataMode] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
          switch(event.key) {
            case 'l':
              // Change the Mode of Get Data
              setGetDataMode(!getDataMode);
              break;
            case 'm':
              // Show the actual Mode of Get Data
              if(getDataMode) {
                alert('Data get from API');
              } else {
                alert('Data get from Mock');
              }
              break;
            default:
              break;
          }
    };
    document.addEventListener('keydown', handleKeyPress);

    // Delete the event listener on cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [getDataMode]);

  return [getDataMode, setGetDataMode];
}

export default useChooseDataMode;