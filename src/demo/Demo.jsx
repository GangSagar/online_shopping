import React, { useState } from "react";

const HoverEffect = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="">
      <div className="h-[100vh] flex items-center justify-center">
        <div className="border-red-400 p-4 w-fit h-fit rounded-lg mx-auto">
          <textarea className="resize-none w-64 h-44 outline-none scrollbar-thin scrollbar-webkit" />
        </div>
      </div>

      <div
        className="group relative z-50 hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {/* Div 1 */}
        <div className="bg-blue-500 p-4 cursor-pointer hover:bg-blue-700 transition duration-300">
          Hover me (Div 1)
        </div>

        {/* Div 2 */}
        <div
          className={`${
            isHovered ? "block" : "hidden"
          } absolute top-full left-0 bg-green-500 p-4`}>
          I appear when Div 1 is hovered (Div 2)
        </div>
      </div>
    </div>
  );
};

export default HoverEffect;
