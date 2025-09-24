import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import headerImg from "../assets/images/Io.png";

export default function Header() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.name} | ${t.profession} Portfolio`;
  }, [t]);

  return (
    <header role="banner" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Metadati SEO nativi (React 19 li inserisce nel <head>) */}
      <title>{t.name} | {t.profession} Portfolio</title>
      <meta
        name="description"
        content={`${t.name}, ${t.profession}. Scopri i miei progetti e competenze nello sviluppo web moderno.`}
      />
      <meta property="og:title" content={`${t.name} | ${t.profession}`} />
      <meta property="og:description" content="Portfolio personale, progetti e competenze nello sviluppo web." />
      <meta property="og:image" content={headerImg} />
      <meta name="author" content={t.name} />

      {/* Sfondo animato */}
      <div className="absolute inset-0 animated-bg pointer-events-none"></div>

      {/* Contenuto Header */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between animate-fade-in-left">
        {/* Testo */}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 leading-tight">
            {t.name} – <span className="block lg:inline">{t.profession}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            {t.teckDescription}
          </p>
        </div>

        {/* Immagine */}
        <div className="mt-10 md:mt-0 flex justify-center w-full md:w-1/2">
          <img
            src={headerImg}
            alt={`${t.name} – ${t.profession}`}
            className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl h-auto"
            loading="lazy"
            width="500"
            height="500"
          />
        </div>
      </div>
    </header>
  );
}