interface MetaItem { label: string; value: string; }

export default function MetaStrip({ items }: { items: MetaItem[] }) {
  return (
    <div className="meta-strip">
      <div className="wrap">
        <div className="meta-strip__grid">
          {items.map((item) => (
            <div key={item.label}>
              <p className="meta-item__label">{item.label}</p>
              <p className="meta-item__value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
