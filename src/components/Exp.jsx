import React from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiCalendar } from 'react-icons/hi';

const Exp= ({ name, date, desc, loc }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-8 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="relative w-full max-w-xl">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-500"></div>

        {/* Timeline Content */}
        <div className="relative p-6 bg-white border border-green-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow ">
          {/* Title */}
          <motion.h1
            className="text-2xl font-semibold text-green-700 mb-3"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {name}
          </motion.h1>

          {/* Location and Date */}
          <div className="flex flex-wrap gap-4 mb-3">
            <p className="flex items-center text-gray-500">
              <HiLocationMarker className="mr-2 text-green-500" /> {loc}
            </p>
            <p className="flex items-center text-gray-500">
              <HiCalendar className="mr-2 text-green-500" /> {date}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-justify leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Exp;
