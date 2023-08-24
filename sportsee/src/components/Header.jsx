import logo from '../assets/logo.svg';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="./">Accueil</a>
          </li>
          <li>
            <a href="./">Profil</a>
          </li>
          <li>
            <a href="./">Réglage</a>
          </li>
          <li>
            <a href="./">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
