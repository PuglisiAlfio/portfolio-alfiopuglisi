import { FaCode, FaPaintBrush, FaBookmark } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { infoCardVariants, infoContainerVariants } from '../animation/variants';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      icon: <FaCode size={30} />,
      title: t.title1,
      description: t.info1,
      highlighted: false,
    },
    {
      id: 2,
      icon: <FaPaintBrush size={30} />,
      title: t.title2,
      description: t.info2,
      highlighted: true,
    },
    {
      id: 3,
      icon: <FaBookmark size={30} />,
      title: t.title3,
      description: t.info3,
      highlighted: false,
    },
  ];

  return (
    <section id="feature" className="flex items-center py-12 px-6 text-gray-300 min-h-screen">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={infoContainerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {features.map(({ id, icon, title, description, highlighted }) => (
          <motion.div
            key={id}
            className={`p-6 rounded-lg shadow-lg
              ${highlighted
                ? "bg-cyan-500 text-gray-800 shadow-cyan-500/50"
                : "bg-gray-800 text-gray-200 shadow-black/50"}
              flex flex-col items-center text-center`}
            variants={infoCardVariants}
          >
            <div className="mb-4 text-cyan-900">
              {icon}
            </div>
            <h4 className={`text-xl font-bold mb-3 ${highlighted ? "text-gray-800" : "text-gray-200"}`}>
              {title}
            </h4>
            <p className="text-sm leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
