import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const {t} = useLanguage()
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10 border-t border-gray-700">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonna 1 - Info generali */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Alfio Dev</h2>
          <p className="mt-2 text-gray-400 text-sm">
            {t.profession} | {t.motto}
          </p>
        </div>

        {/* Colonna 2 - Contatti */}
        <div>
          <h3 className="text-lg font-semibold text-white">{t.contact}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="mailto:puglisi_alfio@yahoo.it"
                className="hover:text-cyan-400 transition-colors"
              >
                ✉ puglisi_alfio@yahoo.it
              </a>
            </li>
            <li>
              <a
                href="tel:+393402402624"
                className="hover:text-cyan-400 transition-colors"
              >
                ☎ +39 340 240 2624
              </a>
            </li>
            <li>📍 Fiumefreddo di Sicilia (CT), Italia</li>
          </ul>
        </div>

        {/* Colonna 3 - Social */}
        <div>
          <h3 className="text-lg font-semibold text-white">{t.follow}</h3>
          <div className="mt-3 flex gap-6 text-2xl text-gray-300">
            <a
              href="https://github.com/PuglisiAlfio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alfio-puglisi-38761922a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/paffosocial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/alfio.puglisi.52"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Alfio Dev. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
