import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-black/70 backdrop-blur-2xl border-t border-cyan-100/10 py-12 z-50">
      <div className="container mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x md:divide-cyan-100/10">
        {/* Colonna 1 - Info generali */}
        <div className="pb-6 md:pb-0 px-1">
          <h2 className="text-3xl font-extrabold text-cyan-300 drop-shadow mb-1">Alfio Puglisi</h2>
          <p className="mt-2 text-cyan-100/80 text-base font-medium">
            {t.profession} | <span className="text-cyan-400">{t.motto}</span>
          </p>
        </div>
        {/* Colonna 2 - Contatti */}
        <div className="pb-6 md:pb-0 px-2">
          <h3 className="text-lg font-bold text-cyan-200">{t.contact}</h3>
          <ul className="mt-4 space-y-2 text-base">
            <li>
              <a
                href="mailto:puglisi_alfio@yahoo.it"
                className="hover:text-cyan-300 transition-colors text-cyan-50/80"
              >
                ✉ puglisi_alfio@yahoo.it
              </a>
            </li>
            <li>
              <a
                href="tel:+393402402624"
                className="hover:text-cyan-300 transition-colors text-cyan-50/80"
              >
                ☎ +39 340 240 2624
              </a>
            </li>
            <li className="text-cyan-50/80">📍 Fiumefreddo di Sicilia (CT), Italia</li>
          </ul>
        </div>
        {/* Colonna 3 - Social */}
        <div className="px-1">
          <h3 className="text-lg font-bold text-cyan-200">{t.follow}</h3>
          <div className="mt-4 flex gap-6 text-2xl text-cyan-100">
            <a
              href="https://github.com/PuglisiAlfio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="transition transform hover:scale-125 hover:drop-shadow-[0_0_8px_#15f5ff]" />
            </a>
            <a
              href="https://www.linkedin.com/in/alfio-puglisi-38761922a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="transition transform hover:scale-125 hover:drop-shadow-[0_0_8px_#20f5fc]" />
            </a>
            <a
              href="https://www.instagram.com/paffosocial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="transition transform hover:scale-125 hover:drop-shadow-[0_0_8px_#2df5ea]" />
            </a>
            <a
              href="https://www.facebook.com/alfio.puglisi.52"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="transition transform hover:scale-125 hover:drop-shadow-[0_0_8px_#2ed6eb]" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-10 text-center text-cyan-100/70 text-xs tracking-wide">
        © {new Date().getFullYear()} Alfio Dev. Tutti i diritti riservati.
      </div>
      {/* Effetto gradiente decorativo sopra il footer */}
      <div className="absolute -top-2 left-0 w-full h-2 pointer-events-none bg-gradient-to-r from-cyan-300/30 via-cyan-400/70 to-cyan-300/30 rounded-t-xl blur-[2px]" />
    </footer>
  );
}
