import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Lara = () => {
  return (
    <div className="bg-[#F9E8CA] 
  ] text-black min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center w-full overflow-hidden  lg:py-16">
      {/* Fan Image (Right Side) */}
      <motion.div
        className="w-full lg:w-[60%] flex items-center justify-center order-1 mb-6 lg:mb-0"
        initial={{ x: 100, opacity: 0 }}   // slide in from right
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/fan 3d/lara/brown/2.webp"
          alt="Lara Fan"
          className="w-full h-auto object-contain max-h-[40vh] sm:max-h-[50vh] lg:max-h-[80vh]"
        />
      </motion.div>

      {/* Fan Details (Left Side with desktop padding) */}
      <motion.div
        className="w-full lg:w-[40%] flex flex-col items-center lg:items-start justify-center 
        text-center lg:text-left space-y-3 sm:space-y-5 order-2 p-4 sm:p-6 pt-0 lg:p-10 lg:pl-50"
        initial={{ x: -100, opacity: 0 }}   // slide in from left
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Fan Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Lara DX</h1>

        {/* Tagline */}
        <p className="text-base sm:text-xl md:text-2xl text-[#c0442b] font-medium italic animate-pulse">
          Sleek Elegance Defined
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed">
          The LARA offers a minimalist design with BLDC motor for energy efficiency 
          and smooth operation. A perfect fit for contemporary spaces.
        </p>

        {/* Motor Types */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start">
          {/* BLDC Motor */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-xs sm:text-sm font-bold shadow-md animate-pulse">
              ✓
            </span>
            <span className="text-green-400 font-semibold text-sm sm:text-lg">
              BLDC Motor
            </span>
          </div>

          {/* Induction Motor */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md animate-pulse">
              ✓
            </span>
            <span className="text-blue-400 font-semibold text-sm sm:text-lg">
              Induction Motor
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/products/lara"
          onClick={() => window.scrollTo(0, 0)}
          className="mt-4 md:mt-6 inline-flex items-center px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg md:text-xl rounded-2xl
          bg-gradient-to-r from-[#ba6a5a] to-orange-500 hover:shadow-lg
          hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
        >
          Explore Details
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Lara;
