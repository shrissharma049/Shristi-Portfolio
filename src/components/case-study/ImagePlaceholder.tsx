interface Props { height?: number; label: string; }

export default function ImagePlaceholder({ height = 300, label }: Props) {
  return (
    <div className="img-ph" style={{ height }}>
      {label}
    </div>
  );
}
