import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { profile, skills, education } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <Section title="About">
        <p className="p">{profile.summary}</p>

        <div className="hr" />

        <div className="grid">
          <div className="col6">
            <div className="small">Interests</div>
            <ul className="list">
              {profile.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          <div className="col6">
            <div className="small">Links</div>
            <ul className="list">
              <li><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={profile.links.portfolio} target="_blank" rel="noreferrer">Live Site</a></li>
              <li><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href={profile.links.email}>Email</a></li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Skills">
        <div className="grid">
          <div className="col6">
            <div className="small">Languages</div>
            <div className="tags">{skills.languages.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            <div className="hr" />
            <div className="small">Web & APIs</div>
            <div className="tags">{skills.webApis.map((s) => <Tag key={s}>{s}</Tag>)}</div>
          </div>

          <div className="col6">
            <div className="small">Data & ML</div>
            <div className="tags">{skills.dataML.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            <div className="hr" />
            <div className="small">Tools & Concepts</div>
            <div className="tags">
              {skills.tools.map((s) => <Tag key={s}>{s}</Tag>)}
              {skills.concepts.map((s) => <Tag key={s}>{s}</Tag>)}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Education">
        <div className="grid">
          <div className="col12">
            <div className="card">
              <div className="cardTitle">{education.degree}</div>
              <div className="cardMeta">
                {education.school} • {education.grad}
              </div>
              <div className="small">Relevant Coursework</div>
              <div className="tags">
                {education.coursework.map((c) => (
                  <Tag key={c}>{c}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
