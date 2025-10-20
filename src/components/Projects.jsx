import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { FaDatabase } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

// Variants per container e item con stagger
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.13 }
  }
};
const appearUp = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90 } }
};

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-14 md:px-12"
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Titolo */}
      <motion.h2
        variants={appearUp}
        className="text-5xl md:text-6xl font-extrabold text-cyan-200 mb-6 drop-shadow"
      >
        {t.projectsTitle}
      </motion.h2>

      {/* Descrizione */}
      <motion.p
        variants={appearUp}
        className="text-cyan-50/90 text-center max-w-2xl mb-10 text-lg md:text-xl font-medium"
      >
        {t.projectsDescription}
      </motion.p>

      {/* Griglia progetti */}
      <motion.ul
        variants={container}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl"
      >
        {PROJECTS.map((proj) => {
          const localized = t.projectsComponent[proj.id];
          return (
            <motion.li
              key={proj.id}
              variants={appearUp}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 38px 2px #27e3f7bb,0 6px 80px 0 #18daf784",
                filter: "brightness(1.06)"
              }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                bg-black/25 backdrop-blur-xl
                rounded-2xl overflow-hidden
                border border-cyan-400/18
                hover:border-cyan-400/70
                transition-all duration-200
                shadow-xl hover:shadow-cyan-400/30
              "
            >
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Apri ${localized.title} su GitHub`}
                className="flex flex-col h-full"
              >
                {/* Immagine o fallback */}
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={localized.title}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                    style={{
                      borderBottom: "2px solid #11eaea55"
                    }}
                  />
                ) : (
                  <div className="w-full aspect-video flex items-center justify-center bg-black/35 text-cyan-300 text-5xl">
                    <FaDatabase />
                  </div>
                )}

                {/* Corpo card */}
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-cyan-100 mb-3 group-hover:text-cyan-400 drop-shadow">
                    {localized.title}
                  </h3>
                  <p className="text-cyan-50/90 text-base md:text-lg flex-1">
                    {localized.description}
                  </p>
                </div>
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.section>
  );
}
