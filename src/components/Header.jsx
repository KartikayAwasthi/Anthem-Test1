// Header.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ChevronDown, Menu, X } from "lucide-react";

// Dropdown animation
const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const Header = ({ activeSection, scrollToSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isVisualizerPage = location.pathname.includes("/visualizer/");
  const isProductPage = location.pathname.includes("/products/");

  const navItems = [
    { name: "Home", id: "home" },
    {
      name: "Product",
      dropdown: [
        {
          name: "Evaara",
          id: "evaara",
          image: "/fan 3d/Evaara/brown-1/1.webp",
        },
        {
          name: "Inara",
          id: "inara",
          image: "/fan 3d/Inaara/Blue/1.webp",
        },
        {
          name: "Skyro",
          id: "skyro",
          image: "/fan 3d/Skyro/white-gold/1.webp",
        },
        {
          name: "Lara",
          id: "lara",
          image: "/fan 3d/lara/brown/1.webp",
        },
      ],
    },
    { name: "About", id: "about" },
    { name: "Support", id: "support" },
    { name: "Dealer", id: "dealer" },
    {
      name: "Visualizer",
      dropdown: [
        { name: "2D Room", path: "/visualizer/2d", isRoute: true },
        { name: "3D Room", path: "/visualizer/3d", isRoute: true },
      ],
    },
    { name: "FAQs", id: "faqs" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (isVisualizerPage || isProductPage) {
      if (id === "home") {
        navigate("/");
      } else {
        navigate("/", { state: { scrollToId: id } });
      }
    } else {
      scrollToSection(id);
    }

    if (mobileOpen) setMobileOpen(false);
  };

  const isActive = (item) => {
    if (item.id === activeSection) return true;
    if (item.dropdown) {
      return item.dropdown.some((sub) => sub.id === activeSection);
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        {isVisualizerPage || isProductPage ? (
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo/logo-white.webp"
              alt="Anthem Logo"
              className="h-10 w-auto"
            />
          </Link>
        ) : (
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2"
          >
            <img
              src="/logo/logo-white.webp"
              alt="Anthem Logo"
              className="h-10 w-auto"
            />
          </a>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white text-xl font-medium relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setHoverMenu(item.name)}
              onMouseLeave={() => setHoverMenu(null)}
            >
              {item.dropdown ? (
                <button
                  className={`flex items-center gap-1 transition-colors ${
                    isActive(item) ? "text-[#ba6a5a]" : "hover:text-[#ba6a5a]"
                  }`}
                >
                  {item.name} <ChevronDown size={16} />
                </button>
              ) : (
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`transition-colors ${
                    isActive(item) ? "text-[#ba6a5a]" : "hover:text-[#ba6a5a]"
                  }`}
                >
                  {item.name}
                </a>
              )}

              {/* Horizontal Dropdown */}
              <AnimatePresence>
                {hoverMenu === item.name && item.dropdown && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    transition={{ duration: 0.2 }}
                    className="absolute top-12 left-0 bg-black/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-4 flex gap-6"
                  >
                    {item.dropdown.map((sub) =>
                      sub.isRoute ? (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex flex-col items-center w-32 p-3 rounded-lg text-white hover:bg-[#ba6a5a]/20 transition"
                          onClick={() => setHoverMenu(null)}
                        >
                          {sub.image && (
                            <img
                              src={sub.image}
                              alt={sub.name}
                              className="w-24 h-24 object-contain rounded-lg shadow-md mb-2"
                              loading="lazy"
                            />
                          )}
                          <span className="text-sm text-center">{sub.name}</span>
                        </Link>
                      ) : (
                        <a
                          key={sub.name}
                          href={`#${sub.id}`}
                          onClick={(e) => handleNavClick(e, sub.id)}
                          className={`flex flex-col items-center w-32 p-3 rounded-lg transition ${
                            activeSection === sub.id
                              ? "bg-[#ba6a5a]/20 text-[#ba6a5a]"
                              : "text-white hover:bg-[#ba6a5a]/20"
                          }`}
                        >
                          {sub.image && (
                            <img
                              src={sub.image}
                              alt={sub.name}
                              className="w-24 h-24 object-contain rounded-lg shadow-md mb-2"
                              loading="lazy"
                            />
                          )}
                          <span className="text-sm text-center">{sub.name}</span>
                        </a>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Cart */}
        <div className="flex items-center gap-4">
          <a
            href="#cart"
            className="text-white relative hover:text-[#ba6a5a] transition-colors"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-[#ba6a5a] text-white text-xs font-bold rounded-full px-1.5 py-0.5">
              2
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 p-6 space-y-4"
          >
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col gap-2">
                {item.dropdown ? (
                  <>
                    <span
                      className={`font-medium ${
                        isActive(item) ? "text-[#ba6a5a]" : "text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((sub) =>
                        sub.isRoute ? (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="flex items-center gap-3 text-sm text-gray-300 hover:text-blue-400"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.image && (
                              <img
                                src={sub.image}
                                alt={sub.name}
                                className="w-8 h-8 object-contain rounded-md"
                              />
                            )}
                            {sub.name}
                          </Link>
                        ) : (
                          <a
                            key={sub.name}
                            href={`#${sub.id}`}
                            className={`flex items-center gap-3 text-sm ${
                              activeSection === sub.id
                                ? "text-[#ba6a5a]"
                                : "text-gray-300 hover:text-blue-400"
                            }`}
                            onClick={(e) => handleNavClick(e, sub.id)}
                          >
                            {sub.image && (
                              <img
                                src={sub.image}
                                alt={sub.name}
                                className="w-8 h-8 object-contain rounded-md"
                              />
                            )}
                            {sub.name}
                          </a>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <a
                    href={`#${item.id}`}
                    className={`${
                      isActive(item)
                        ? "text-[#ba6a5a]"
                        : "text-white hover:text-blue-400"
                    }`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
