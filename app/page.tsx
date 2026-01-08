import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import { profile, skills, projects } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="heroGrid">
          <div className="section">
            <h1 className="h1">
              {profile.name}
              <br />
              <span style={{ color: "rgba(255,255,255,0.72)" }}>
                {profile.headline}
              </span>
            </h1>
            <p className="p">{profile.summary}</p>

            <div className="actions">
              <Link className="btn btnPrimary" href="/projects">View Projects</Link>
              <Link className="btn" href="/resume">Resume</Link>
              <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="section">
            <div className="sectionHeader">
              <h2 className="h2">Quick Info</h2>
              <div className="small">{profile.location}</div>
            </div>

            <div className="tags">
              {skills.languages.slice(0, 5).map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
              {skills.webApis.slice(0, 3).map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>

            <div className="hr" />

            <div className="small">Interests</div>
            <ul className="list">
              {profile.interests.slice(0, 4).map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Section title="Featured Projects" subtitle="A few highlights">
        <div className="grid">
          {projects.slice(0, 3).map((p) => (
            <div key={p.name} className="col4">
              <Card title={p.name} meta={p.desc} tags={p.tags} bullets={p.bullets} />
            </div>
          ))}
        </div>
        <div className="actions" style={{ marginTop: 14 }}>
          <Link className="btn" href="/projects">See all projects</Link>
        </div>
      </Section>
    </>
  );
}
