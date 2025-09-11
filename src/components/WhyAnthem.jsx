import React from "react";
import { Star, DollarSign, Shield, User } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    icon: <Star className="w-10 h-10 text-[#ba6a5a]" />,
    title: "Where premium  meets POSSIBLE",
    text: "We make world-class fans accessible to everyone."
  },
  {
    icon: <DollarSign className="w-10 h-10 text-[#ba6a5a]" />,
    title: "Affordable EXCELLENCE",
    text: "Premium quality without the premium price tag."
  },
  {
    icon: <Shield className="w-10 h-10 text-[#ba6a5a]" />,
    title: "Built for TRUST",
    text: "30+ years of delivering performance that lasts."
  },
  {
    icon: <User className="w-10 h-10 text-[#ba6a5a]" />,
    title: "Designed for YOU",
    text: "Modern, reliable, and crafted to fit every home and institution."
  }
];

const WhyAnthem = () => {
  return (
    <div className="relative bg-black text-white py-32 overflow-hidden" id="why-anthem">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ba6a5a] opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d87c6a] opacity-20 blur-[180px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-12 relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why <span className="bg-gradient-to-r from-[#ba6a5a] to-[#d87c6a] bg-clip-text text-transparent">Anthem</span>?
        </motion.h1>

        <div className="relative flex flex-col gap-36">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
            >
              {/* Icon with Parallax */}
              <motion.div
                className="relative flex-shrink-0 z-20"
                initial={{ y: 0 }}
                whileInView={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, repeatType: "loop", duration: 4, delay: idx * 0.2 }}
              >
                {/* Glowing Circle */}
                <motion.div
                  className="absolute w-16 h-16 rounded-full bg-[#ba6a5a]/20 top-0 left-0"
                  animate={{ scale: [1, 1.15, 1], opacity: [1, 0.85, 1] }}
                  transition={{ repeat: Infinity, repeatType: "loop", duration: 2, delay: idx * 0.2 }}
                />
                {/* Icon */}
                <motion.div
                  className="relative z-10 w-16 h-16 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, repeatType: "loop", duration: 2, delay: idx * 0.2 }}
                >
                  {point.icon}
                </motion.div>
              </motion.div>

              {/* Curved Connector Line */}
              <svg
                className="absolute left-20 top-6 md:left-32 md:top-8 z-10 w-40 h-24"
                viewBox="0 0 160 80"
                fill="none"
              >
                <motion.path
                  d="M0,40 C40,0 120,80 160,40"
                  stroke="url(#gradientLine)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.3 + 0.2 }}
                />
                <defs>
                  <linearGradient id="gradientLine" x1="0" y1="0" x2="160" y2="0">
                    <stop stopColor="#ba6a5a" />
                    <stop offset="1" stopColor="#d87c6a" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Text Card */}
              <motion.div
                className="ml-0 md:ml-36 p-6 bg-[#111]/50 backdrop-blur-md rounded-3xl shadow-[0_0_30px_rgba(232,147,133,0.25)] z-10 w-full"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#ba6a5a] to-[#d87c6a] bg-clip-text text-transparent">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-lg">{point.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAnthem;
