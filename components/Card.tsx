import Tag from "@/components/Tag";

type CardProps = {
  title: string;
  meta?: string;
  bullets?: string[];
  tags?: string[];
  children?: React.ReactNode;
};

export default function Card({
  title,
  meta,
  bullets = [],
  tags = [],
  children,
}: CardProps) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      {meta ? <div className="cardMeta">{meta}</div> : null}

      {bullets.length > 0 ? (
        <ul className="list">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {tags.length > 0 ? (
        <div className="tags">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      ) : null}

      {children}
    </div>
  );
}