import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaPaintBrush, FaBookmark } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();
  const ref = useRef(null);

  // Scroll progress della sezione: 0=start end, 0.5=centro, 1=end start
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center", "end start"] });

  // Card 0 (sinistra): entra più tardi
  const y0 = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [-80, 0, 0, -80]);
  // Card 1 (centro): entra perfettamente in mezzo prima, ed esce dopo
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-120, 0, 0, -120]);
  // Card 2 (destra): entra molto piano, esce piano
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, 80]);
  // Fade morbido
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.87], [0, 1, 0]);

  const features = [
    {
      id: 1,
      icon: <FaCode size={36} />,
      title: t.title1,
      description: t.info1,
      highlighted: false,
      style: { y: y0, opacity }
    },
    {
      id: 2,
      icon: <FaPaintBrush size={36} />,
      title: t.title2,
      description: t.info2,
      highlighted: true,
      style: { y: y1, opacity }
    },
    {
      id: 3,
      icon: <FaBookmark size={36} />,
      title: t.title3,
      description: t.info3,
      highlighted: false,
      style: { y: y2, opacity }
    },
  ];

  return (
    <section id="feature" ref={ref} className="flex items-center py-16 px-6 min-h-screen">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
        {features.map(({ id, icon, title, description, highlighted, style }) => (
          <motion.div
            key={id}
            style={style}
            whileHover={{
              scale: 1.07,
              boxShadow: highlighted
                ? "0 4px 32px #30f2f7dd,0 2px 32px #fff1"
                : "0 4px 26px #22d5ea77"
            }}
            whileTap={{ scale: 0.97 }}
            className={`
              p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border-[1.5px]
              transition-all duration-200
              ${highlighted
                ? "bg-cyan-400/80 border-cyan-300/50 text-gray-900 shadow-cyan-400/40"
                : "bg-black/30 border-cyan-100/10 text-cyan-100 shadow-black/40"}
              backdrop-blur-xl
            `}
          >
            <motion.div
              className={`mb-5 text-4xl ${
                highlighted ? "text-cyan-900" : "text-cyan-400"
              }`}
              whileHover={{
                scale: 1.15,
                filter: "drop-shadow(0 0 10px #15f5ff)",
              }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              {icon}
            </motion.div>
            <h4 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${
              highlighted ? "text-cyan-900" : "text-cyan-100"
            }`}>
              {title}
            </h4>
            <p className="text-base md:text-lg leading-relaxed opacity-95">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
