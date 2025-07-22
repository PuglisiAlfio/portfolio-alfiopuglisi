// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";

import { projectsContainer, projectItem } from "../animation/variants";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8"
      variants={projectsContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Titolo */}
      <motion.h2
        variants={projectItem}
        className="text-4xl md:text-5xl font-bold text-gray-200 mb-4"
      >
        Progetti
      </motion.h2>

      {/* Descrizione breve */}
      <motion.p
        variants={projectItem}
        className="text-gray-300 text-center max-w-2xl mb-10 text-lg"
      >
        Una selezione dei progetti su cui ho lavorato: codice reale, problemi
        risolti e crescita continua.
      </motion.p>

      {/* Griglia progetti */}
      <motion.ul
        variants={projectsContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        {PROJECTS.map((proj) => (
          <motion.li
            key={proj.id}
            variants={projectItem}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="
              group
              bg-black/30 backdrop-blur-md
              rounded-2xl
              border border-cyan-400/20
              hover:border-cyan-400/60
              overflow-hidden
              transition-all duration-200
              shadow-[0_0_0_rgba(0,0,0,0)]
              hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
            "
          >
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Apri ${proj.title} su GitHub`}
              className="flex flex-col h-full"
            >
              {/* Immagine */}
              {proj.image ? (
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center text-gray-500 text-sm bg-black/40">
                  No image
                </div>
              )}

              {/* Corpo card */}
              <div className="p-6 flex flex-col flex-1 text-left">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm flex-1">
                  {proj.description}
                </p>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
