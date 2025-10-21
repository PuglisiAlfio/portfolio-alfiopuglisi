import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import headerImg from "../assets/images/Io.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.19, delayChildren: 0.16 },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80 },
  },
};

export default function Header() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  // Scroll-linked effetto sottile sulle immagini/cta (opzionale)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [18, -18]); // Da poco sopra a poco sotto
  const imageX = useTransform(scrollYProgress, [0, 1], [-8, 8]); // Piccolo parallax laterale
  const ctaY = useTransform(scrollYProgress, [0, 1], [20, -6]);

  useEffect(() => {
    document.title = `${t.name} | ${t.profession} Portfolio`;
  }, [t]);

  return (
    <header
      ref={ref}
      role="banner"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden mt-20"
    >
      {/* SEO Meta */}
      <title>
        {t.name} | {t.profession} Portfolio
      </title>
      <meta
        name="description"
        content={`${t.name}, ${t.profession}. Scopri i miei progetti e competenze nello sviluppo web moderno.`}
      />
      <meta property="og:title" content={`${t.name} | ${t.profession}`} />
      <meta
        property="og:description"
        content="Portfolio personale, progetti e competenze nello sviluppo web."
      />
      <meta property="og:image" content={headerImg} />
      <meta name="author" content={t.name} />

      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute top-10 left-1/2 -translate-x-1/2 opacity-25"
          width="730"
          height="330"
        >
          <ellipse cx="355" cy="140" rx="280" ry="80" fill="url(#ghead)" />
          <defs>
            <linearGradient id="ghead" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#19fff3" />
              <stop offset="100%" stopColor="#05264a" />
            </linearGradient>
          </defs>
        </svg>
        {/* Ellisse centrale animata */}
        <motion.div
          className="absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{
            scale: [0.8, 1.07, 1],
            opacity: [0.7, 0.9, 0.6, 0.85, 0.7],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <svg width="210" height="100">
            <ellipse cx="105" cy="47" rx="70" ry="32" fill="#23cfff44" />
          </svg>
        </motion.div>
      </div>

      {/* Contenuto */}
      <motion.div
        className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Testo Hero */}
        <motion.div variants={fadeLeft} className="text-left max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-200 tracking-tight drop-shadow mb-4">
            {t.name}{" "}
            <span className="block text-cyan-300/90">{t.profession}</span>
          </h1>
          {/* Mini tag-line centrale */}
          <motion.p
            variants={fadeLeft}
            className="mt-6 mb-5 text-[1.1rem] md:text-xl font-medium text-cyan-50/80 tracking-wide leading-tight"
          >
            Innovazione, design e sviluppo con passione.
            <p className="text-cyan-400/80">
              Trasformo idee in esperienze digitali.
            </p>
          </motion.p>
          <motion.p
            variants={fadeLeft}
            className="mb-8 text-lg md:text-2xl font-medium text-cyan-50/90"
          >
            {t.teckDescription}
          </motion.p>
          {/* animata */}
          <Link
            to="projects"
            style={{ y: ctaY }}
            className="inline-block mt-4 px-7 py-3 bg-cyan-400/90 rounded-xl font-bold text-lg text-black shadow-lg shadow-cyan-300/25 transition-all duration-200 hover:bg-cyan-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: [0.86, 1.05, 1] }}
            transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
          >
            Scopri i miei lavori
          </Link>
        </motion.div>
        {/* Immagine con animazione e scroll-linked */}
        <motion.div
          variants={fadeUp}
          className="mt-12 md:mt-0 flex justify-center w-full md:w-1/2"
        >
          <motion.img
            src={headerImg}
            alt={`${t.name} – ${t.profession}`}
            // MASSIMA GRANDEZZA senza distorsione
            className="w-full max-w-2xl md:max-w-3xl h-auto rounded-3xl bg-transparent pointer-events-none"
            style={{
              filter: "drop-shadow(0 6px 70px #0ff1e64c)",
              y: imageY,
              x: imageX,
              maskImage:
                "linear-gradient(to bottom, #000 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 80%, transparent 100%)",
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 1.7,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </header>
  );
}
