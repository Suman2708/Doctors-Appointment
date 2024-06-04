import React, { useState } from 'react';
import Navbar from './navbar';

const HoverButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={` py-2 px-4 rounded-lg focus:outline-none ${
        isHovered ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.name}
    </button>
  );
};

export default HoverButton;
