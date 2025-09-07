import React, { useState, useEffect } from 'react';
import './FanOverlay.css';

const FanOverlay = () => {
  const [selectedFan, setSelectedFan] = useState('Evaara');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [roomImage, setRoomImage] = useState('/2D/room1.jpg');
  const [isMobile, setIsMobile] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fanModels = [
    { id: 'Evaara', name: 'Evaara', colors: ['Black', 'brown-1', 'Brown-2', 'Brown-3', 'brown-4', 'cream'] },
    { id: 'Inaara', name: 'Inaara', colors: ['Black', 'Blue', 'Brown', 'pearl-white', 'purple', 'rose-gold', 'white', 'yellow'] },
    { id: 'Skyro', name: 'Skyro', colors: ['Black', 'blue', 'Brown', 'l', 'light brown', 'purple', 'rose-gold', 'white-gold', 'white-silver', 'yellow'] },
    { id: 'lara', name: 'Lara', colors: ['brown'] }
  ];

  const handleFanModelChange = (model) => {
    setSelectedFan(model);
    const modelObj = fanModels.find(m => m.id === model);
    setSelectedColor(modelObj?.colors[0] || '');
    // Close controls after selection on mobile
    if (isMobile) {
      setControlsOpen(false);
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    // Close controls after selection on mobile
    if (isMobile) {
      setControlsOpen(false);
    }
  };

  const toggleControls = () => {
    setControlsOpen(!controlsOpen);
  };

  const toggleRoom = () => {
    setRoomImage(roomImage === '/2D/room1.jpg' ? '/2D/room2.jpg' : '/2D/room1.jpg');
  };

  return (
    <div className="fan-overlay-container">
      {/* Modern floating control bar */}
      <div className={`modern-controls ${controlsOpen ? 'open' : ''}`}>
        <div className="controls-header">
          <h2>Visualizer Controls</h2>
          <button className="close-btn" onClick={toggleControls}>&times;</button>
        </div>
        
        <div className="controls-section">
          <h3>Fan Models</h3>
          <div className="model-selector">
            {fanModels.map(model => (
              <button
                key={model.id}
                onClick={() => handleFanModelChange(model.id)}
                className={selectedFan === model.id ? 'active' : ''}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="controls-section">
          <h3>Color Options</h3>
          <div className="color-selector">
            {fanModels.find(model => model.id === selectedFan)?.colors.map(color => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className={selectedColor === color ? 'active' : ''}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        
        <div className="controls-section">
          <h3>Room</h3>
          <div className="room-selector">
            <button 
              onClick={() => setRoomImage('/2D/room1.jpg')} 
              className={roomImage === '/2D/room1.jpg' ? 'active' : ''}
            >
              Living Room
            </button>
            <button 
              onClick={() => setRoomImage('/2D/room2.jpg')} 
              className={roomImage === '/2D/room2.jpg' ? 'active' : ''}
            >
              Bedroom
            </button>
          </div>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="floating-actions">
        <button className="fab" onClick={toggleRoom} title="Switch Room">
          <span className="fab-icon">🏠</span>
        </button>
        <button className="fab primary" onClick={toggleControls} title="Customize Fan">
          <span className="fab-icon">⚙️</span>
        </button>
      </div>

      {/* Room with Fan */}
      <div className="room-wrapper">
        <img 
          src={roomImage} 
          alt="Room" 
          className="room-full"
        />
        {/* Fan overlay */}
        <img 
          src={`/fan 3d/${selectedFan}/${selectedColor}/1.png`}
          alt="Fan" 
          className="fan-image"
          style={{
            position: 'absolute',
            left: '50%', // Always centered horizontally
            top: '15%', // Fixed position at top/ceiling
            transform: 'translate(-50%, -50%) perspective(1200px) rotateX(15deg)', // Refined tilt angle for realism
            maxWidth: isMobile ? '50%' : '40%', // Larger size for better details
            zIndex: 5,
            filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.4))', // Enhanced shadow
            transformOrigin: 'center center',
            imageRendering: 'auto', // Let browser decide best rendering
            objectFit: 'contain',
            width: 'auto',
            height: 'auto'
          }}
        />
      </div>
      
      {/* Selection info display */}
      <div className="selection-info">
        <div className="info-content">
          <div className="model-name">{selectedFan}</div>
          <div className="color-name">{selectedColor}</div>
        </div>
      </div>
    </div>
  );
};

export default FanOverlay;