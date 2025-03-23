import React from "react";
import boy from "../assets/boy.jpg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="w-full flex  flex-col-reverse items-center lg:flex-row lg:pl-20 lg:pr:20">
      <div className="lg:w-1/2 flex flex-col lg:gap-2 ">
        <motion.div  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 4 }} className="w-full p-6 lg:mt-35">
          <p className="text-2xl lg:text-5xl">
            {" "}
            Hello I’am <b>Shiv Kumar.</b>{" "}
          </p>
          <p className="lg:leading-19 leading-14 text-3xl lg:text-5xl">
            <b>
              Frontend{" "}
              <span
                className=" text-stroke-3 text-white font-[Poppins] tracking-wide
"
              >
                {" "}
                Developer
              </span>{" "}
            </b>
          </p>
          <p className="text-3xl lg:text-5xl">
            Based In <b>India.</b>{" "}
          </p>
        </motion.div>

        <div>
          <motion.p  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 4 }} className="text-xl pl-6 pr-6 lg:text-start text-zinc-500 text-justify">
            I'm a Frontend Developer skilled in React and the MERN stack, with a
            passion for creating user-centric, accessible, and engaging digital
            experiences. With expertise in UI/UX and testing, I build seamless
            and visually appealing web applications
          </motion.p>
        </div>

        <div className="mt-8">
          <ul className="flex gap-6 pl-6  ">
            <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { duration: 0.3 },
            }}
              className="border rounded"
            >
              <a
                href="https://www.linkedin.com/in/u-shiv-kumar-625376219/"
                target="_"
              >
                <img
                  className="w-14"
                  src="https://static.vecteezy.com/system/resources/previews/018/930/482/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                ></img>
              </a>
            </motion.li>
            <motion.li
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             whileHover={{
               scale: 1.2,
               rotate: 15,
               transition: { duration: 0.3 },
             }}
              className="border rounded"
            >
              <a href="https://x.com/theshiv11" target="_">
                <img
                  className="w-14"
                  src="https://images.freeimages.com/image/large-previews/b2e/x-twitter-black-isolated-logo-5694253.png?h=350"
                ></img>
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 w-[80%] lg:mt-5">
        <motion.img  initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 4 }} className="lg:w-[80%]" src={boy}></motion.img>
      </div>
    </div>
  );
};

export default Hero;
