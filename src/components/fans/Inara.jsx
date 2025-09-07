import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Inara = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#85796B] to-[#F9E8CA] 
      bg-[length:200%_200%] animate-[gradient-move_8s_ease_infinite] 
      text-black min-h-screen flex flex-col lg:flex-row items-center justify-center w-full overflow-hidden py-8 lg:py-16"
    >
      {/* Fan Image (Left Side on Desktop) */}
      <motion.div
        className="w-full lg:w-[60%] flex items-center justify-center order-1 mb-6 lg:mb-0"
        initial={{ x: -100, opacity: 0 }} // slide in from left
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/fan 3d/Inaara/white/2.webp"
          alt="Inara Fan"
          className="w-full h-auto object-contain max-h-[40vh] sm:max-h-[50vh] lg:max-h-[80vh]"
        />
      </motion.div>

      {/* Fan Details (Right Side on Desktop) */}
      <motion.div
        className="w-full lg:w-[40%] flex flex-col items-center lg:items-start justify-center 
        text-center lg:text-left space-y-3 sm:space-y-5 order-2 p-4 sm:p-6 pt-0 lg:p-10 lg:pl-15"
        initial={{ x: 100, opacity: 0 }} // slide in from right
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Fan Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-pacifico">
          Inara
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-xl md:text-2xl text-[#c0442b] font-medium italic animate-pulse">
          Crafted to Be Admired. Engineered to Perform.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed">
          Step into elegance with the Inara Series by Anthem — a stunning union
          of craftsmanship and cooling performance. Designed to be the
          centerpiece of your room, Inara fans turn functionality into a visual
          art form. Whether off or on, they’re built to impress.
        </p>

        {/* Motor Types */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start">
          {/* BLDC Motor */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-white text-xs sm:text-sm font-bold shadow-md animate-pulse">
              ✓
            </span>
            <span className="text-green-400 font-semibold text-sm sm:text-lg">
              BLDC Motor
            </span>
          </div>

          {/* Induction Motor */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md animate-pulse">
              ✓
            </span>
            <span className="text-blue-400 font-semibold text-sm sm:text-lg">
              Induction Motor
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/products/inara"
          onClick={() => window.scrollTo(0, 0)}
          className="mt-3 md:mt-6 inline-flex items-center px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg md:text-xl rounded-xl
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

export default Inara;
