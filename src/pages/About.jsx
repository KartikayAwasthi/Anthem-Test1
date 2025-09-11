import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Assets
const ceoImg = "/About/ceo.jpg";
const team1 = "/About/team1.webp";
const team2 = "/About/team2.png";
const team3 = "/About/team3.jpg";
const factory1 = "/About/factory1.jpg";
const factory2 = "/About/factory2.jpg";
const factory3 = "/About/factory3.jpg";
const factory4 = "/About/factory4.jpg";
const factory5 = "/About/factory5.jpg";
const factory6 = "/About/factory6.jpg";
const catalogPDF = "/About/anthem_catalog.pdf";

const About = () => {
  const team = [
    { name: "Rajesh Awasthi", role: "CEO & Founder", img: ceoImg },
    { name: "Sneha Rao", role: "Design Head", img: team1 },
    { name: "Aman Shah", role: "Production Manager", img: team2 },
    { name: "Divya Kulkarni", role: "Marketing Lead", img: team3 },
  ];

  const [ceoRef, inViewCeo] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, inViewTeam] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [catalogRef, inViewCatalog] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative bg-black text-white min-h-0 pt-32 pb-10 w-full overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#ba6a5a] opacity-20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d87c6a] opacity-20 blur-[200px] rounded-full"></div>

      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-6 px-4 md:px-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-white">Our </span>
        <span className="bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent">Story</span>
        <span className="text-white"> 🚀</span>
      </motion.h1>
      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 px-4 md:px-12 text-lg leading-relaxed">
        In 1991, Emsquare began not as manufacturers, but as passionate technicians. Today, we are a fully integrated design and manufacturing powerhouse, building fans that are as beautiful as they are functional.
      </p>

      {/* Timeline Section */}
      <section className="relative py-20 px-4 md:px-12" id="timeline">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Milestones </span>
          <span className="bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent">Through Time</span>
          <span className="text-white"> ⏳</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-6">
          {[
            {
              year: "1991",
              text: "Our journey began , a pivotal time for India's economic growth with implementation of liberalization policies.Initially stated as an OEM for India's No.1 fan brand.",
              status: "done",
            },
            {
              year: "2001",
              text: "We gradually expanded our expertise into manufacturing.Our humble beginnings were focused primarily on technical services and troubleshooting for the electrical fans and home appliances sector.",
              status: "done",
            },
            {
              year: "2011",
              text: "As our knowledge and expertise in product building grew, we ventured into manufacturing, leading to the establishment of our own production setup.",
              status: "done",
            },
            {
              year: "2021",
              text: "With a focus on backward integration, our manufacturing facility encompasses both component production and finished goods.",
              status: "done",
            },
             {
              year: "2025",
              text: "Today, we are exporting fans and appliances to UAE,Iraq,Sri Lanka, Nepal,Oman, Baharain and parts of Africa.We feature a comprehensive setup that includes winding, powder coating, painting processes, seamlessly integrating with our advance assembly operations to produce robust,high-quality products.",
              status: "upcoming",
            },
           
          ].map((milestone, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center md:w-1/5"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Dot */}
              <div
                className={`w-10 h-10 rounded-full shadow-lg border-4 border-black ${
                  milestone.status === "done"
                    ? "bg-[#e49385] animate-pulse"
                    : "bg-[#ba6a5a] animate-ping"
                }`}
              />

              {/* Card */}
              <motion.div
                className={`mt-6 p-6 rounded-2xl backdrop-blur-md shadow-lg border ${
                  milestone.status === "done"
                    ? "bg-black/70 border-[#ba6a5a]/40"
                    : "bg-[#111111]/70 border-[#ff8f7a]/40"
                } hover:shadow-[0_0_30px_rgba(186,106,90,0.4)] transition-all max-w-xs`}
              >
                <h3
                  className={`text-xl font-bold mb-2 ${
                    milestone.status === "done"
                      ? "bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent"
                      : "text-[#efb4a5]"
                  }`}
                >
                  {milestone.year}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{milestone.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Factory Images */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.img
            src={factory1}
            alt="Old Factory"
            className="rounded-2xl shadow-xl object-cover w-full h-72 hover:scale-105 transition-transform duration-500"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src={factory2}
            alt="New Factory"
            className="rounded-2xl shadow-xl object-cover w-full h-72 hover:scale-105 transition-transform duration-500"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src={factory3}
            alt="New Factory"
            className="rounded-2xl shadow-xl object-cover w-full h-72 hover:scale-105 transition-transform duration-500"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src={factory4}
            alt="New Factory"
            className="rounded-2xl shadow-xl object-cover w-full h-72 hover:scale-105 transition-transform duration-500"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src={factory5}
            alt="New Factory"
            className="rounded-2xl shadow-xl object-cover w-full h-72 hover:scale-105 transition-transform duration-500"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src={factory6}
            alt="New Factory"
            className="rounded-2xl shadow-xl object-cover w-full h-72 hover:scale-105 transition-transform duration-500"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      

     

      {/* Catalog Download */}
<motion.div
  ref={catalogRef}
  className="mt-28 text-center px-4 md:px-12"
  initial={{ opacity: 0, y: 30 }}
  animate={inViewCatalog ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 1 }}
>
  <h2 className="text-2xl font-semibold mb-6">
    <span className="text-white">Download Our </span>
    <span className="bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent">
      Product Catalog
    </span>
    <span className="text-white"> 📘</span>
  </h2>

  {/* Download Button */}
  <a
    href={catalogPDF}
    download="Anthem_Fan_Catalog.pdf"
    className="relative inline-block px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#e49385] to-[#d87c6a] hover:from-[#d87c6a] hover:to-[#e49385] transition shadow-lg overflow-hidden"
  >
    <span className="relative z-10">📎 Download Catalog</span>
    <span className="absolute inset-0 bg-gradient-to-r from-[#d87c6a] to-[#ba6a5a] opacity-0 hover:opacity-100 transition duration-300"></span>
  </a>

  {/* Catalog Preview Image (Smaller size) */}
  <div className="mt-6 flex justify-center">
    <img
      src="/About/Anthem-Catalog.png"
      alt="Anthem Catalog Preview"
      className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto rounded-xl shadow-md"
    />
  </div>
</motion.div>


    </div>
  );
};

export default About;
