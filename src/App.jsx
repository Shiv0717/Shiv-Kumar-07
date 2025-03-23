import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import Loading from './components/Loading' // Import your loading component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    setTimeout(() => {
      setLoading(false); // After 2 seconds, set loading to false
    }, 2000); // Adjust duration as needed
  }, []);

  if (loading) {
    return <Loading />; // Use your loading component here
  }

  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
