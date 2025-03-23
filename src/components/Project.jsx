import React from 'react';
import Pro from './Pro';
import { FaProjectDiagram } from 'react-icons/fa'; 

const Project = () => {
  return (
    <div className='bg-green-900 text-white w-full flex flex-col items-center'>
      {/* Header Section */}
      <h1 className='mt-6 md:mb-10 text-4xl font-bold text-center mb-12' id='project'> 
        <FaProjectDiagram className="inline-block mr-2 text-2xl" /> MY Projects
      </h1>
      
      {/* Project Cards Section */}
      <div className='flex flex-col gap-12 px-6 md:px-16 lg:px-32 w-full mb-20'>
        <Pro 
          direction="row" 
          index='1' 
          tools="Tools & Technologies: React.js, Vite, Tailwind CSS, Axios API" 
          img="https://img.freepik.com/free-vector/business-world-map-infographic_23-2148314455.jpg" 
          title="World Atlas Web Application" 
          link="https://world-atlas-lty1.vercel.app/" 
          desc="An interactive web app providing detailed information on countries, populations, capitals, and currencies. Built with modern web technologies."
        />
        
        <Pro 
          direction="row-reverse" 
          index='2'  
          tools="Tools & Technologies: React.js, Vite, Firebase, Bootstrap" 
          img="https://images.squarespace-cdn.com/content/v1/52537290e4b0e53491ea5c01/1652286731491-1MH2EL9UF3XP771BTP6W/LeadWithAnd-InteriorCover.jpg" 
          title="Book Listings Web Application" 
          link="https://book-store-five-murex.vercel.app/" 
          desc="A responsive app to browse, list, and manage books using Firebase for authentication and data storage."
        />
        
        <Pro
          direction="row" 
          index='3'  
          tools="Tools & Technologies: Figma" 
          img="https://www.figma.com/community/resource/9db3578b-3d7b-40bd-a669-0eec6690ca16/thumbnail" 
          title="Car Website UI Design" 
          link="https://www.figma.com/design/IumAEfD84js4J79dzKbuTW/Prestige-CAR?node-id=0-1&p=f&t=qEii4gRQfYOHu4Su-0" 
          desc="A sleek UI design for a car dealership website with intuitive navigation and clear car model displays."
        />
      </div>
    </div>
  );
};

export default Project;
