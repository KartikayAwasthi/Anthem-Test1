import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/ChatBot";
import Visualizer2D from "./Visualizer/Visualizer2D";
import Visualizer3D from "./Visualizer/3D/Visualizer3D";
import MainLayout from "./components/MainLayout";

// Lazy load product pages
const EvaaraProduct = lazy(() => import('./pages/products/Evaara'));
const InaraProduct = lazy(() => import('./pages/products/Inara'));
const SkyroProduct = lazy(() => import('./pages/products/Skyro'));
const LaraProduct = lazy(() => import('./pages/products/Lara'));

// Dummy cart page
const Cart = () => <div className="min-h-screen pt-24 text-white bg-black flex items-center justify-center text-3xl">Shopping Cart</div>;

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  // Register section refs
  const registerSection = (id, ref) => {
    sectionRefs.current[id] = ref;
  };

  // Scroll to section function
  const scrollToSection = (id) => {
    const sectionRef = sectionRefs.current[id];
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let currentSection = "home";
      Object.entries(sectionRefs.current).forEach(([id, ref]) => {
        if (ref && ref.offsetTop <= scrollPosition && 
            ref.offsetTop + ref.offsetHeight > scrollPosition) {
          currentSection = id;
        }
      });
      
      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
        // Update URL without reload
        window.history.pushState({}, "", `#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Handle hash change and initial hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionRefs.current[hash]) {
        scrollToSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial hash on page load
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Header 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
        <ScrollProgress />
        <Routes>
          {/* Route for Visualizer pages */}
          <Route path="/visualizer/2d" element={<Visualizer2D />} />
          <Route path="/visualizer/2d/switcher" element={<Visualizer2D initialComponent="switcher" />} />
          <Route path="/visualizer/2d/overlay" element={<Visualizer2D initialComponent="overlay" />} />
          <Route path="/visualizer/3d" element={<Visualizer3D />} />
          
          {/* Product Pages Routes */}
          <Route path="/products/evaara" element={
            <Suspense fallback={<div className="min-h-screen pt-24 text-white bg-black flex items-center justify-center">Loading...</div>}>
              <EvaaraProduct />
            </Suspense>
          } />
          <Route path="/products/inara" element={
            <Suspense fallback={<div className="min-h-screen pt-24 text-white bg-black flex items-center justify-center">Loading...</div>}>
              <InaraProduct />
            </Suspense>
          } />
          <Route path="/products/skyro" element={
            <Suspense fallback={<div className="min-h-screen pt-24 text-white bg-black flex items-center justify-center">Loading...</div>}>
              <SkyroProduct />
            </Suspense>
          } />
          <Route path="/products/lara" element={
            <Suspense fallback={<div className="min-h-screen pt-24 text-white bg-black flex items-center justify-center">Loading...</div>}>
              <LaraProduct />
            </Suspense>
          } />
          
          {/* Main layout with sections */}
          <Route path="/" element={
            <MainLayout 
              registerSection={registerSection} 
              scrollToSection={scrollToSection} 
            />
          } />
        </Routes>
        <Footer scrollToSection={scrollToSection} />
        
        {/* Chat and WhatsApp Buttons */}
        <WhatsAppButton 
          message="Hi! I'm interested in Anthem fans."
          floating={true}
          size="md"
        />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;