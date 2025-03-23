import React from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiCalendar } from 'react-icons/hi';

// Function to truncate the text to a max length
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const Exp = ({ name, date, desc, loc }) => {
  const maxTitleLength = 30; // Set max length for the title
  const maxDescLength = 381; // Set max length for the description

  return (
    <motion.div
      className="bg-black text-white mx-8 lg:mx-20 flex justify-center items-center my-6 py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="border border-zinc-500 rounded-xl shadow-lg w-full lg:w-4/5 p-8 bg-black">
        <div className="flex flex-col gap-6">
          {/* Title */}
          <motion.h1
            className="text-3xl font-semibold text-white hover:text-blue-400"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {truncateText(name, maxTitleLength)}
          </motion.h1>
          
          {/* Location and Date */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <motion.p
              className="text-lg flex items-center gap-2 text-gray-400 hover:text-white"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <HiLocationMarker className="text-white" aria-label="Location" /> {loc}
            </motion.p>
            <motion.p
              className="text-lg flex items-center gap-2 text-gray-400 hover:text-white"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <HiCalendar className="text-white" aria-label="Date" /> {date}
            </motion.p>
          </div>
          
          {/* Description */}
          <motion.p
            className="mt-4 text-zinc-400 text-base text-justify"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {truncateText(desc, maxDescLength)}
          </motion.p>

          {/* Border and Shadow for Accent */}
          <motion.div
            className="mt-6 border-t border-zinc-500 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Optional extra content or effects */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Exp;
