import Section from "@/components/Section";
import { vision } from "@/lib/data";

export default function VisionPage() {
  return (
    <>
      <Section title="Vision" subtitle="My purpose as an engineer">
        <div className="card visionCard">
          <div className="essay">{vision.statement}</div>
        </div>
      </Section>

      <Section title="Goals" subtitle="What I am actively working toward">
        <div className="card goalsCard">
          <div className="goalsLayout">
            <div className="goalsImageWrap">
              <img
                src="/images/goals.jpg"
                alt="Goals"
                className="goalsImage"
              />
            </div>

            <div className="goalsText">
              <ul className="goalsList">
                {vision.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}