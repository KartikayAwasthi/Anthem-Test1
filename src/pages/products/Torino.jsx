import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, Zap, Volume2, Shield, ChevronDown, ChevronUp, ShoppingCart, Heart, X, ChevronLeft, ChevronRight, ZoomIn, Share2, Settings, Battery, Info } from "lucide-react";
import { useCart } from '../../contexts/CartContext';
import ColorChangeTransition from '../../components/ColorChangeTransition';
import CartButton from '../../components/CartButton';

// Custom styles
const styles = {
  '@keyframes float': {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0px)' }
  },
  '.animate-float': {
    animation: 'float 3s ease-in-out infinite'
  }
};

// Import Torino images
const torinoImg1 = "/Pedestal Fans/Torino/T-Black/1.webp";
const torinoImg2 = "/Pedestal Fans/Torino/T-White/1.webp";
const torinoImg3 = "/Pedestal Fans/Torino/T-Black/2.webp";
const torinoImg4 = "/Pedestal Fans/Torino/T-Black/3.webp";
const torinoImg5 = "/Pedestal Fans/Torino/T-Black/4.webp";

const torinoCreatives = [
  "/Pedestal Fans/Torino/creative1.jpg",
  "/Pedestal Fans/Torino/creative2.jpg",
  "/Pedestal Fans/Torino/creative3.jpg",
  "/Pedestal Fans/Torino/creative4.jpg",
];

const torinoData = {
  name: "Torino",
  image: torinoImg1,
  motorTypes: {
    bldc: {
      name: "BLDC Motor",
      price: "₹5,499",
      description: "Experience superior cooling with the Torino Series by Anthem — a premium pedestal fan that combines elegant design with advanced BLDC technology. With its sleek profile, adjustable height, and energy-efficient operation, Torino delivers powerful airflow while complementing your interior decor.",
      features: [
        "Energy-efficient BLDC motor with ultra-low power consumption",
        "Adjustable height and tilt for customized airflow",
        "Remote control with 6 speed settings and timer function",
        "Oscillation feature for wide area cooling",
        "Quiet operation even at highest speeds",
        "LED display with ambient light sensor",
        "Portable design with stable base",
        "5 years warranty on motor",
        "2 years warranty on electronics",
        "Modern design with metallic finish"
      ],
      specifications: {
        "Motor Type": "BLDC",
        "Power Consumption": "25W (Max)",
        "Input Voltage": "230V AC, 50Hz",
        "Air Delivery": "25 m³/min",
        "Speed Settings": "6 speeds + Boost mode",
        "Oscillation Angle": "85 degrees",
        "Height Adjustment": "1.2m - 1.5m",
        "Noise Level": "< 45 dB",
        "Remote Control": "RF Remote with LCD display",
        "Warranty": "5 Years Motor, 2 Years Electronics"
      }
    }
  },
  rating: 4.8,
  colors: [
    { 
      name: "T-Black", 
      image: torinoImg1, 
      code: "#2C2C2C",
      folder: "black",
      images3d: ["/Pedestal Fans/Torino/T-Black/1.webp", "/Pedestal Fans/Torino/T-Black/2.webp", "/Pedestal Fans/Torino/T-Black/3.webp", "/Pedestal Fans/Torino/T-Black/4.webp" ,"/Pedestal Fans/Torino/T-Black/5.webp", "/Pedestal Fans/Torino/T-Black/6.webp"  ,"/Pedestal Fans/Torino/T-Black/7.webp"  ,"/Pedestal Fans/Torino/T-Black/8.webp"  ,"/Pedestal Fans/Torino/T-Black/9.webp"  ,"/Pedestal Fans/Torino/T-Black/10.webp"  ,"/Pedestal Fans/Torino/T-Black/11.webp"]
    },
    { 
      name: "T-White", 
      image: torinoImg2, 
      code: "#FFFFFF",
      folder: "white",
      images3d: ["/Pedestal Fans/Torino/T-White/1.webp", "/Pedestal Fans/Torino/T-White/2.webp", "/Pedestal Fans/Torino/T-White/3.webp"]
    }
  ],
  itemDetails: {
    brandName: "Anthem by Emsquare Industries",
    modelName: "Torino Pedestal Fan",
    bldcComponents: [
      "BLDC Motor Assembly",
      "Adjustable Stand with Stable Base",
      "Fan Head with Aerodynamic Blades",
      "RF Remote Control with LCD Display",
      "Power Adapter",
      "User Manual",
      "Warranty Card"
    ],
    manufacturerAddress: {
      company: "Emsquare Industries",
      address: "Plot No. 72, GIDC, Bethora Industrial Estate, Bethora, Ponda, Goa-403409, India",
      phone: "+91 7400440127",
      email: "info@emsquareglobal.com",
      website: "www.anthemappliances.com"
    }
  }
};

