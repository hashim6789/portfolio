import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  AUTHOR_NAME,
  FOOTER_DESCRIPTION,
  footerLinks,
  legalLinks,
  socialLinks,
} from "../assets/static";

function Layout() {
  return (
    <div className="font-slab min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>

      <Footer
        description={FOOTER_DESCRIPTION}
        socialLinks={socialLinks}
        footerLinks={footerLinks}
        author={AUTHOR_NAME}
        legalLinks={legalLinks}
      />
    </div>
  );
}

export default Layout;
