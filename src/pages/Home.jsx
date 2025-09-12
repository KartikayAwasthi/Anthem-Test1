import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
  src="/Anthem-Fan-video.webm"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover object-center bg-black mt-20"
/>
      </div>

      
    </div>
  );
};

export default Home;
