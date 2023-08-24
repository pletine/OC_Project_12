import '../styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      Hello Word
      <FontAwesomeIcon icon={faStar} className="star filled" />
    </div>
  );
}

export default App;
