import Exp from './Exp';
import { FaBriefcase } from 'react-icons/fa';
const Skills = () => {
  return (
    <div className="box bg-black flex flex-col justify-center items-center gap-10 pb-10 ">
      <h1 id="Exp" className="text-3xl pt-6 text-white text-center">  <FaBriefcase className="inline-block mr-2 text-2xl" />  My Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="transition-transform transform hover:scale-105 duration-300">
          <Exp
            name="QA TESTER"
            loc="KR PET EYE-Hyderabad, India"
            date="Sep 2024 – Dec 2024"
            desc="During this internship, I worked hands-on with penetration testing and vulnerability assessments. I closely collaborated with a team of cybersecurity experts to identify security weaknesses in systems and networks. My tasks included performing ethical hacking, conducting risk assessments, and providing recommendations to enhance the overall security framework of the organization. This experience helped me understand real-world cyber threats and security measures needed to safeguard systems from potential attacks."
          />
        </div>
        <div className="transition-transform transform hover:scale-105 duration-300">
          <Exp
            name="UI/UX DESIGNER"
            loc="Vijetha Software's-Visakhapatnam, India"
            date="July 2022 – Oct 2022"
            desc="As a UI/UX Designer for the WishMe App at Vijetha, my role focused on creating intuitive and user-friendly interfaces that addressed both business goals and user needs. I worked extensively on designing the app’s user flow, wireframes, and final visuals. Collaboration with cross-functional teams was key to ensuring the app was not only functional but also accessible and visually appealing. This project involved iterative design processes, usability testing, and continuous feedback to refine the user experience and interface."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
