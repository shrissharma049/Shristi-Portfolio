import { scrollToSection } from '../../utils/scrollTo';

export interface TocItem { id: string; num: string; label: string; }

interface Props { items: TocItem[]; activeId: string; }

export default function TableOfContents({ items, activeId }: Props) {
  return (
    <aside className="toc" aria-label="Table of contents">
      <p className="toc__label">Contents</p>
      <div className="toc__list">
        {items.map((item) => (
          <button
            key={item.id}
            className={`toc__item${activeId === item.id ? ' active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            <span className="toc__num">{item.num} /</span> {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
