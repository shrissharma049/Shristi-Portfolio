interface Props {
  eyebrow: string;
  title: string;
  summary: string;
  heroBg: string;
  ctaHref?: string;
}

export default function CsHero({ eyebrow, title, summary, heroBg, ctaHref }: Props) {
  return (
    <header className="cs-hero" style={{ background: heroBg }}>
      <div className="wrap">
        <span className="cs-hero__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="cs-hero__summary">{summary}</p>
        {ctaHref && (
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="cs-hero__cta">
            View Live Product →
          </a>
        )}
      </div>
    </header>
  );
}
