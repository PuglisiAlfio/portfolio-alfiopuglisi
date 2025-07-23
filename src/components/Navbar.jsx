import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // NavLinks con traduzioni dinamiche
  const navLinks = [
    { name: t.home, to: "home" },
    { name: t.info, to: "feature" }, // Se vuoi 'Info' devi aggiungere traduzione in t
    { name: t.about, to: "about" },  // usa 'about' invece di 'Info'
    { name: t.stack, to: "stacks" },
    { name: t.projects, to: "projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300
      ${scrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3 text-gray-200">
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="home" smooth={true} duration={500} offset={-60}>
            Alfio &nbsp;
            <span className="block lg:inline"> | {t.profession}</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 text-lg">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  spy={true}
                  activeClass="text-cyan-400 font-semibold bg-black/10 rounded-xl shadow-[5px_0_5px_cyan,-5px_0_5px_cyan] h-auto px-3 py-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher Desktop */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md py-4 text-center">
          <ul className="space-y-4 text-lg text-gray-200">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-cyan-400 transition-colors"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  spy={true}
                  activeClass="text-cyan-400 font-semibold bg-black/20 backdrop-blur-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher Mobile */}
          <div className="mt-4 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
