"use client";

import { useState } from "react";

const FloatingIcons = ({
  icons,
}: {
  icons: { name: string; src: string }[];
}) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className="relative flex flex-wrap justify-start gap-1 w-full max-w-xl mx-auto z-50">
      {icons.map((icon, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIcon(icon.name)}
          onMouseLeave={() => setHoveredIcon(null)}
          className="relative w-11 h-11 flex items-center justify-center rounded-full border bg-black-100 border-gray-500 p-2 group transition-transform duration-200 hover:scale-110"
        >
          <img src={icon.src} alt={icon.name} className="w-8 h-8" />

          {/* Tooltip muncul saat hover */}
          <span
            className={`absolute bottom-14 text-xs bg-gray-900 text-white px-2 py-1 rounded-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
              hoveredIcon === icon.name ? "opacity-100" : ""
            }`}
          >
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
