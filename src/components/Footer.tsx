import { Link } from "react-router-dom";
import BrandLink from "./BrandLink";
import type { FooterLinkSection, LegalLink, SocialLink } from "../types";
import { AUTHOR_DESIGNATION, AUTHOR_NAME } from "../assets/static";
import AUTHOR_PHOTO from "../assets/img/avatar_02.png";

interface FooterProps {
  description?: string;
  socialLinks?: SocialLink[];
  footerLinks?: FooterLinkSection[];
  legalLinks?: LegalLink[];
  author: string;
  currentYear?: number;
}

const Footer: React.FC<FooterProps> = ({
  description,
  socialLinks = [],
  footerLinks = [],
  legalLinks = [],
  author,
  currentYear = new Date().getFullYear(),
}) => {
  return (
    <footer className="border-t border-indigo-200mt-auto ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* Logo Section */}
            <div className="mb-6">
              <BrandLink
                name={AUTHOR_NAME}
                designation={AUTHOR_DESIGNATION}
                image={AUTHOR_PHOTO}
              />
            </div>

            {description && (
              <p className="text-indigo-600 dark:text-indigo-300 text-sm leading-relaxed mb-6">
                {description}
              </p>
            )}

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-indigo-700 dark:text-indigo-300 font-semibold text-sm uppercase tracking-wide mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      to={href}
                      className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-indigo-200 dark:border-indigo-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-indigo-600 dark:text-indigo-400">
              © {currentYear} {author}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {legalLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  to={href}
                  className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
