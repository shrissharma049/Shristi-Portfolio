import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          <span className="footer__name">Shristi Sharma</span>
          <nav className="footer__nav">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer__bottom">Available for immediate start · Watford, UK · Open to relocation</div>
      </div>
    </footer>
  );
}
