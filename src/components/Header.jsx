import { useLanguage } from "../context/LanguageContext";
import headerImg from "../assets/images/building-a-website.svg";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Sfondo animato */}
      <div className="absolute inset-0 animated-bg pointer-events-none"></div>

      {/* Contenuto Header */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between animate-fade-in-left">
        {/* Sezione Testo */}
        <div className="text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 leading-tight">
            Alfio Puglisi{" "}
            <span className="block lg:inline"> | {t.profession}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            {t.teckDescription}
          </p>
        </div>

        {/* Sezione immagine */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={headerImg}
            alt="Building a website illustration"
            className="w-full max-w-md md:max-w-lg h-auto"
          />
        </div>
      </div>
    </header>
  );
}
