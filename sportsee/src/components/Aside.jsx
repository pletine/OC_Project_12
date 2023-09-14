import '../styles/Aside.scss';

import IconYoga from '../assets/logo_meditation.svg';
import iconMuscu from '../assets/logo_muscu.svg';
import iconNatation from '../assets/logo_natation.svg';
import iconVelo from '../assets/logo_vélo.svg';

/**
 * Aside component with the logo of the different sports
 * @component Aside
 * @returns {JSX.Element} Aside component
 */
function Aside() {
  return (
    <aside className="aside_nav">
      <nav>
        <ul>
          <li>
            <img src={IconYoga} alt="Yoga" />
          </li>
          <li>
            <img src={iconNatation} alt="Natation" />
          </li>
          <li>
            <img src={iconVelo} alt="Vélo" />
          </li>
          <li>
            <img src={iconMuscu} alt="Musculation" />
          </li>
        </ul>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default Aside;
