export default function Card({
  title,
  meta,
  bullets,
  tags,
  children,
}: {
  title: string;
  meta?: string;
  bullets?: string[];
  tags?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      {meta ? <div className="cardMeta">{meta}</div> : null}
      {children}
      {bullets?.length ? (
        <ul className="list">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      {tags?.length ? (
        <div className="tags">
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
