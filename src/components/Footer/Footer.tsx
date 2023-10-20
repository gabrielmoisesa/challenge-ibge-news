import './Footer.css';
import brMapImg from '../../assets/br-map.png';

function Footer() {
  return (
    <footer className="main-footer">
      <p>©2023 Gabriel Moises Alves</p>
      <div className="footer-logo-container">
        <div className="footer-image-container">
          <img src={ brMapImg } alt="Brazil Map Logo" />
        </div>
        <p>IBGE News</p>
      </div>
    </footer>
  );
}

export default Footer;
