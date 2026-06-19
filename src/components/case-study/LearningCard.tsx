interface Props { title: string; body: string; }

export default function LearningCard({ title, body }: Props) {
  return (
    <div className="learning">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
