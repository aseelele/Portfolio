import Link from "next/link";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { profile, skills } from "@/lib/data";

export default function HomePage() {
  return (
    <Section title={profile.name} subtitle={profile.headline}>
      <div className="heroCard">
        <p className="p">{profile.summary}</p>

        <div className="tags">
          {skills.technical.slice(0, 8).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <div className="tags" style={{ marginTop: 16 }}>
          <Link href="/about" className="tag">About</Link>
          <Link href="/skills" className="tag">Skills</Link>
          <Link href="/projects" className="tag">Projects</Link>
          <Link href="/vision" className="tag">Vision</Link>
          <Link href="/resume" className="tag">Resume</Link>
          <Link href="/connect" className="tag">Connect</Link>
        </div>
      </div>
    </Section>
  );
}