import { type ReactNode } from 'react';

interface Props { id: string; title: string; children: ReactNode; }

export default function CsSection({ id, title, children }: Props) {
  return (
    <section className="cs-section" id={id}>
      <h2>{title}</h2>
      <div className="cs-section__underline" />
      {children}
    </section>
  );
}
