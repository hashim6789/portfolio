export interface NavItem {
  name: string;
  href: string;
}

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ComponentType;
};

export type FooterLinkSection = {
  title: string;
  links: { name: string; href: string }[];
};

export type LegalLink = {
  name: string;
  href: string;
};

export type FormStatus = "" | "success" | "error";
