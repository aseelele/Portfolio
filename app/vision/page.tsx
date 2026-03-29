import Section from "@/components/Section";
import { vision } from "@/lib/data";

export default function VisionPage() {
  return (
    <>
      <Section title="Vision" subtitle="My purpose as an engineer">
        <div className="card">
          <div className="essay">{vision.statement}</div>
        </div>
      </Section>

      <Section title="Goals">
        <div className="card">
          <ul className="list">
            {vision.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}