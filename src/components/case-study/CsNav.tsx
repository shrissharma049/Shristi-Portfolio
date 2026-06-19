import { Link } from 'react-router-dom';

interface NavLink { label: string; to: string; }

interface Props { prev?: NavLink; next?: NavLink; }

export default function CsNav({ prev, next }: Props) {
  return (
    <div className="cs-nav">
      {prev ? <Link to={prev.to}>← {prev.label}</Link> : <span style={{ color: 'var(--ink-muted)', fontSize: '.9rem' }}>← Previous</span>}
      {next && <Link to={next.to} className="cs-nav__next">Next: {next.label} →</Link>}
    </div>
  );
}
