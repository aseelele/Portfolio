export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <h2 className="h2">{title}</h2>
        {subtitle ? <div className="small">{subtitle}</div> : null}
      </div>
      {children}
    </section>
  );
}
