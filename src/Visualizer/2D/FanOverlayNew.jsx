import React, { useState, useEffect } from 'react';
import './FanOverlayNew.css';

const FanOverlay = () => {
  const [selectedFan, setSelectedFan] = useState('Evaara');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [roomImage, setRoomImage] = useState('/2D/room1.jpg');
  const [isMobile, setIsMobile] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Detect mobile devices and handle responsive layout
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      
      // Update room image based on mobile status
      const rooms = getRooms();
      const currentRoom = rooms.find(room => 
        roomImage.includes(room.id)
      );
      
      if (currentRoom) {
        // Set room image based on device type
        const newRoomImage = newIsMobile ? currentRoom.mobileSrc : currentRoom.desktopSrc;
        
        // Only update if different to avoid unnecessary re-renders
        if (newRoomImage !== roomImage) {
          setRoomImage(newRoomImage);
          // Reset loading state when changing rooms
          setLoading(true);
        }
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [roomImage]);

  // Preload images for smoother experience
  useEffect(() => {
    const fanImage = new Image();
    fanImage.src = `/fan 3d/${selectedFan}/${selectedColor}/1.webp`;
    
    // Once the fan image loads, set loading to false
    fanImage.onload = () => {
      // Short timeout to ensure CSS transitions work properly
      setTimeout(() => setLoading(false), 100);
    };
    
    return () => {
      fanImage.onload = null;
    };
  }, [selectedFan, selectedColor, roomImage]);

  // Update room image when mobile state changes
  useEffect(() => {
    // Find which room type we're currently showing
    const allRooms = getRooms();
    const currentRoom = allRooms.find(room => 
      roomImage.includes(room.id)
    );
    
    if (currentRoom) {
      // Set the appropriate image based on device type
      setRoomImage(isMobile ? currentRoom.mobileSrc : currentRoom.desktopSrc);
    }
  }, [isMobile]);

  // Fan model configuration data
  const fanModels = [
    { id: 'Evaara', name: 'Evaara', colors: ['Black', 'brown-1', 'Brown-2', 'Brown-3', 'brown-4', 'cream'] },
    { id: 'Inaara', name: 'Inaara', colors: ['Black', 'Blue', 'brown', 'pearl-white', 'purple', 'rose-gold', 'white', 'yellow'] },
    { id: 'Skyro', name: 'Skyro', colors: ['Black', 'blue', 'Brown', 'l', 'light brown', 'purple', 'rose-gold', 'white-gold', 'white-silver', 'yellow'] },
    { id: 'lara', name: 'Lara', colors: ['brown'] }
  ];

  // Define room data structure
  const getRooms = () => [
    { 
      id: 'room1', 
      name: 'Living Room', 
      desktopSrc: '/2D/room1.jpg',
      mobileSrc: '/2D/room1-mobile.jpg'
    },
    { 
      id: 'room2', 
      name: 'Bedroom', 
      desktopSrc: '/2D/room2.jpg',
      mobileSrc: '/2D/room2-mobile.jpg'
    }
  ];
  
  // Room data for selection
  const rooms = getRooms().map(room => ({
    ...room,
    src: isMobile ? room.mobileSrc : room.desktopSrc
  }));

  // Handlers for user interactions
  const handleFanModelChange = (model) => {
    setLoading(true);
    setSelectedFan(model);
    const modelObj = fanModels.find(m => m.id === model);
    // Set first color when changing model
    setSelectedColor(modelObj?.colors[0] || '');
  };

  const handleColorChange = (color) => {
    setLoading(true);
    setSelectedColor(color);
  };

  const handleRoomChange = (roomId) => {
    const allRooms = getRooms();
    const room = allRooms.find(r => r.id === roomId);
    if (room) {
      setRoomImage(isMobile ? room.mobileSrc : room.desktopSrc);
    }
  };

  const toggleControls = () => {
    setControlsOpen(!controlsOpen);
  };

  const toggleRoom = () => {
    const allRooms = getRooms();
    // Find which room we're currently showing
    const currentRoom = allRooms.find(room => 
      roomImage.includes(room.id)
    );
    
    // Get the index of the current room
    const currentIndex = currentRoom ? allRooms.indexOf(currentRoom) : 0;
    
    // Calculate the next room index
    const nextIndex = (currentIndex + 1) % allRooms.length;
    
    // Set the room image based on device type
    setRoomImage(isMobile ? allRooms[nextIndex].mobileSrc : allRooms[nextIndex].desktopSrc);
  };

  // Format display names for better presentation
  const formatDisplayName = (name) => {
    return name
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Get current room name
  const getCurrentRoomName = () => {
    return roomImage.includes('room1') ? 'Living Room' : 'Bedroom';
  };

  return (
    <div className="fan-overlay-container">
      {/* Bottom overlay controls panel */}
      <div className={`modern-controls ${controlsOpen ? 'open' : ''}`}>
        <div className="controls-header">
          {/* Add pull handle for better usability */}
          <div className="pull-handle">
            <div className="handle-bar"></div>
          </div>
          <h2>Customize Your Fan</h2>
          <button className="close-btn" onClick={toggleControls} aria-label="Close">×</button>
        </div>
        
        {/* Fan Model Selection */}
        <div className="controls-section">
          <h3>Select Fan Model</h3>
          <div className="model-selector">
            {fanModels.map(model => (
              <button
                key={model.id}
                onClick={() => handleFanModelChange(model.id)}
                className={selectedFan === model.id ? 'active' : ''}
                aria-pressed={selectedFan === model.id}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Color Selection */}
        <div className="controls-section">
          <h3>Choose Color</h3>
          <div className="color-selector">
            {fanModels.find(model => model.id === selectedFan)?.colors.map(color => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className={selectedColor === color ? 'active' : ''}
                aria-pressed={selectedColor === color}
              >
                {formatDisplayName(color)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Room Environment Selection */}
        <div className="controls-section">
          <h3>Room Environment</h3>
          <div className="room-selector">
            {getRooms().map(room => {
              const isActive = roomImage.includes(room.id);
              return (
                <button 
                  key={room.id}
                  onClick={() => handleRoomChange(room.id)} 
                  className={isActive ? 'active' : ''}
                  aria-pressed={isActive}
                >
                  {room.name}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Current selection summary */}
        <div className="controls-section selection-summary">
          <h3>Your Selection</h3>
          <div className="selection-details">
            <div className="selection-item">
              <span className="item-label">Model:</span>
              <span className="item-value">{selectedFan}</span>
            </div>
            <div className="selection-item">
              <span className="item-label">Color:</span>
              <span className="item-value">{formatDisplayName(selectedColor)}</span>
            </div>
            <div className="selection-item">
              <span className="item-label">Room:</span>
              <span className="item-value">{getCurrentRoomName()}</span>
            </div>
          </div>
        </div>
        
        {/* Controls footer with action button */}
        <div className="controls-footer">
          <button 
            className="action-button" 
            onClick={() => alert(`Request quote for ${selectedFan} in ${formatDisplayName(selectedColor)}`)}
          >
            Request Quote
          </button>
          <div className="footer-info">
            <span>Visualizer v2.0</span>
            <span>Anthem Fans</span>
          </div>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="floating-actions">
        <button className="fab" onClick={toggleRoom} title="Switch Room" aria-label="Switch Room">
          <span className="fab-icon">🏠</span>
        </button>
        <button className="fab primary" onClick={toggleControls} title="Customize Fan" aria-label="Customize Fan">
          <span className="fab-icon">⚙️</span>
        </button>
      </div>

      {/* Room visualization area */}
      <div className="room-wrapper">
        <img 
          src={roomImage} 
          alt="Room" 
          className="room-full"
        />
        {/* Fan image overlay with high quality rendering */}
        {!loading && (
          <img 
            src={`/fan 3d/${selectedFan}/${selectedColor}/1.webp`}
            alt={`${selectedFan} fan in ${selectedColor}`} 
            className="fan-image"
            style={{
              position: 'absolute',
              left: '50%',
              top: isMobile ? '40%' : '30%', /* Positioned higher to make room for bottom panel */
              transform: `translate(-50%, -50%) perspective(${isMobile ? '800px' : '1200px'}) 
                          rotateX(${isMobile ? '15deg' : '20deg'})`,
              maxWidth: isMobile ? '60%' : '40%',
              opacity: loading ? 0 : 1
            }}
          />
        )}
      </div>
      
      {/* Selection info display */}
      <div className="selection-info">
        <div className="info-content">
          <div className="model-name">{selectedFan}</div>
          <div className="color-name">{formatDisplayName(selectedColor)}</div>
        </div>
      </div>
      
      {/* Bottom customizer toggle bar - visible when panel is closed */}
      <div 
        className={`bottom-toggle-bar ${controlsOpen ? 'hidden' : ''}`}
        onClick={toggleControls}
      >
        <div className="toggle-bar-handle"></div>
        <span>Customize Fan</span>
      </div>
    </div>
  );
};

export default FanOverlay;
