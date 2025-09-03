import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../components/ui";
import type { LegalLink } from "../../types";
export const currentYear = new Date().getFullYear();
export const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Consulting", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
];

export const socialLinks = [
  { name: "GitHub", href: "#", icon: GitHubIcon },
  { name: "LinkedIn", href: "#", icon: LinkedInIcon },
  { name: "Twitter", href: "#", icon: TwitterIcon },
  { name: "Email", href: "mailto:your.email@example.com", icon: EmailIcon },
];

export const FOOTER_DESCRIPTION =
  "Building modern web applications with cutting-edge technologies. Passionate about creating beautiful, functional, and user-friendly experiences.";

export const legalLinks: LegalLink[] = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    name: "Cookie Policy",
    href: "/cookie-policy",
  },
  {
    name: "Refund Policy",
    href: "/refund-policy",
  },
  {
    name: "License Agreement",
    href: "/license",
  },
  {
    name: "Accessibility Statement",
    href: "/accessibility",
  },
];
