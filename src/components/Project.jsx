import React from 'react';
import Pro from './Pro';
import { FaProjectDiagram } from 'react-icons/fa'; 
const Project = () => {
  return (
    <div className='bg-black text-white w-full flex flex-col items-center'>
      <div>
        <h1 className='mt-6 md:mb-10 text-4xl font-bold text-center mb-12' id='project'> <FaProjectDiagram className="inline-block mr-2 text-2xl" /> MY Projects</h1>
      </div>
      <div className='flex flex-col gap-10 ml-8 mr-8 lg:mr-25 lg:ml-25'>
        <Pro direction="row" index='1' tools="Tools & Technologies: React.js,Vite,Tailwind CSS, Axios API" img="https://img.freepik.com/free-vector/business-world-map-infographic_23-2148314455.jpg" title="World Atlas Web Application" link = "https://world-atlas-lty1.vercel.app/" desc="The 'World Atlas' project is an interactive web application that provides users with detailed information about the world's countries and their geographical data. It is designed to help users explore and understand global statistics, such as populations, capitals, currencies, and more. This project showcases the ability to work with geographical data, interactive elements, and modern web technologies."/>  {/* Horizontal */}
        <Pro direction="row-reverse" index='2'  tools="Tools & Technologies: React.js, Vite, Firebase, Bootstrap, " img="https://images.squarespace-cdn.com/content/v1/52537290e4b0e53491ea5c01/1652286731491-1MH2EL9UF3XP771BTP6W/LeadWithAnd-InteriorCover.jpg" title="Book Listings Web Application" link = "https://book-store-five-murex.vercel.app/" desc="A dynamic web application built with React.js, Vite, Firebase, and Bootstrap, designed to provide users with an easy way to browse, list, and manage books. The app allows users to sign up, sign in, and view a catalog of books, with options to add new listings. Firebase is utilized for user authentication, data storage, and management, providing seamless real-time interactions. The application is responsive and built with modern development tools, ensuring a smooth user experience across different devices."/> {/* Vertical */}
        <Pro direction="row" index='3'  tools="Tools & Technologies: Figma " img="https://www.figma.com/community/resource/9db3578b-3d7b-40bd-a669-0eec6690ca16/thumbnail" title="Car Website UI Design" link = "https://www.figma.com/design/IumAEfD84js4J79dzKbuTW/Prestige-CAR?node-id=0-1&p=f&t=qEii4gRQfYOHu4Su-0" desc="This is a modern and user-friendly UI design concept for a car dealership website. It features a sleek layout with an intuitive interface for browsing various car models. The design incorporates clear navigation, detailed car specifications, and easy access to customer support. Ideal for car dealerships or automotive platforms looking for a polished and engaging online presence."/>  {/* Horizontal */}
      </div>
    </div>
  );
};

export default Project;
