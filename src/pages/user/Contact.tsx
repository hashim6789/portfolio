import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code,
} from "lucide-react";
import {
  AnimatedContainer,
  Button,
  ContactItem,
  Input,
  PageHeader,
  SocialLinkCard,
} from "../../components/ui";
import { Textarea } from "../../components/ui/TextArea";
import { useScrollAnimation } from "../../hooks";
import {
  AUTHOR_CONTACT,
  AUTHOR_SOCIAL_LINKS,
  pageHeaderData,
} from "../../assets/static";
import type { FormStatus } from "../../types";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [headerRef, headerVisible] = useScrollAnimation(0.5);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(""), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <PageHeader
            title={pageHeaderData.contact.title}
            description={pageHeaderData.contact.description}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <AnimatedContainer delay={200}>
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            </AnimatedContainer>

            <div className="space-y-4 mb-8">
              <ContactItem
                icon={Mail}
                title="Email"
                value={AUTHOR_CONTACT.email}
                href={`mailto:${AUTHOR_CONTACT.email}`}
                delay={300}
              />
              <ContactItem
                icon={Phone}
                title="Phone"
                value={AUTHOR_CONTACT.phone}
                href={`tel:${AUTHOR_CONTACT.phone}`}
                delay={400}
              />
              <ContactItem
                icon={MapPin}
                title="Location"
                value={AUTHOR_CONTACT.location}
                delay={500}
              />
            </div>

            {/* Social Links */}
            <AnimatedContainer delay={600}>
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                <SocialLinkCard
                  icon={Github}
                  href={AUTHOR_SOCIAL_LINKS.github}
                  label="GitHub"
                  delay={700}
                />
                <SocialLinkCard
                  icon={Linkedin}
                  href={AUTHOR_SOCIAL_LINKS.linkedin}
                  label="LinkedIn"
                  delay={800}
                />
                <SocialLinkCard
                  icon={Code}
                  href={AUTHOR_SOCIAL_LINKS.leetcode}
                  label="Leetcode"
                  delay={900}
                />
              </div>
            </AnimatedContainer>
          </div>

          {/* Contact Form */}
          <AnimatedContainer
            delay={300}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-indigo-800/30"
          >
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>

            <div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Input label="First Name" required />
                <Input label="Last Name" required />
              </div>

              <Input label="Email Address" type="email" required />

              <Input label="Subject" required />

              <Textarea label="Your Message" required />

              {formStatus === "success" && (
                <AnimatedContainer className="mb-6 p-4 bg-green-600/20 border border-green-600/50 rounded-lg">
                  <p className="text-green-400 text-center">
                    ✨ Message sent successfully! I'll get back to you soon.
                  </p>
                </AnimatedContainer>
              )}

              <Button
                size="lg"
                onClick={handleSubmit}
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
