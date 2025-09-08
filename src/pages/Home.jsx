import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
  src="/Anthem-Fan-video.mov"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover object-center bg-black mt-20"
/>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
        <div className="text-white px-6 flex flex-col items-center">
          {/* Logo */}
          <img
            src="/logo/logo-white.png"
            alt="Anthem Logo"
            className="w-40 md:w-48 mb-6 drop-shadow-lg"
          />

          {/* Heading & Text */}
          <h1 className="animate-pulse text-4xl md:text-6xl font-bold mb-4">
            Welcome to Anthem Fans
          </h1>
          <p className="text-lg md:text-2xl mb-6 animate-pulse">
            Where premium Meets Possible
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
