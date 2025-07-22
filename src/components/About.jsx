// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { sectionFromLeft, fadeUpChild } from "../animation/variants.js";

import meditatingImg from "../assets/images/meditating.svg"

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 relative"
      variants={sectionFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className="absolute inset-0 animated-bg pointer-events-none"></div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">

        {/* Colonna sinistra */}
        <motion.div
          variants={fadeUpChild}
          className="w-full md:w-1/2 flex items-center justify-center p-6 h-auto"
        >
          <img src={meditatingImg} alt="" />
        </motion.div>

        {/* Colonna destra */}
        <motion.div
          variants={fadeUpChild}
          className="w-full md:w-1/2 text-right text-gray-200 p-6 h-auto"
        >
          <motion.h2
            variants={fadeUpChild}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Chi sono
          </motion.h2>
          <motion.p
            variants={fadeUpChild}
            className="text-lg md:text-xl leading-relaxed"
          >
            Dopo diverse esperienze come bagnino, elettricista e idraulico, durante
            il lockdown ho scoperto una nuova passione: lo sviluppo web. Da quel
            momento mi sono immerso in questo settore in continua evoluzione,
            studiando e sperimentando per trasformare la mia curiosità in
            competenza e per costruire progetti di cui essere orgoglioso.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
