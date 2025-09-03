import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import type { AppDispatch, RootState } from "../store";
import { setTheme } from "../store/themeSlice";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./ui";
import BrandLink from "./BrandLink";
import DesktopNav from "./DeskTopNav";
import { AUTHOR_DESIGNATION, AUTHOR_NAME, navigation } from "../assets/static";
import AUTHOR_PHOTO from "../assets/img/avatar_02.png";

function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mode = useSelector((state: RootState) => state.theme.mode);

  const cycleTheme = () => {
    const next = mode === "light" ? "dark" : "light";
    dispatch(setTheme(next));
  };

  return (
    <header className="sticky top-0 z-50 bg-indigo-100 dark:bg-indigo-900 border-b border-indigo-200 dark:border-indigo-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <BrandLink
            name={AUTHOR_NAME}
            designation={AUTHOR_DESIGNATION}
            image={AUTHOR_PHOTO}
          />
          {/* Desktop Navigation */}
          <DesktopNav navigation={navigation} />

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="p-2 text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg "
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-indigo-200 dark:border-indigo-700 animate-slide-up">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg ${
                    location.pathname === item.href
                      ? "bg-grey-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border-l-4 border-indigo-500 dark:border-indigo-400"
                      : "text-indigo-600 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
