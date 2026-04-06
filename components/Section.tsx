import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="section">
      <div className="sectionInner">
        <div className="sectionHead">
          <h2 className="sectionTitle">{title}</h2>
          {subtitle ? <p className="sectionSub">{subtitle}</p> : null}
        </div>

        <div className="sectionBody">{children}</div>
      </div>
    </section>
  );
}