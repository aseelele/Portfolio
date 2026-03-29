import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { profile } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <Section title="About" subtitle="Who I am and what drives me">
        <div className="heroCard">
          <p className="p">{profile.summary}</p>
        </div>
      </Section>

      <Section title="More about Me">
  <div className="centerContent">
    <div className="card fullWidthCard">
      <div className="essay">
        {profile.aboutEssay}
      </div>
    </div>
  </div>
</Section>
      <Section title="Video Introduction">
        <div className="videoWrap">
          <iframe
            width="100%"
            height="420"
            src={profile.videoEmbedUrl}
            title={profile.videoTitle}
            allowFullScreen
          />
        </div>
      </Section>

      <Section title="Interests">
        <div className="tags">
          {profile.interests.map((i) => (
            <Tag key={i}>{i}</Tag>
          ))}
        </div>
      </Section>
    </>
  );
}