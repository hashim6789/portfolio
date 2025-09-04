import { Phone, ExternalLink, BookOpen } from "lucide-react";
import {
  Button,
  ContactLink,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  Section,
  SocialLink,
} from "../../components/ui";
import {
  AUTHOR_ABOUT_ME,
  AUTHOR_CONTACT,
  AUTHOR_DESIGNATION,
  AUTHOR_NAME,
  AUTHOR_SOCIAL_LINKS,
} from "../../assets/static";
import avatarImage from "../../assets/img/avatar_02.png";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <img
          src={avatarImage}
          alt={`${AUTHOR_NAME} profile`}
          className="w-80 h-80 md:w-56 md:h-56 mx-auto  object-cover border-4 border-indigo-500 shadow-lg mb-6"
        />
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider ">
              {AUTHOR_NAME}
            </h1>
            <p className="text-lg md:text-xl text-indigo-400 font-light tracking-widest uppercase">
              {AUTHOR_DESIGNATION}
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm">
            <ContactLink
              href={AUTHOR_CONTACT.phone}
              text={AUTHOR_CONTACT.phone}
              icon={Phone}
              type="phone"
            />
            <ContactLink
              href={AUTHOR_CONTACT.email}
              text={AUTHOR_CONTACT.email}
              icon={EmailIcon}
              type="email"
            />

            <SocialLink
              href={AUTHOR_SOCIAL_LINKS.linkedin}
              icon={LinkedInIcon}
              label="LinkedIn"
            />
            <SocialLink
              href={AUTHOR_SOCIAL_LINKS.github}
              icon={GitHubIcon}
              label="Github"
            />
            {/* <SocialLink
              href={AUTHOR_SOCIAL_LINKS.medium}
              icon={BookOpen}
              label="Medium"
            /> */}
            {/* <SocialLink
              href={AUTHOR_SOCIAL_LINKS.devto}
              icon={Code}
              label="Dev.to"
            /> */}
            <SocialLink
              href={AUTHOR_SOCIAL_LINKS.leetcode}
              icon={ExternalLink}
              label="Leetcode"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2"
            >
              <BookOpen size={18} />
              <span>Read My Blog</span>
            </Button>
            <Button
              variant="solid"
              size="lg"
              className="flex items-center space-x-2"
            >
              <ExternalLink size={18} />
              <span>View Projects</span>
            </Button>
          </div>
        </header>

        {/* About Section */}
        <Section title="About Me">
          <p>{AUTHOR_ABOUT_ME}</p>
        </Section>
      </div>
    </div>
  );
};

export default About;
