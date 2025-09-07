import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-[72px] left-0 h-1 z-50"
      style={{
        width: `${scroll}%`,
        background: "linear-gradient(to right, #ba6a5a, #f5c1b3)",
      }}
      initial={{ width: 0 }}
      animate={{ width: `${scroll}%` }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
};

export default ScrollProgress;
