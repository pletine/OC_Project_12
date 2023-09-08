import { useEffect, useState } from 'react';

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
              console.log(event.key);
              break;
          }
    };

    // Ajoutez un écouteur d'événements pour la touche "m" lorsque le composant est monté
    document.addEventListener('keydown', handleKeyPress);

    // N'oubliez pas de supprimer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [getDataMode]);

  return [getDataMode, setGetDataMode];
}

export default useChooseDataMode;