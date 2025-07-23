import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../languages/translations.js"; // Assicurati che il path sia corretto

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("it");

  // Traduzioni attuali
  const t = translations[language];

  // Cambia lingua
  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("appLanguage", lang);
  };

  // Salvataggio lingua persistente
  useEffect(() => {
    const savedLang = localStorage.getItem("appLanguage");
    if (savedLang && savedLang !== language) {
      setLanguage(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
