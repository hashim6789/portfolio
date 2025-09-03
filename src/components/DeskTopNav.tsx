import { Link, useLocation } from "react-router-dom";
import type { NavItem } from "../types";
import type { FC } from "react";
interface DesktopNavProps {
  navigation: NavItem[];
}

const DesktopNav: FC<DesktopNavProps> = ({ navigation }) => {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navigation.map((item) => {
        const isCurrentNav = item.href === location.pathname;
        return (
          <Link
            key={item.name}
            to={item.href}
            aria-current={isCurrentNav ? "page" : undefined}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 focus-visible:outline-none ${
              isCurrentNav
                ? "bg-indigo-300 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-300 shadow"
                : "text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
