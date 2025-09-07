import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Support from "../pages/Support";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Dealer from "../pages/Dealer";
import Evaara from "../components/fans/Evaara";
import Inara from "../components/fans/Inara";
import Skyro from "../components/fans/Skyro";
import Lara from "../components/fans/Lara";

const MainLayout = ({ registerSection, scrollToSection }) => {
  const location = useLocation();
  
  // Scroll to section if coming from visualizer pages
  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      setTimeout(() => {
        scrollToSection(location.state.scrollToId);
      }, 100);
    }
  }, [location.state, scrollToSection]);

  return (
    <main className="flex-grow">
      {/* Home Section */}
      <div ref={el => registerSection("home", el)} id="home">
        <Home />
      </div>
      
      {/* Fan Sections */}
      <div ref={el => registerSection("evaara", el)} id="evaara">
        <Evaara />
      </div>

       <div ref={el => registerSection("skyro", el)} id="skyro">
        <Skyro />
      </div>
      <div ref={el => registerSection("inara", el)} id="inara">
        <Inara />
      </div>
     
      <div ref={el => registerSection("lara", el)} id="lara">
        <Lara />
      </div>
      
      {/* Other Sections */}
      <div ref={el => registerSection("about", el)} id="about">
        <About />
      </div>
      
      <div ref={el => registerSection("support", el)} id="support">
        <Support />
      </div>
      
      <div ref={el => registerSection("dealer", el)} id="dealer">
        <Dealer />
      </div>
      
      <div ref={el => registerSection("faqs", el)} id="faqs">
        <FAQs />
      </div>
      <div ref={el => registerSection("contact", el)} id="contact">
        <Contact />
      </div>
    </main>
  );
};

export default MainLayout;
