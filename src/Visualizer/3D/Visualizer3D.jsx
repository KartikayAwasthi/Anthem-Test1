import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Visualizer3D = () => {
  const [selectedFan, setSelectedFan] = useState("evaara");
  const [selectedColor, setSelectedColor] = useState("black");
  const [viewMode, setViewMode] = useState("perspective");
  const [showAnimation, setShowAnimation] = useState(false);

  const fans = [
    { id: "evaara", name: "Evaara" },
    { id: "inara", name: "Inara" },
    { id: "skyro", name: "Skyro" },
    { id: "lara", name: "Lara" },
  ];

  const colors = [
    { id: "black", name: "Black", hex: "#000000" },
    { id: "white", name: "White", hex: "#ffffff" },
    { id: "brown", name: "Brown", hex: "#8B4513" },
    { id: "blue", name: "Blue", hex: "#1E90FF" },
    { id: "purple", name: "Purple", hex: "#800080" },
    { id: "rose-gold", name: "Rose Gold", hex: "#B76E79" },
  ];

  const viewModes = [
    { id: "perspective", name: "Perspective" },
    { id: "topDown", name: "Top Down" },
    { id: "frontView", name: "Front View" },
    { id: "sideView", name: "Side View" },
    { id: "vrMode", name: "VR Mode" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            3D Room Visualizer
          </h1>
          <Link to="/" className="bg-[#ba6a5a] hover:bg-[#a35a4a] text-white px-4 py-2 rounded-md font-medium transition-colors">
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-xl border border-white/10 mb-12">
          <p className="text-lg text-center mb-8">
            Experience our fans in an immersive 3D environment. Visualize how they'll look and feel in your space.
          </p>
          
          {/* Control Panel */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Fan & Color Selection */}
            <div className="bg-black/40 rounded-lg p-4 border border-white/10">
              <h3 className="text-lg font-medium mb-3">Select Fan</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {fans.map((fan) => (
                  <button
                    key={fan.id}
                    onClick={() => setSelectedFan(fan.id)}
                    className={`py-2 px-3 rounded-md text-sm transition-colors ${
                      selectedFan === fan.id
                        ? "bg-[#ba6a5a] text-white"
                        : "bg-black/30 text-gray-300 hover:bg-black/50"
                    }`}
                  >
                    {fan.name}
                  </button>
                ))}
              </div>
              
              <h3 className="text-lg font-medium mb-3">Select Color</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      selectedColor === color.id ? "scale-110 ring-2 ring-[#ba6a5a]" : ""
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor === color.id && (
                      <span className={`text-xs ${color.id === 'white' ? 'text-black' : 'text-white'}`}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* View Mode Selection */}
            <div className="bg-black/40 rounded-lg p-4 border border-white/10">
              <h3 className="text-lg font-medium mb-3">View Mode</h3>
              <div className="grid grid-cols-2 gap-2">
                {viewModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setViewMode(mode.id)}
                    className={`py-2 px-3 rounded-md text-sm transition-colors ${
                      viewMode === mode.id
                        ? "bg-[#ba6a5a] text-white"
                        : "bg-black/30 text-gray-300 hover:bg-black/50"
                    }`}
                  >
                    {mode.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Animation Controls */}
            <div className="bg-black/40 rounded-lg p-4 border border-white/10">
              <h3 className="text-lg font-medium mb-3">Animation</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Fan Rotation</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={showAnimation} 
                      onChange={() => setShowAnimation(!showAnimation)} 
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ba6a5a]"></div>
                  </label>
                </div>
                
                <div className="pt-3 border-t border-white/10">
                  <span className="text-sm block mb-2">Fan Speed</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value="50" 
                    disabled={!showAnimation}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#ba6a5a]"
                  />
                </div>
                
                <button 
                  className={`mt-2 py-2 px-3 rounded-md text-sm ${
                    showAnimation
                      ? "bg-[#ba6a5a] text-white"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!showAnimation}
                >
                  Adjust Lighting
                </button>
              </div>
            </div>
          </div>
          
          {/* 3D Visualizer Interface */}
          <div className="aspect-video bg-black/40 rounded-lg border border-white/10 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-40"
                 style={{ backgroundImage: `url('/public/About/factory2.jpg')` }}>
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-center p-8">
              <div className="bg-black/70 p-6 rounded-xl max-w-2xl text-center mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  {selectedFan.charAt(0).toUpperCase() + selectedFan.slice(1)} Fan in {selectedColor.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </h3>
                <p className="text-gray-300 mb-6">
                  {viewMode === "vrMode" ? "VR mode active. Use your device to look around." : 
                   `Viewing from ${viewMode.replace(/([A-Z])/g, ' $1').toLowerCase()} angle.`}
                  {showAnimation && " Fan animation is active."}
                </p>
              </div>
              
              <div className={`w-48 h-48 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center relative ${showAnimation ? 'animate-spin' : ''}`} style={{animationDuration: '4s'}}>
                <div className="absolute inset-0 rounded-full" style={{backgroundColor: colors.find(c => c.id === selectedColor)?.hex, opacity: 0.7}}></div>
                <div className="z-10 w-8 h-8 rounded-full bg-gray-200"></div>
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute bg-gray-300" 
                    style={{
                      width: '8rem', 
                      height: '1.5rem', 
                      transformOrigin: 'center left',
                      transform: `rotate(${i * 90}deg)`,
                      left: '50%',
                      top: 'calc(50% - 0.75rem)',
                      borderRadius: '0.5rem'
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Controls Overlay */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>
              <button className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>
              <button className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                  <path d="M9 21H3v-6"></path>
                  <path d="M3 9l6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-black/30 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Immersive Features</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• Fully interactive 3D environment</li>
                <li>• Real-time lighting and shadows</li>
                <li>• Realistic fan movement simulation</li>
                <li>• 360° view of your space with the fan installed</li>
                <li>• AR capability for mobile devices</li>
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4">How To Use</h3>
              <ol className="space-y-3 text-gray-200">
                <li>1. Select a premade room or create your own layout</li>
                <li>2. Choose from our collection of premium fans</li>
                <li>3. Customize colors, materials, and finishes</li>
                <li>4. Position the fan and adjust height settings</li>
                <li>5. Turn on animation to see the fan in motion</li>
                <li>6. View from multiple angles or walk through in VR mode</li>
              </ol>
            </div>
          </div>
          
          <div className="mt-12 bg-[#ba6a5a]/20 rounded-lg p-6 border border-[#ba6a5a]/30">
            <h3 className="text-xl font-semibold mb-4 text-center">System Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Recommended</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Modern browser (Chrome, Firefox, Safari, Edge)</li>
                  <li>• Graphics card with WebGL support</li>
                  <li>• 8GB RAM or higher</li>
                  <li>• Desktop or laptop computer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Mobile</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• iOS 14+ or Android 10+</li>
                  <li>• AR capabilities for enhanced experience</li>
                  <li>• High-performance mobile devices recommended</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Visualizer3D;
