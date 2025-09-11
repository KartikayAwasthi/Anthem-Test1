import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Skyro = () => {
  return (
    <div
      className="bg-[#F9E8CA] 
      
      text-black min-h-screen flex flex-col lg:flex-row items-center justify-center w-full overflow-hidden  lg:py-16"
    >
      {/* Content Section (Left side) */}
      <motion.div
        className="w-full lg:w-[40%] flex flex-col items-center lg:items-start justify-center 
        text-center lg:text-left space-y-3 sm:space-y-5 order-2 lg:order-1 p-4 sm:p-6 pt-0 lg:p-10 lg:pl-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Fan Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Skyro</h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#c0442b] font-medium italic animate-pulse">
          Minimal. Modern. Majestic.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed">
          Introducing the Skyro Series by Anthem — a fan engineered to blend
          sleek minimalism, premium materials, and whisper-quiet performance.
          Crafted for those who value understated luxury and efficient comfort,
          Skyro is more than a ceiling fan — it's an expression of modern
          design.
        </p>

        {/* Motor Types */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
          {/* BLDC Motor */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold shadow-md animate-pulse">
              ✓
            </span>
            <span className="text-green-400 font-semibold text-base sm:text-lg">
              BLDC Motor
            </span>
          </div>

          {/* Induction Motor */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold shadow-md animate-pulse">
              ✓
            </span>
            <span className="text-blue-400 font-semibold text-base sm:text-lg">
              Induction Motor
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/products/skyro"
          onClick={() => window.scrollTo(0, 0)}
          className="mt-4 md:mt-6 inline-flex items-center px-6 py-3 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl rounded-2xl
          bg-gradient-to-r from-[#ba6a5a] to-orange-500 hover:shadow-lg
          hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
        >
          Explore Details
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </motion.div>

      {/* Fan Image (Right side) */}
      <motion.div
        className="w-full lg:w-[60%] flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="/fan 3d/Skyro/blue/2.webp"
          alt="Skyro Fan"
          className="w-full h-auto object-contain max-h-[40vh] sm:max-h-[50vh] lg:max-h-[80vh]"
        />
      </motion.div>
    </div>
  );
};

export default Skyro;
