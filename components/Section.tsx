type SectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="section">
      <div className="sectionHead">
        <h2 className="sectionTitle">{title}</h2>
        {subtitle ? <p className="sectionSub">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}