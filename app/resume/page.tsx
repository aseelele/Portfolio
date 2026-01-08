import Section from "@/components/Section";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { experience, skills } from "@/lib/data";

export default function ResumePage() {
  return (
    <>
      <Section title="Resume" subtitle="Experience, strengths, and tools">
        <div className="grid">
          <div className="col12">
            <div className="card">
              <div className="cardTitle">Core Strengths</div>
              <div className="cardMeta">
                Full-stack development • API integration • Data workflows • Agile collaboration
              </div>
              <div className="tags">
                {skills.languages.map((s) => <Tag key={s}>{s}</Tag>)}
                {skills.webApis.map((s) => <Tag key={s}>{s}</Tag>)}
                {skills.dataML.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Experience">
        <div className="grid">
          {experience.map((e) => (
            <div key={e.title} className="col12">
              <Card title={e.title} meta={e.meta} bullets={e.bullets} tags={e.tags} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
