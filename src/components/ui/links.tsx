import React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  className?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  label,
}) => (
  <a
    href={href}
    className={`transition-colors duration-300 flex items-center space-x-2`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <Icon size={16} />
    <span className="text-sm">{label}</span>
  </a>
);

interface ContactLinkProps {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  text: string;
  type?: "link" | "email" | "phone";
}

export const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  icon: Icon,
  text,
  type = "link",
}) => {
  const isEmail = type === "email";
  const isPhone = type === "phone";
  const linkHref = isEmail ? `mailto:${href}` : isPhone ? `tel:${href}` : href;
  const target = !isEmail && !isPhone ? "_blank" : undefined;
  const rel = !isEmail && !isPhone ? "noopener noreferrer" : undefined;

  return (
    <a
      href={linkHref}
      className="transition-colors duration-300 flex items-center space-x-2"
      target={target}
      rel={rel}
    >
      <Icon size={16} />
      <span className="text-sm">{text}</span>
    </a>
  );
};
