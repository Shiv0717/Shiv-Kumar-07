import Exp from './Exp';
import { FaBriefcase } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="box bg-green-900 flex flex-col justify-center items-center gap-10 pb-10 ">
      <h1 id="Exp" className="pt-6 text-white text-center text-4xl font-bold">  
        <FaBriefcase className="inline-block mr-2 text-2xl" /> My Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="transition-transform transform hover:scale-105 duration-300">
          <Exp
            name="QA TESTER"
            loc="KR PET EYE-Hyderabad, India"
            date="Sep 2024 – Dec 2024"
            desc="During my internship at KR PET EYE, I gained hands-on experience in penetration testing and vulnerability assessments. I collaborated with a cybersecurity team to identify and address security weaknesses in systems and networks. I performed ethical hacking, conducted thorough risk assessments, and developed actionable solutions to enhance the security framework. This role allowed me to strengthen my knowledge of cyber threats, security best practices, and how to safeguard systems against potential attacks, providing valuable insights into real-world cybersecurity challenges."
          />
        </div>
        <div className="transition-transform transform hover:scale-105 duration-300">
          <Exp
            name="UI/UX DESIGNER"
            loc="Vijetha Softwares-Vizag, India"
            date="July 2022 – Oct 2022"
            desc="At Vijetha Software, I worked as a UI/UX Designer for the WishMe App, where I was responsible for designing seamless, user-friendly interfaces that met both business objectives and user needs. I led the creation of the app's user flow, wireframes, and final visual designs. Working closely with cross-functional teams, I ensured the app was functional, accessible, and visually engaging. This involved iterative design processes, usability testing, and integrating user feedback to refine the user experience, ultimately resulting in an intuitive and efficient interface that enhanced user satisfaction."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
