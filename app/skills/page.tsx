import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { skills } from "@/lib/data";

export default function SkillsPage() {
  return (
    <>
      <Section title="Skills" subtitle="Soft, technical, and professional strengths">
        <div className="grid">
          <div className="col4">
            <div className="card">
              <div className="cardTitle">Soft Skills</div>
              <div className="tags">
                {skills.soft.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="col4">
            <div className="card">
              <div className="cardTitle">Technical Skills</div>
              <div className="tags">
                {skills.technical.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="col4">
            <div className="card">
              <div className="cardTitle">Tools & Concepts</div>
              <div className="tags">
                {skills.tools.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
                {skills.concepts.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}