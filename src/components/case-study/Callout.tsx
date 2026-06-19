import { type ReactNode, type CSSProperties } from 'react';

interface Props {
  teal?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

export default function Callout({ teal, children, style }: Props) {
  return (
    <div className={`callout${teal ? ' callout--teal' : ''}`} style={style}>
      {children}
    </div>
  );
}
