import React from "react";
import boy from "../assets/boy.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-10">
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 mt-8">
            Hey there, I’m <span className="text-green-600">Shiv Kumar</span>
          </h1>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-700">
            Crafting experiences as a <span className="text-green-500">Frontend Developer</span>
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-800">From <span className="text-green-600">India</span> to the world</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-lg lg:text-xl text-zinc-600 leading-relaxed text-justify"
        >
          As a MERN stack developer with a passion for problem-solving, I craft dynamic, user-friendly web applications. Whether it’s designing seamless interfaces or optimizing backend performance, I turn ideas into reality.
        </motion.p>

        {/* Social Links */}
        <div className="flex gap-6 justify-center lg:justify-start mt-6">
          {[
            { link: "https://www.linkedin.com/in/u-shiv-kumar-625376219/", src: "https://static.vecteezy.com/system/resources/previews/018/930/482/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" },
            { link: "https://x.com/theshiv11", src: "https://images.freeimages.com/image/large-previews/b2e/x-twitter-black-isolated-logo-5694253.png?h=350" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.2, rotate: 15, transition: { duration: 0.3 } }}
              className="border-2 border-green-500 rounded-lg p-2"
            >
              <img className="w-12 h-12" src={item.src} alt="social" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-xs lg:max-w-md object-cover rounded-lg shadow-xl"
          src={boy}
          alt="Shiv Kumar"
        />
      </div>
    </section>
  );
};

export default Hero;
