import { type ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import CsHero from '../components/case-study/CsHero';
import MetaStrip from '../components/case-study/MetaStrip';
import TableOfContents, { type TocItem } from '../components/case-study/TableOfContents';
import { useTocObserver } from '../hooks/useTocObserver';

interface MetaItem { label: string; value: string; }

interface Props {
  pageTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroBg: string;
  ctaHref?: string;
  meta: MetaItem[];
  toc: TocItem[];
  children: ReactNode;
}

export default function CaseStudyLayout({
  pageTitle, metaDescription, eyebrow, title, summary, heroBg, ctaHref, meta, toc, children,
}: Props) {
  const sectionIds = toc.map((t) => t.id);
  const activeId = useTocObserver(sectionIds);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <CsHero eyebrow={eyebrow} title={title} summary={summary} heroBg={heroBg} ctaHref={ctaHref} />
      <MetaStrip items={meta} />

      <div className="wrap">
        <div className="cs-body">
          <TableOfContents items={toc} activeId={activeId} />
          <main className="cs-content">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
