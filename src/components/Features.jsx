import { FaCode, FaPaintBrush, FaBookmark } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { infoCardVariants, infoContainerVariants } from '../animation/variants';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <FaCode size={30} />,
      title: "Developer",
      description:
        "Mi dedico allo sviluppo di soluzioni software su misura, combinando competenze tecniche aggiornate e una profonda attenzione alla qualità del codice. Ogni progetto è per me un’opportunità per creare applicazioni efficienti, scalabili e intuitive, capaci di rispondere alle esigenze specifiche dei clienti e di adattarsi all’evoluzione tecnologica.",
      highlighted: false,
    },
    {
      id: 2,
      icon: <FaPaintBrush size={30} />,
      title: "Design Creativo",
      description:
        "Credo nel potere della creatività come motore dell’innovazione. Attraverso un approccio multidisciplinare, esploro nuove forme di design e sperimento soluzioni visive uniche, capaci di comunicare emozioni e valori. Ogni progetto creativo è per me una sfida per dare forma a idee originali, combinando estetica e funzionalità in modo armonioso.",
      highlighted: true,
    },
    {
      id: 3,
      icon: <FaBookmark size={30} />,
      title: "Qualità",
      description:
        "Per me la qualità è un valore imprescindibile, che si riflette in ogni fase del lavoro. Mi impegno a garantire elevati standard di precisione, cura del dettaglio e affidabilità, affinché ogni progetto raggiunga l’eccellenza tecnica e soddisfi appieno le aspettative. La qualità non è solo un obiettivo, ma una vera filosofia professionale.",
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
