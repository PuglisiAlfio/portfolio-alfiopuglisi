import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TECH_STACK } from "../data/techStacks.js";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Stack() {
  const [filter, setFilter] = useState("all");

  const filteredStack = TECH_STACK.filter((tech) =>
    filter === "all" ? true : tech.category?.includes(filter)
  );

  return (
    <section
      id="stacks"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="flex flex-col items-center md:flex-row w-full gap-8">
        {/* COLONNA SINISTRA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 p-6 backdrop-blur-md bg-black/20 rounded-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Stack Tecnologico
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Durante il mio percorso da sviluppatore ho acquisito competenze su
            una vasta gamma di tecnologie, sia frontend che backend. Grazie alla
            mia curiosità e alla voglia di sperimentare, continuo ad ampliare il
            mio stack per offrire soluzioni sempre più moderne, performanti e
            user-friendly.
          </p>
          <div className="flex gap-3">
            {["all", "frontend", "backend"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === cat
                    ? "bg-cyan-500 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-cyan-400 hover:text-black"
                }`}
              >
                {cat === "all"
                  ? "Tutti"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* COLONNA DESTRA (IMMAGINI STACK) */}
        <motion.div
          key={filter} // <--- AGGIUNTO
          className="w-full md:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-6 p-6 backdrop-blur-md bg-black/10 rounded-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // <--- usa animate invece di whileInView
        >
          {filteredStack.map((tech) => (
            <motion.a
              key={tech.id}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={tech.src}
                alt={tech.label}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-gray-200 text-sm">{tech.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
