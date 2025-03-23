import React from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiCalendar } from 'react-icons/hi';

const Exp = ({ name, date, desc, loc }) => {
  return (
    <motion.div
      className="bg-black text-white mx-8 lg:mx-20 flex justify-center items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="border border-zinc-500 rounded-xl shadow-lg w-full lg:w-4/5 p-6">
        <div className="flex flex-col gap-3 lg:gap-4">
          <motion.h1
            className="text-2xl font-semibold"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {name}
          </motion.h1>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            <motion.p
              className="text-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <HiLocationMarker /> {loc}
            </motion.p>
            <motion.p
              className="text-lg flex items-center gap-2"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <HiCalendar /> {date}
            </motion.p>
          </div>
          <div className="mt-4">
            <motion.p className="text-zinc-400 text-base text-justify">{desc}</motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Exp;
