import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import meditatingImg from "../assets/images/meditating.svg";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center", "end start"] });

  const leftX = useTransform(scrollYProgress, [0, 0.5, 1], [-250, 0, -250]);
  const rightX = useTransform(scrollYProgress, [0, 0.5, 1], [250, 0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [0, 1, 0]);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-between relative overflow-x-hidden"
    >
      {/* Sfondo decorativo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute top-16 left-8 opacity-15" width="330" height="180">
          <defs>
            <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#00f0ea" />
              <stop offset="100%" stopColor="#0e232d" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* WRAPPER CON overflow-x-hidden */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 z-10 relative overflow-x-hidden">
        {/* Colonna sinistra: si muove da sinistra verso il centro in sync con lo scroll */}
        <motion.div
          style={{ x: leftX, opacity }}
          className="w-full md:w-1/2 flex items-center justify-center p-8 h-auto"
        >
          <motion.img
            src={meditatingImg}
            alt=""
            className="w-72 md:w-96"
            initial={{ y: 0 }}
            animate={{ y: [0, -18, 0, 16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 5px 40px #27e3f7bb)" }}
          />
        </motion.div>
        {/* Colonna destra: si muove da destra verso il centro in sync con lo scroll */}
        <motion.div
          style={{ x: rightX, opacity }}
          className="w-full md:w-1/2 text-left text-cyan-100 p-8 h-auto backdrop-blur-lg bg-black/10 rounded-2xl shadow-xl border-[1.5px] border-cyan-200/10"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow text-cyan-200">
            {t.aboutTitle}
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-cyan-100/80">
            {t.aboutDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
