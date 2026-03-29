import Section from "@/components/Section";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { education, experience, profile, skills } from "@/lib/data";

export default function ResumePage() {
  return (
    <>
      <Section title="Resume" subtitle="Education, experience, and strengths">
        <div className="grid">
          <div className="col12">
            <div className="card">
              <div className="cardTitle">Core Strengths</div>
              <div className="cardMeta">
                Full-stack development • API integration • Data workflows • Agile collaboration
              </div>
              <div className="tags">
                {skills.technical.slice(0, 10).map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Education">
        <div className="card">
          <div className="cardTitle">{education.degree}</div>
          <div className="cardMeta">
            {education.school} • {education.grad}
          </div>

          <div className="hr" />

          <div className="cardTitle" style={{ fontSize: 14 }}>Relevant Coursework</div>
          <div className="tags">
            {education.coursework.map((course) => (
              <Tag key={course}>{course}</Tag>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Experience">
        <div className="grid">
          {experience.map((item) => (
            <div key={item.title} className="col12">
              <Card
                title={item.title}
                meta={item.meta}
                bullets={item.bullets}
                tags={item.tags}
              />
            </div>
          ))}
        </div>
      </Section>

     <Section title="Resume File">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="deckLink"
  >
    View Resume
  </a>
</Section>
    </>
  );
}