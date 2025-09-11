import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Evaara = () => {
  return (
    <div className="bg-[#F9E8CA] 
  text-black min-h-screen flex flex-col lg:flex-row items-center justify-center w-full overflow-hidden  lg:py-16">
      {/* Fan Image */}
      <motion.div
        className="w-full lg:w-[60%] flex items-center justify-center order-1 mb-6 lg:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src="/Pedestal Fans/Torino/T-Black/1.webp"
          alt="T-Black"
          className="w-full h-auto object-contain max-h-[40vh] sm:max-h-[50vh] lg:max-h-[80vh]"
        />
      </motion.div>

      {/* Content Section - Adjusted Padding */}
      <motion.div
        className="w-full lg:w-[40%] flex flex-col items-center lg:items-start justify-center 
        text-center lg:text-left space-y-3 sm:space-y-5 order-2 p-4 sm:p-6 pt-0 lg:p-10 lg:pl-15"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        {/* Fan Name */}
       <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-pacifico">Torino</h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#c0442b] font-medium italic animate-pulse">
          Where Wood Meets Wonder.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed">
          Discover warmth in motion with the eVaara Series by Anthem — a fusion of wooden elegance and futuristic efficiency. Crafted with nature-inspired aesthetics and powered by BLDC technology, eVaara is the perfect blend of timeless texture and tomorrow’s tech.

        </p>

        {/* Motor Types */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
          {/* BLDC Motor */}
         <div className="flex items-center gap-2">
  <img 
    src="/bldcgreen1.webp" 
    alt="Fan Icon"
    className="w-30 h-30 rounded-md object-contain"
  />
</div>

          
        </div>


        {/* CTA Button */}
        <Link
          to="/products/torino"
          onClick={() => window.scrollTo(0, 0)}
          className="mt-4 md:mt-6 inline-flex items-center px-6 py-3 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl rounded-2xl
          bg-gradient-to-r from-[#ba6a5a] to-orange-500 hover:shadow-lg
          hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
        >
          Explore Details
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Evaara;