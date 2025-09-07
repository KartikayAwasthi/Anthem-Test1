import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative bg-black text-white py-16 pt-28 w-full overflow-hidden" id="contact">
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#ba6a5a] opacity-20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d87c6a] opacity-20 blur-[180px] rounded-full"></div>

      <div className="px-4 md:px-12 max-w-6xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s <span className="bg-gradient-to-r from-[#ba6a5a] to-[#d87c6a] bg-clip-text text-transparent">Connect</span> 🌐
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {/* Contact Form */}
          <motion.div
            className="relative p-8 rounded-2xl bg-[#111]/60 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(186,106,90,0.25)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2
              className="text-3xl font-semibold mb-8 bg-gradient-to-r from-[#ba6a5a] to-[#d87c6a] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h2>

            <form className="space-y-6">
              {/* Name */}
              <div className="relative group">
                <input
                  type="text"
                  required
                  className="peer w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:border-[#ba6a5a] focus:ring-2 focus:ring-[#ba6a5a]/50 transition outline-none"
                />
                <label className="absolute left-3 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#ba6a5a] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#ba6a5a]">
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  required
                  className="peer w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:border-[#ba6a5a] focus:ring-2 focus:ring-[#ba6a5a]/50 transition outline-none"
                />
                <label className="absolute left-3 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#ba6a5a] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#ba6a5a]">
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea
                  rows="5"
                  required
                  className="peer w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:border-[#ba6a5a] focus:ring-2 focus:ring-[#ba6a5a]/50 transition outline-none"
                />
                <label className="absolute left-3 top-3 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#ba6a5a] peer-valid:-top-3 peer-valid:text-xs peer-valid:text-[#ba6a5a]">
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full py-3 rounded-lg bg-gradient-to-r from-[#ba6a5a] to-[#d87c6a] text-white font-semibold shadow-lg overflow-hidden"
              >
                <span className="relative z-10">🚀 Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#d87c6a] to-[#ba6a5a] opacity-0 hover:opacity-100 transition duration-300"></span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="relative flex flex-col justify-center p-8 rounded-2xl bg-[#111]/60 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(232,147,133,0.25)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-5xl mb-4 text-center animate-pulse">✨</div>
            <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-[#ba6a5a] to-[#d87c6a] bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-6 text-gray-300 text-lg">
              <div className="flex items-center gap-3 hover:text-white transition">
                <Mail className="text-[#efb4a5]" />
                <a
                  href="mailto:info@emsquareglobal.com"
                  className="hover:text-white transition"
                >
                  info@emsquareglobal.com
                </a>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition">
                <Phone className="text-[#e49385]" />
                <a href="tel:+919930101710">+91 9930101710</a>
              </div>
              <div className="flex items-start gap-3 hover:text-white transition">
                <MapPin className="text-[#ba6a5a] mt-1" />
                <a
                  href="https://www.google.com/maps/place/Plot+No.72,+GDIC,+Bethora+Industrial+Estate,+Ponda,+Goa+403409"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plot No.72, GDIC, Bethora Industrial Estate,<br />
                  Bethora, Ponda, Goa – 403409
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
