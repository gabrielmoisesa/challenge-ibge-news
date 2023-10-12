import './Header.css';
import brMapImg from '../../assets/br-map.png';

function Header() {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={ brMapImg } alt="Brazil Map Logo" />
      </div>
      <div className="title-container">
        <h1>IBGE NEWS</h1>
      </div>
    </header>
  );
}

export default Header;
