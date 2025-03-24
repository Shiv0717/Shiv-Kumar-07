import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi';
import shiv from '../assets/Group 1.png';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 px-8 bg-gradient-to-b from-green-50 to-white">
      {/* About Me Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-green-700 mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FaInfoCircle className="inline-block mr-3 text-3xl text-green-600" />
        About Me
      </motion.h1>

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Section: Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          whileHover={{ scale: 1.05, rotate: 3, transition: { duration: 0.4 } }}
        >
          <img className="lg:w-3/4 w-4/5 border-4 border-green-600 rounded-3xl shadow-xl hover:shadow-2xl" src={shiv} alt="Shiv Kumar" />
        </motion.div>

        {/* Right Section: Text Information */}
        <div className="lg:w-1/2 w-full text-center lg:text-left px-4 sm:px-8">
          {/* Description Section */}
          <motion.h2 className="text-3xl font-semibold text-green-600 mb-6">Professional Summary</motion.h2>
          <motion.p className="text-lg mb-8 text-gray-700 leading-relaxed text-justify">
            Hello, I’m <span className="font-bold">Shiv Kumar</span>, a passionate MERN Stack Developer with a strong focus on creating scalable, efficient, and user-friendly web applications. I specialize in MongoDB, Express.js, React, and Node.js. From crafting intuitive UI/UX designs to building robust back-end systems, I bring ideas to life through code.
          </motion.p>

          {/* Education Section */}
          <motion.h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-green-700">
            <HiAcademicCap className="text-green-600" />
            Education
          </motion.h3>

          <motion.p className="text-lg text-gray-700 mb-2">Bachelor of Technology in Computer Science</motion.p>
          <motion.p className="text-lg text-gray-700 mb-2">K L E F Deemed To Be University — Guntur, Andhra Pradesh</motion.p>
          <motion.p className="text-lg text-gray-700 mb-8">Graduation Year — 2024</motion.p>

          {/* Location Section */}
          <motion.div className="flex items-center gap-4 text-gray-700">
            <HiLocationMarker className="text-green-600 text-xl" />
            <span>Location: Guntur, Andhra Pradesh</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;