interface Stat { label: string; value: string; }

export default function SummaryStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="summary-grid__stats">
      {stats.map((s) => (
        <div key={s.label}>
          <p className="sum-stat__label">{s.label}</p>
          <p className="sum-stat__val">{s.value}</p>
        </div>
      ))}
    </div>
  );
}
