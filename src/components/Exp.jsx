import React from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiCalendar } from 'react-icons/hi';

const Exp = ({ name, date, desc, loc }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="relative w-full max-w-xl">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

        {/* Timeline Content */}
        <div className="relative p-8 bg-white border rounded-lg shadow-lg">
          {/* Title */}
          <motion.h1
            className="text-2xl font-semibold text-gray-800 mb-4"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {name}
          </motion.h1>

          {/* Location and Date */}
          <div className="flex flex-wrap gap-4 mb-4">
            <p className="flex items-center text-gray-600">
              <HiLocationMarker className="mr-2 text-gray-800" /> {loc}
            </p>
            <p className="flex items-center text-gray-600">
              <HiCalendar className="mr-2 text-gray-800" /> {date}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-justify">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Exp;
