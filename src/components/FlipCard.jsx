import React, { useState, useRef } from "react";
import { useSupportsHover } from "./useSupportsHover";

const FlipCard = ({ header, description }) => {
  const supportsHover = useSupportsHover();
  const [isFlipped, setIsFlipped] = useState(false);
  const hoverTimeoutRef = useRef(null);

  // MOUSE ENTER (Desktop only)
  const handleMouseEnter = () => {
    if (!supportsHover) return;  // Skip if on mobile
    // Cancel any scheduled flip-back
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsFlipped(true);
  };

  // MOUSE LEAVE (Desktop only)
  const handleMouseLeave = () => {
    if (!supportsHover) return;  // Skip if on mobile
    // Flip back after 0.5s
    hoverTimeoutRef.current = setTimeout(() => {
      setIsFlipped(false);
      hoverTimeoutRef.current = null;
    }, 500);
  };

  // TAP or CLICK (Mobile toggles, Desktop basically ignored)
  const handleClick = () => {
    if (!supportsHover) {
      // On mobile, toggle on each tap
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="relative w-full h-64 cursor-pointer select-none"
      style={{ perspective: "1200px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 transform"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center overflow-hidden w-full h-full"
          style={{ backfaceVisibility: "hidden", position: "relative" }}
        >
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            {header}
          </h3>
          <div
            className="absolute top-0 right-0 w-10 h-10 bg-gray-200"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%)",
              transform: "translate(5px, -5px)",
            }}
          ></div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center w-full h-full"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
