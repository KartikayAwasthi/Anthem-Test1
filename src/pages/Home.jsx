import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/Banner/1-w.jpg",
  "/Banner/1-wn.jpg",
  "/Banner/2-w.jpg",
  "/Banner/2-wn.jpg",
  "/Banner/3-w.jpg",
  "/Banner/3-wn.jpg",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  // Slide variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute",
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
      position: "absolute",
    }),
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black pt-20">
      {/* Carousel */}
      <div className="w-full h-full relative">
        <AnimatePresence custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            alt="Banner"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

    {/* Overlay */}
<div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
  <div className="text-[#000000] px-6 flex flex-col items-center">
    {/* Logo */}
    <img
      src="/logo/logo-white.png"
      alt="Anthem Logo"
      className="w-50 md:w-40 mb-6 drop-shadow-lg"
    />

    {/* Heading & Text */}
    <h1 className="text-white animate-pulse text-4xl md:text-6xl font-bold mb-4">
      Welcome to Anthem Fans
    </h1>
    <p className="text-lg md:text-2xl mb-6 text-white animate-pulse">
      Where premium Meets Possible
    </p>
  </div>
</div>


      {/* Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
