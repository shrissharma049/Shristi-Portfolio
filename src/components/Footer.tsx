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
            <a href="https://mail.google.com/mail/?view=cm&to=shrissharma049@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://www.linkedin.com/in/shristi-sharma-0a191a224/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://dribbble.com/shristyyyy" target="_blank" rel="noopener noreferrer">Dribbble</a>
            <a href="https://www.behance.net/shristisharma6" target="_blank" rel="noopener noreferrer">Behance</a>
          </nav>
        </div>
        <div className="footer__bottom">Available for immediate start · Watford, UK · Open to relocation</div>
      </div>
    </footer>
  );
}
