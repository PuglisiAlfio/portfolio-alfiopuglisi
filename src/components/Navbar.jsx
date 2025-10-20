import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.home, to: "home" },
    { name: t.info, to: "feature" },
    { name: t.about, to: "about" },
    { name: t.stack, to: "stacks" },
    { name: t.projects, to: "projects" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[60] transition-colors duration-300
      ${scrolled ? "bg-black/60 backdrop-blur-xl border-b border-cyan-200/10 shadow-lg" : "bg-transparent border-none shadow-none"}`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-[1.1rem] text-cyan-100">
        {/* Logo/Brand */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight cursor-pointer select-none drop-shadow">
          <Link to="home" smooth={true} duration={600} offset={-68} aria-label="Home">
            <span className="text-cyan-400">Alfio</span>
            <span className="hidden lg:inline-block">&nbsp;|&nbsp;{t.profession}</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7 text-lg">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  aria-label={`Vai alla sezione ${link.name}`}
                  activeClass="!text-cyan-400 !font-bold border-b-2 border-cyan-400"
                  className="relative cursor-pointer transition-colors hover:text-cyan-300 px-2 py-1"
                >
                  <span className="transition-colors">{link.name}</span>
                  {/* Underline animata */}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-cyan-100"
          onClick={() => setIsOpen((v) => !v)}
          role="button"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu con animazione framer-motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-cyan-400/10 py-8 text-center shadow-lg fixed left-0 top-14 w-full z-[51]"
          >
            <ul className="space-y-5 text-lg text-cyan-100">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-58}
                    spy={true}
                    activeClass="!text-cyan-400 !font-bold"
                    onClick={() => setIsOpen(false)}
                    className="transition-colors block py-2 hover:text-cyan-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-center">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
