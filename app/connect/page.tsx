import Section from "@/components/Section";
import { profile } from "@/lib/data";

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Let’s connect">
      <div className="grid contactGrid">
        <div className="col4">
          <div className="card">
            <div className="cardTitle">Socials</div>
            <div className="cardMeta">Reach out through any of these platforms</div>

            <div className="tags" style={{ marginTop: "16px" }}>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="tag"
              >
                LinkedIn
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="tag"
              >
                GitHub
              </a>

              <a
                href={`mailto:${profile.links.email}`}
                className="tag"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="col8">
          <div className="card">
            <div className="cardTitle">Send Me a Message</div>
            <div className="cardMeta">Write a message and send it to my email</div>

            <form
              action={`mailto:${profile.links.email}`}
              method="POST"
              encType="text/plain"
              className="contactForm"
            >
              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  rows={8}
                  required
                />
              </div>

              <button type="submit" className="primaryBtn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}