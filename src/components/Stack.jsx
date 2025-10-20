import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TECH_STACK } from "../data/techStacks.js";
import { useLanguage } from "../context/LanguageContext";

export default function Stack() {
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();
  const ref = useRef(null);

  // Scroll progress sulla sezione: 0=appena entra, 0.5=al centro, 1=prossima uscita
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center", "end start"] });

  // Colonna sinistra: entra dal top verso il centro e risale quando esci
  const leftY = useTransform(scrollYProgress, [0, 0.5, 1], [-60, 0, -60]);
  // Colonna destra: entra dal basso verso il centro e ridiscende quando esci
  const rightY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, 60]);
  // Fade facoltativo
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.87], [0, 1, 0]);

  const filteredStack = TECH_STACK.filter((tech) =>
    filter === "all" ? true : tech.category?.includes(filter)
  );

  return (
    <section
      id="stacks"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="flex flex-col items-center md:flex-row w-full gap-12">
        {/* Colonna sinistra */}
        <motion.div
          style={{ y: leftY, opacity }}
          className="w-full md:w-1/2 p-7 shadow-2xl backdrop-blur-lg bg-black/15 rounded-2xl border-[1.5px] border-cyan-400/30"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4 tracking-tight drop-shadow">
            {t.stackTitle}
          </h2>
          <p className="text-gray-200/80 leading-relaxed text-lg mb-8">
            {t.stackDescription}
          </p>
          <div className="flex gap-4 mt-3">
            {[
              { key: "all", label: t.filterAll },
              { key: "frontend", label: t.filterFrontend },
              { key: "backend", label: t.filterBackend },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-xl text-base font-semibold shadow transition-all
                  ${
                    filter === key
                      ? "bg-cyan-400 text-black scale-105"
                      : "bg-gray-800/60 text-cyan-100 hover:bg-cyan-300 hover:text-black hover:scale-105"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Colonna destra */}
        <motion.div
          key={filter}
          style={{ y: rightY, opacity }}
          className="w-full md:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-8 p-8 backdrop-blur-xl bg-black/25 rounded-2xl shadow-xl border-[1.5px] border-cyan-400/20"
        >
          {filteredStack.map((tech) => (
            <motion.a
              key={tech.id}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center bg-white/3 rounded-xl p-2 hover:bg-cyan-500/20 group transition"
              whileHover={{
                scale: 1.15,
                boxShadow: "0 4px 16px 0px rgba(0,245,255,0.15)",
                backgroundColor: "rgba(21,245,245,0.08)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={tech.src}
                alt={tech.label}
                className="w-16 h-16 object-contain mb-2 drop-shadow-lg group-hover:scale-110 transition"
                whileHover={{ rotate: -5 }}
              />
              <span className="text-cyan-100 text-sm font-medium">{tech.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
