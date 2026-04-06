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
  <div className="wideSection">
    <div className="card wideCard">
      <div className="essay withWrappedImage">
        <img
          src="/images/can-cwic.jpg"
          alt="Aseel at CAN-CWIC"
          className="wrappedEssayImage"
        />
        {profile.aboutEssay}
        <p>
  The artifact I selected combines a workflow diagram with the quote,{" "}
  <em>“Learning how to learn is the most important skill in computer science.”</em>
  {" "}Together, they represent both how I think and why I approach learning and problem-solving the way I do.
</p>
      </div>
    </div>
  </div>
</Section>
      <Section title="Video Introduction">
  <div className="centerContent">
    <div className="videoContainer">
      <video
        controls
        preload="metadata"
        className="videoPlayer"
      >
        <video autoPlay muted loop controls></video>
        <source src="/videos/why-me.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
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