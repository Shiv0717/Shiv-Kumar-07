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
      className="flex justify-center flex-col items-center py-12"
      initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
      whileInView={{ opacity: 1, y: 0 }} // Final state when the section is in view
      transition={{ duration: 0.8 }} // Transition duration
      viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% of the component is in view
    >
      <motion.h1
        id="skills"
        className="text-3xl pt-6 text-black lg:mb-12 mb-6 text-center"
        initial={{ opacity: 0 }} // Initial state (invisible)
        whileInView={{ opacity: 1 }} // Visible when in view
        transition={{ duration: 0.5 }} // Transition duration for the heading
        viewport={{ once: true }}
      >
         <FaTools className="inline-block mr-2 text-2xl" /> {/* Icon added */}
        My Skills
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-7">
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
          >
            <Box tool={skill.tool} use={skill.use} img={skill.img} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
