import Section from "@/components/Section";
import Card from "@/components/Card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Selected work and builds">
      <div className="grid">
        {projects.map((p) => (
          <div key={p.name} className="col6">
            <Card title={p.name} meta={p.desc} bullets={p.bullets} tags={p.tags}>
              {p.links?.length ? (
                <div className="tags" style={{ marginTop: 10 }}>
                  {p.links.map((l) => (
                    <a key={l.href} className="tag" href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
