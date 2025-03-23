import React from 'react';
import Box from './Box';
import figma from '../assets/figma.svg';
import css from '../assets/css3.svg';
import exp from '../assets/expressjs.svg';
import js from '../assets/javascript.svg';
import db from '../assets/mongodb.svg';
import node from '../assets/nodejs.svg';
import react from '../assets/react.webp';
import ts from '../assets/tailwindcss.svg';
import html from '../assets/html.png';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const Skills = () => {
  return (
    <motion.div
      className="flex justify-center flex-col items-center py-12 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h1
        id="skills"
        className="pt-6 text-gray-800 lg:mb-12 mb-6 text-center text-4xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <FaTools className="inline-block mr-2 text-green-500" />
        My Skills
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-7">
        {[
          { tool: "FIGMA", use: "Design", img: figma },
          { tool: "HTML", use: "Markup", img: html },
          { tool: "CSS", use: "Styling", img: css },
          { tool: "JAVASCRIPT", use: "Scripting", img: js },
          { tool: "REACT JS", use: "UI", img: react },
          { tool: "NODE JS", use: "Server", img: node },
          { tool: "EXPRESS JS", use: "Backend", img: exp },
          { tool: "MONGO DB", use: "Database", img: db },
          { tool: "FIREBASE", use: "Backend", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/140px-Firebase_icon.svg.png" },
          { tool: "TAILWIND CSS", use: "UI", img: ts }
        ].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
          >
            <img src={skill.img} alt={skill.tool} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-gray-700">{skill.tool}</h3>
            <p className="text-sm text-gray-500">{skill.use}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