const TorinoFan = () => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(torinoData.colors[0]);
  const [current3dImageIndex, setCurrent3dImageIndex] = useState(0);
  
  const getDefaultMotorType = () => {
    const availableTypes = Object.keys(torinoData.motorTypes);
    if (availableTypes.includes('bldc')) return 'bldc';
    return availableTypes[0];
  };
  
  const [selectedMotorType, setSelectedMotorType] = useState(getDefaultMotorType());
  const [showColorTransition, setShowColorTransition] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isItemDetailsOpen, setIsItemDetailsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Fullscreen image viewer states
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);

  // Get current motor data based on selection
  const getCurrentMotorData = () => {
    const currentMotor = torinoData.motorTypes[selectedMotorType];
    if (currentMotor) return currentMotor;
    
    const availableTypes = Object.keys(torinoData.motorTypes);
    return torinoData.motorTypes[availableTypes[0]] || {};
  };

  // Get dynamic quick info based on motor type
  const getQuickInfo = () => {
    const currentMotor = getCurrentMotorData();
    const motorType = selectedMotorType;
    
    if (motorType === 'bldc') {
      return [
        { icon: Zap, label: "Energy Efficient", desc: `${currentMotor.specifications?.["Power Consumption"] || "25W"} Power` },
        { icon: Volume2, label: "Quiet Operation", desc: `${currentMotor.specifications?.["Noise Level"] || "< 45 dB"}` },
        { icon: Shield, label: "Long Warranty", desc: currentMotor.specifications?.["Warranty"] || "5 Years Motor" }
      ];
    } else {
      return [
        { icon: Zap, label: "Energy Efficient", desc: "Low Power" },
        { icon: Volume2, label: "Quiet Operation", desc: "Silent Performance" },
        { icon: Shield, label: "Warranty", desc: "Coverage Included" }
      ];
    }
  };

  // Get components based on selected motor type
  const getCurrentComponents = () => {
    if (selectedMotorType === 'bldc') {
      return torinoData.itemDetails.bldcComponents;
    }
    return torinoData.itemDetails.bldcComponents || [];
  };

  // Handle motor type change
  const handleMotorTypeChange = (motorType) => {
    setSelectedMotorType(motorType);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    const currentMotor = getCurrentMotorData();
    const cartItem = {
      id: `torino-${selectedMotorType}-${selectedColor.name}`,
      name: `${torinoData.name} (${currentMotor.name})`,
      price: currentMotor.price,
      image: getCurrent3dImage(),
      desc: currentMotor.description,
      color: selectedColor?.name || 'Default',
      motorType: currentMotor.name
    };
    addToCart(cartItem);
    
    alert(`${torinoData.name} with ${currentMotor.name} added to cart!`);
  };

  // Handle share function
  const handleShare = async () => {
    const shareData = {
      title: `Anthem ${torinoData.name}`,
      text: `Check out this amazing ${torinoData.name} pedestal fan`,
      url: window.location.href
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.log('Clipboard error:', clipboardError);
      }
    }
  };

  const handleColorChange = (color) => {
    if (selectedColor?.name !== color.name) {
      setShowColorTransition(true);
      setTimeout(() => {
        setSelectedColor(color);
        setCurrent3dImageIndex(0);
      }, 600);
    }
  };

  const getCurrentImage = () => {
    return selectedColor ? selectedColor.image : torinoData.image;
  };

  // Get current 3D image
  const getCurrent3dImage = () => {
    if (!selectedColor || !selectedColor.images3d || selectedColor.images3d.length === 0) {
      return getCurrentImage();
    }
    return selectedColor.images3d[current3dImageIndex];
  };

  // Navigate to next 3D image
  const next3dImage = () => {
    if (!selectedColor?.images3d) return;
    setCurrent3dImageIndex((prev) => 
      (prev + 1) % selectedColor.images3d.length
    );
  };

  // Navigate to previous 3D image
  const prev3dImage = () => {
    if (!selectedColor?.images3d) return;
    setCurrent3dImageIndex((prev) => 
      (prev - 1 + selectedColor.images3d.length) % selectedColor.images3d.length
    );
  };

  // Fullscreen image viewer functions
  const openFullscreen = (imageIndex) => {
    setFullscreenImageIndex(imageIndex);
    setShowFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const totalImages = torinoCreatives.length;
    setFullscreenImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    const totalImages = torinoCreatives.length;
    setFullscreenImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showFullscreen) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeFullscreen();
      } else {
        if (e.key === 'ArrowRight') next3dImage();
        if (e.key === 'ArrowLeft') prev3dImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showFullscreen, selectedColor]);

  const currentMotor = getCurrentMotorData();

  if (!torinoData) {
    return (
      <div className="bg-white text-gray-800 min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-600 mb-4">Fan not found</h2>
          <p className="text-gray-600">The requested fan model could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen pt-20 pb-20">
      <div className="w-full">
        {/* Fullscreen Image Viewer */}
        <AnimatePresence>
          {showFullscreen && torinoCreatives && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90"
              onClick={closeFullscreen}
            >
              {/* Header controls */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                <div className="bg-white/80 text-gray-800 text-sm px-4 py-2 rounded-full backdrop-blur-sm shadow-sm">
                  <span className="font-medium">{fullscreenImageIndex + 1} / {torinoCreatives.length}</span>
                </div>
                <button
                  onClick={closeFullscreen}
                  className="bg-white/80 text-gray-800 p-3 hover:bg-red-100 rounded-full transition-all duration-200 backdrop-blur-sm shadow-sm"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation arrows */}
              {torinoCreatives.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-4 hover:bg-amber-100 rounded-full transition-all duration-200 z-20 backdrop-blur-sm shadow-sm"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-4 hover:bg-amber-100 rounded-full transition-all duration-200 z-20 backdrop-blur-sm shadow-sm"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image */}
              <motion.div
                className="relative flex items-center justify-center w-full height-full p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className="relative flex items-center justify-center rounded-lg shadow-2xl"
                >
                  <motion.img
                    key={fullscreenImageIndex}
                    src={torinoCreatives[fullscreenImageIndex]}
                    alt={`Creative ${fullscreenImageIndex + 1}`}
                    className="select-none rounded-lg max-w-[80vw] max-h-[80vh] object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    draggable={false}
                  />
                </motion.div>
              </motion.div>

              {/* Bottom instructions */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-800 text-sm text-center z-20">
                <div className="bg-white/80 rounded-xl px-6 py-3 backdrop-blur-sm shadow-sm">
                  <div className="flex items-center justify-center space-x-6 text-xs">
                    <span className="flex items-center space-x-1">
                      <span className="text-amber-600">←→</span>
                      <span>Navigate</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="text-amber-600">ESC</span>
                      <span>Close</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-120px)] lg:overflow-hidden">
          {/* Left Column - Images (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-[60%] lg:sticky lg:top-24 h-[60vh] lg:h-full overflow-hidden"
          >
            {/* Main Image with Glassmorphism Effect */}
            <div className="relative bg-gray-50 h-full flex items-center justify-center p-0 border-r border-gray-200">
              {/* Glassmorphism circles/blobs in background */}
              <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-amber-100/50 filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-amber-50/30 filter blur-3xl"></div>
              <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white/20 filter blur-2xl"></div>
              
              {/* Remote image at bottom right */}
              <div className="absolute bottom-4 right-6 sm:right-10 md:right-16 lg:right-20 z-20 w-25 sm:w-10 md:w-14 lg:w-20">
                <img 
                  src="/Pedestal Fans/remote/remote-p1.webp" 
                  alt="Fan Remote" 
                  className="w-full h-auto object-contain drop-shadow-lg animate-float opacity-100  transition-opacity"
                />
              </div>
              
              {/* Glassmorphism container for the fan - Full size */}
              <div className="relative z-10 bg-gray-100 backdrop-blur-sm rounded-none lg:rounded-r-3xl border-r border-gray-100 shadow-lg w-full h-full flex items-center justify-center">
                <motion.img
                  key={`${selectedColor?.name}-${current3dImageIndex}`}
                  src={getCurrent3dImage()}
                  alt={`${torinoData.name} ${selectedColor?.name} View ${current3dImageIndex + 1}`}
                  className="w-full h-full object-contain transition-all duration-500 scale-125 sm:scale-120 md:scale-115 lg:scale-110 max-h-[90vh] lg:max-h-[calc(95vh-120px)]"
                  initial={{ opacity: 0.8, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -50) {
                      next3dImage();
                    } else if (swipe > 50) {
                      prev3dImage();
                    }
                  }}
                />
              </div>
              
              {/* Navigation controls for 3D images */}
              {selectedColor?.images3d && selectedColor.images3d.length > 1 && (
                <>
                  <button
                    onClick={prev3dImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 sm:p-3 hover:bg-amber-100 rounded-full transition-all duration-300 backdrop-blur-sm z-20 shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={next3dImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 sm:p-3 hover:bg-amber-100 rounded-full transition-all duration-300 backdrop-blur-sm z-20 shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  
                  {/* Image pagination indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm text-gray-800 text-sm px-4 py-2 rounded-full z-20 shadow-sm">
                    <span className="font-medium">{current3dImageIndex + 1} / {selectedColor.images3d.length}</span>
                  </div>
                </>
              )}
              
              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <button 
                  onClick={handleShare}
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors group shadow-sm"
                  title="Share this fan"
                >
                  <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-800" />
                </button>
                <button className="p-3 bg-white/80 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors shadow-sm">
                  <Heart className="w-5 h-5 text-gray-800" />
                </button>
              </div>
              
              {/* Localized Color Change Animation */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <ColorChangeTransition 
                  isVisible={showColorTransition} 
                  onComplete={() => setShowColorTransition(false)}
                  type="fan"
                  localized={true}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[40vh] lg:h-full lg:w-[40%] space-y-4 sm:space-y-6 p-4 sm:p-6 overflow-y-auto bg-white lg:flex lg:flex-col"
          >
            {/* Product Title & Rating */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                {torinoData.name}
              </h1>
              <motion.p 
                className="text-sm font-medium mb-2 sm:mb-3 text-black tracking-widest uppercase font-serif"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700">
                  Premium Pedestal Cooling
                </span>
                <motion.span 
                  className="block h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </motion.p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(torinoData.rating)
                          ? "text-amber-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 ml-2">({torinoData.rating})</span>
                </div>
                <span className="text-green-600 text-sm">In Stock</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                  {getCurrentMotorData().name}
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {getCurrentMotorData().description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-amber-600">{getCurrentMotorData().price}</span>
                  <span className="text-gray-500 line-through ml-3">₹{parseInt(getCurrentMotorData().price?.replace('₹', '') || '0') + 1000}</span>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Save ₹1000
                </span>
              </div>
            </div>

            {/* Color Variants */}
            {torinoData.colors && torinoData.colors.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-amber-600 mb-3">Available Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {torinoData.colors.map((color, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`cursor-pointer p-2 rounded-lg border transition-all duration-300 ${
                        selectedColor?.name === color.name
                          ? "border-amber-500 bg-amber-50"
                          : "border-gray-200 hover:border-amber-300 bg-white"
                      }`}
                      onClick={() => handleColorChange(color)}
                    >
                      <img
                        src={color.images3d && color.images3d.length > 0 ? color.images3d[0] : color.image}
                        alt={color.name}
                        className="w-14 h-14 object-contain"
                      />
                      <p className="text-xs text-center mt-1 text-gray-700">{color.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Motor Type Selection Buttons */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-amber-600">Motor Type</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(torinoData.motorTypes).map(([motorKey, motorData]) => (
                  <motion.button
                    key={motorKey}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-xl border text-sm transition-all duration-300 ${
                      selectedMotorType === motorKey
                        ? "border-amber-500 bg-amber-50"
                        : "border-gray-200 hover:border-amber-300 bg-white"
                    }`}
                    onClick={() => handleMotorTypeChange(motorKey)}
                  >
                    <div className="flex items-center gap-2">
                      {motorKey === 'bldc' ? (
                        <Battery className={`w-4 h-4 ${selectedMotorType === motorKey ? 'text-amber-600' : 'text-gray-500'}`} />
                      ) : (
                        <Settings className={`w-4 h-4 ${selectedMotorType === motorKey ? 'text-amber-600' : 'text-gray-500'}`} />
                      )}
                      <div>
                        <span className="font-medium text-gray-800">{motorData.name}</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <div className="flex-1">
                <CartButton 
                  product={{
                    id: `torino-${selectedMotorType}-${selectedColor.name}`,
                    name: `${torinoData.name} (${getCurrentMotorData().name})`,
                    price: getCurrentMotorData().price,
                    image: getCurrent3dImage(),
                    desc: getCurrentMotorData().description,
                    color: selectedColor?.name || 'Default',
                    motorType: getCurrentMotorData().name
                  }}
                  className="py-4 px-6"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-amber-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-amber-700 transition-all duration-300"
                onClick={handleAddToCart}
              >
                Buy Now
              </motion.button>
            </div>

            {/* Quick Info Icons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {getQuickInfo().map((info, index) => (
                <div key={index} className="text-center p-2 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mx-auto mb-1 sm:mb-2" />
                  <p className="text-xs sm:text-sm text-gray-800">{info.label}</p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">{info.desc}</p>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 bg-gradient-to-br from-[#fdf8f7] to-white rounded-xl p-6 border border-[#e9b2a9]/40 shadow-sm"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              >
                <h3 className="text-lg font-semibold bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent">Key Features</h3>
                <motion.div
                  animate={{ rotate: isFeaturesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#d87c6a]"
                >
                  {isFeaturesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ height: isFeaturesOpen ? "auto" : 0, opacity: isFeaturesOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-3">
                  {getCurrentMotorData().features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isFeaturesOpen ? 1 : 0, y: isFeaturesOpen ? 0 : 10 }}
                      transition={{ duration: 0.3, delay: isFeaturesOpen ? index * 0.05 : 0 }}
                      className="flex items-start gap-3 pb-2"
                    >
                      <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-tr from-[#e49385] to-[#d87c6a] flex-shrink-0"></div>
                      <p className="text-gray-700">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Technical Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 bg-gradient-to-br from-[#fdf8f7] to-white rounded-xl p-6 border border-[#e9b2a9]/40 shadow-sm"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              >
                <h3 className="text-lg font-semibold bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent">Technical Specifications</h3>
                <motion.div
                  animate={{ rotate: isSpecsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#d87c6a]"
                >
                  {isSpecsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ height: isSpecsOpen ? "auto" : 0, opacity: isSpecsOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 grid grid-cols-1 gap-3">
                  {Object.entries(getCurrentMotorData().specifications || {}).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: isSpecsOpen ? 1 : 0, y: isSpecsOpen ? 0 : 10 }}
                      transition={{ duration: 0.3, delay: isSpecsOpen ? index * 0.05 : 0 }}
                      className="flex justify-between items-center border-b border-gray-200 pb-3"
                    >
                      <span className="text-gray-700 text-sm">{key}</span>
                      <span className="text-gray-900 font-medium text-sm text-right">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Item Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#fdf8f7] to-white rounded-xl p-6 mt-6 border border-[#e9b2a9]/40 shadow-sm"
            >
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-[#fdf8f7] rounded-lg transition-colors duration-300 p-2 -m-2"
                onClick={() => setIsItemDetailsOpen(!isItemDetailsOpen)}
              >
                <h3 className="text-lg font-semibold bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent">Item Details</h3>
                <motion.div
                  animate={{ rotate: isItemDetailsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#d87c6a]"
                >
                  {isItemDetailsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ height: isItemDetailsOpen ? "auto" : 0, opacity: isItemDetailsOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  {/* Brand and Model */}
                  <div>
                    <h4 className="text-sm font-semibold text-amber-600 mb-2">Product Information</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700 text-xs">Brand Name</span>
                        <span className="text-gray-900 font-medium text-xs text-right">{torinoData.itemDetails.brandName}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700 text-xs">Model Name</span>
                        <span className="text-gray-900 font-medium text-xs text-right">{torinoData.itemDetails.modelName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Components */}
                  <div>
                    <h4 className="text-sm font-semibold text-amber-600 mb-2">Included Components</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {getCurrentComponents().map((component, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: isItemDetailsOpen ? 1 : 0, y: isItemDetailsOpen ? 0 : 10 }}
                          transition={{ duration: 0.3, delay: isItemDetailsOpen ? index * 0.05 : 0 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-xs">{component}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Manufacturer Details */}
                  <div>
                    <h4 className="text-sm font-semibold text-amber-600 mb-2">Manufacturer Details</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                        <span className="text-gray-700 text-xs">Company</span>
                        <span className="text-gray-900 font-medium text-xs text-right">{torinoData.itemDetails.manufacturerAddress.company}</span>
                      </div>
                      <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                        <span className="text-gray-700 text-xs">Address</span>
                        <span className="text-gray-900 font-medium text-xs text-right max-w-xs">{torinoData.itemDetails.manufacturerAddress.address}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700 text-xs">Phone</span>
                        <span className="text-gray-900 font-medium text-xs text-right">{torinoData.itemDetails.manufacturerAddress.phone}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700 text-xs">Email</span>
                        <span className="text-gray-900 font-medium text-xs text-right">{torinoData.itemDetails.manufacturerAddress.email}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-xs">Website</span>
                        <span className="text-gray-900 font-medium text-xs text-right">{torinoData.itemDetails.manufacturerAddress.website}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Creatives Section */}
        {torinoCreatives && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 px-4 sm:px-6"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent mb-6">
              Creative Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {torinoCreatives.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200 aspect-square"
                  onClick={() => openFullscreen(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl w-full h-full">
                    <img
                      src={img}
                      alt={`Creative ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-xl">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-gray-800" />
                    </div>
                  </div>
                  
                  {/* Index badge */}
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                    <span className="font-medium">{index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 px-6 sm:px-10 py-10 bg-gradient-to-br from-[#fdf8f7] to-white
                    rounded-2xl border border-[#e9b2a9]/40 shadow-lg relative overflow-hidden"
        >
          {/* Decorative Copper Glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#e49385]/20 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#d87c6a]/20 rounded-full blur-2xl -z-10" />

          {/* Heading */}
          <div className="flex items-center mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-3 rounded-full bg-gradient-to-tr from-[#e49385] to-[#d87c6a] shadow-md"
            >
              <Info className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="ml-3 text-3xl font-bold bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent">
              🌟 Overview
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-800 leading-relaxed text-lg sm:text-xl font-medium tracking-wide mb-6">
            Experience the perfect blend of <span className="text-[#d87c6a] font-semibold">powerful cooling 🌬️</span> 
            and <span className="text-[#e49385] font-semibold">sleek design ✨</span> with the 
            <span className="text-[#d87c6a] font-semibold"> Torino Series</span> by Anthem. This premium pedestal fan 
            combines advanced BLDC technology with elegant aesthetics to deliver 
            <span className="italic"> superior airflow</span> while <span className="italic">enhancing your interior decor</span>.
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Adjustable height and tilt for customized cooling 🎛️",
              "Energy-efficient BLDC motor technology ⚡",
              "Quiet operation with powerful airflow 🔇",
              "Remote control with LCD display 📱"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <span className="w-3 h-3 mt-2 rounded-full bg-gradient-to-br from-[#e49385] to-[#d87c6a]" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Design Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 px-4 sm:px-6 bg-white rounded-xl py-8 border border-[#e9b2a9]/40 shadow-sm"
        >
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent mb-6">
            Design Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card */}
            <div className="bg-gradient-to-br from-[#fdf8f7] to-white rounded-xl p-5 shadow-sm border border-[#e9b2a9]/40">
              <div className="flex items-start">
                <div className="bg-gradient-to-tr from-[#e49385] to-[#d87c6a] p-3 rounded-full mr-4 shadow-md">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#d87c6a] mb-2">Sleek Metallic Finish ✨</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🌟 Premium metallic construction</li>
                    <li>🎨 Available in Black and White variants</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fdf8f7] to-white rounded-xl p-5 shadow-sm border border-[#e9b2a9]/40">
              <div className="flex items-start">
                <div className="bg-gradient-to-tr from-[#e49385] to-[#d87c6a] p-3 rounded-full mr-4 shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#d87c6a] mb-2">Smart Energy Efficiency ⚡</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🌟 5-star rated BLDC motor</li>
                    <li>💡 Uses 65% less power than conventional fans</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fdf8f7] to-white rounded-xl p-5 shadow-sm border border-[#e9b2a9]/40">
              <div className="flex items-start">
                <div className="bg-gradient-to-tr from-[#e49385] to-[#d87c6a] p-3 rounded-full mr-4 shadow-md">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#d87c6a] mb-2">Ultra Silent Operation 🔇</h4>
                  <p className="text-gray-700">Whisper-quiet motor for peaceful environments 🌌</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fdf8f7] to-white rounded-xl p-5 shadow-sm border border-[#e9b2a9]/40">
              <div className="flex items-start">
                <div className="bg-gradient-to-tr from-[#e49385] to-[#d87c6a] p-3 rounded-full mr-4 shadow-md">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#d87c6a] mb-2">RF Remote Convenience 🎛️</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📡 6-speed RF remote with timer function</li>
                    <li>📍 Control from anywhere in the room</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fdf8f7] to-white rounded-xl p-5 shadow-sm border border-[#e9b2a9]/40 md:col-span-2">
              <div className="flex items-start">
                <div className="bg-gradient-to-tr from-[#e49385] to-[#d87c6a] p-3 rounded-full mr-4 shadow-md">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-[#d87c6a] mb-2">Adjustable Design 🛠️</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>📏 Height adjustable from 1.2m to 1.5m</li>
                    <li>🔄 85° oscillation for wide area coverage</li>
                    <li>📐 Tilt adjustment for directional airflow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Design Ethos */}
          <div className="bg-gradient-to-br from-[#fdf8f7] to-white p-6 rounded-xl mb-8 border border-[#e9b2a9]/40 shadow-md mt-8">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-tr from-[#e49385] to-[#d87c6a] shadow-md mr-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-semibold bg-gradient-to-r from-[#e49385] to-[#d87c6a] bg-clip-text text-transparent">Design Ethos</h4>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              Torino was designed for modern living spaces that value both <span className="text-[#d87c6a] font-semibold">functionality and aesthetics</span>. 
              Its sleek metallic finish and minimalist design complement contemporary interiors, while the advanced BLDC technology 
              delivers <span className="text-[#e49385] font-semibold">powerful, energy-efficient cooling</span>. Perfect for living rooms, bedrooms, offices, and studios.
            </p>
          </div>

          {/* Ideal Usage */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#fdf8f7] to-white p-6 rounded-xl border border-[#e9b2a9]/40 shadow-md">
              <div className="flex items-center mb-3">
                <span className="mr-3 text-xl">🏡</span>
                <h4 className="text-lg font-semibold text-[#d87c6a]">Living Spaces</h4>
              </div>
              <p className="text-gray-700">Perfect for living rooms and bedrooms with modern decor</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#fdf8f7] to-white p-6 rounded-xl border border-[#e9b2a9]/40 shadow-md">
              <div className="flex items-center mb-3">
                <span className="mr-3 text-xl">💼</span>
                <h4 className="text-lg font-semibold text-[#d87c6a]">Offices</h4>
              </div>
              <p className="text-gray-700">Ideal for workspaces requiring quiet, efficient cooling</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#fdf8f7] to-white p-6 rounded-xl border border-[#e9b2a9]/40 shadow-md">
              <div className="flex items-center mb-3">
                <span className="mr-3 text-xl">🎨</span>
                <h4 className="text-lg font-semibold text-[#d87c6a]">Studios</h4>
              </div>
              <p className="text-gray-700">Great for creative spaces where aesthetics matter</p>
            </div>
          </div>

          {/* Why Choose Torino */}
          <div className="bg-gradient-to-br from-[#e49385] to-[#d87c6a] p-6 rounded-xl border border-[#e9b2a9]/60 shadow-lg mt-6 text-white">
            <div className="flex items-center mb-3">
              <Heart className="w-6 h-6 text-white/90 mr-3" />
              <h4 className="text-2xl font-semibold">Why Choose Torino?</h4>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              Because you deserve a fan that combines <span className="font-semibold">powerful performance</span> with 
              <span className="font-semibold"> elegant design</span>. Torino isn't just about cooling — it's about 
              <span className="font-semibold"> enhancing your space</span> with a premium appliance that delivers 
              <span className="font-semibold"> efficiency, style, and comfort</span>.
            </p>
            <button
              className="bg-white text-[#d87c6a] py-3 px-6 rounded-xl font-semibold hover:bg-white/95 transition-all duration-300 flex items-center"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TorinoFan;