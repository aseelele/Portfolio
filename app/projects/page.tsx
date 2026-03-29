import Section from "@/components/Section";
import Card from "@/components/Card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Technical work and presentation decks">
      <div className="grid">
        {projects.map((project) => (
          <div key={project.name} className="col6">
            <Card
              title={project.name}
              meta={project.desc}
              bullets={project.bullets}
              tags={project.tags}
            >
              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="deckLink"
                >
                  {link.label}
                </a>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}