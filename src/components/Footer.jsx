import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const anthemLogo = "/logo/logo-white.png";

const Footer = ({ scrollToSection }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if current path is a visualizer page or product page
  const isVisualizerPage = location.pathname.includes('/visualizer/');
  const isProductPage = location.pathname.includes('/products/');

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    // If we're on a visualizer page or product page, navigate to home first then scroll to section
    if (isVisualizerPage || isProductPage) {
      navigate('/', { state: { scrollToId: id } });
    } else {
      // If already on home page, just scroll to section
      scrollToSection(id);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full bg-black/90 text-white border-t border-[#e7b2a6] shadow-inner"
    >
      <div className="py-10 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo Section */}
          <div>
            {isVisualizerPage || isProductPage ? (
              <Link to="/">
                <img
                  src={anthemLogo}
                  alt="Anthem Logo"
                  className="h-16 w-auto mb-4 cursor-pointer"
                />
              </Link>
            ) : (
              <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
                <img
                  src={anthemLogo}
                  alt="Anthem Logo"
                  className="h-16 w-auto mb-4 cursor-pointer"
                />
              </a>
            )}
            <p className="text-sm text-white/80">
              Crafting elegance with every rotation. Premium fans for modern homes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#ba6a5a] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/50">
              {[
                { label: "Home", id: "home" },
                { label: "Products", id: "evaara" },
                { label: "About", id: "about" },
                { label: "Support", id: "support" },
                { label: "Dealers", id: "dealer" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  {isVisualizerPage || isProductPage ? (
                    <Link
                      to="/"
                      state={{ scrollToId: link.id }}
                      className="hover:text-[#ba6a5a] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="hover:text-[#ba6a5a] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-[#ba6a5a] mb-4">Contact</h3>
            <p className="text-sm mb-2">
              📧{" "}
              <a
                href="mailto:info@emsquareglobal.com"
                className="underline hover:text-[#ba6a5a]"
              >
                info@emsquareglobal.com
              </a>
            </p>
            <p className="text-sm mb-2">
              📞{" "}
              <a href="tel:+919930101710" className="underline hover:text-[#ba6a5a]">
                +91 9930101710
              </a>
            </p>
            <p className="text-sm mb-4">
              📍{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+No.72,+GDIC,+Bethora+Industrial+Estate,+Bethora,+Ponda,+Goa+-+403409"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#ba6a5a]"
              >
                Plot No.72, GDIC, Bethora Industrial Estate, Ponda, Goa - 403409
              </a>
            </p>

            {/* Social Icons with Original Colors */}
            <div className="flex gap-4 mt-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61564845184269",
                  title: "Facebook",
                  icon: <Facebook size={20} className="text-[#1877f2]" />, // Facebook blue
                },
                {
                  href: "https://www.instagram.com/emsquareindustries/",
                  title: "Instagram",
                  icon: <Instagram size={20} className="text-[#E4405F]" />, // Instagram pink
                },
                {
                  href: "https://www.linkedin.com/in/emsquare-industries-06888131b/",
                  title: "LinkedIn",
                  icon: <Linkedin size={20} className="text-[#0077b5]" />, // LinkedIn blue
                },
              ].map(({ href, title, icon }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg"
                  title={title}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center text-sm text-[#a07c73] mt-10 pt-6 border-t border-[#e7b2a6]">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Anthem Fans & Appliances</span>. All
          rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;