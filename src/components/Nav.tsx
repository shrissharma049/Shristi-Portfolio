import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <Link to="/" className="nav__name">Shristi Sharma</Link>
          <div className="nav__links">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </div>
          <button className="nav__hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav__mob${open ? ' open' : ''}`}>
        <button className="nav__mob-close" onClick={() => setOpen(false)}>✕</button>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </>
  );
}
