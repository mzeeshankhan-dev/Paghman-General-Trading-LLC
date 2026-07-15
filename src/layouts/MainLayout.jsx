import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/layout/ScrollToTopButton";
import WhatsAppButton from "../components/layout/WhatsAppButton";
import useTheme from "../hooks/useTheme";
import useScrollTop from "../hooks/useScrollTop";

export default function MainLayout() {
  const { theme, toggleTheme } = useTheme();
  useScrollTop();

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-navy-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-900"
      >
        Skip to main content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}
