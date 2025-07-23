import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import italyFlag from "../assets/flags/italy.png";
import englandFlag from "../assets/flags/england.jpg";

export default function LanguageSwitcher() {
  const { switchLanguage, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { value: "it", flag: italyFlag },
    { value: "en", flag: englandFlag },
  ];

  const selected = languages.find((lang) => lang.value === language);

  const handleSelect = (value) => {
    switchLanguage(value);
    setOpen(false);
  };

  // Chiudi il menu al click fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bottone principale */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition"
      >
        <img src={selected.flag} className="w-6 h-6 rounded-full" alt="Selected Language" />
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute mt-2 w-full bg-gray-800 rounded shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => handleSelect(lang.value)}
              className="flex items-center gap-2 px-3 py-1 w-full text-gray-200 hover:bg-gray-700"
            >
              <img src={lang.flag} className="w-6 h-6 rounded-full" alt={lang.value} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
