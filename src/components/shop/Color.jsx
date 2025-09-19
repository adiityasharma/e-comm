import React, { useState } from "react";


const Color = ({ colors }) => {
  const [selected, isSelected] = useState("");

  return (
    <div className="w-full flex gap-2">
      {colors.map((color) => (
        <div
          onClick={() => isSelected(color)}
          key={color}
          style={{
            border: `${selected === color ? `2px solid ${color}` : ""}`,
          }}
          className={`w-7 h-7 rounded-full cursor-pointer flex items-center justify-center`}
        >
          <div
            style={{ backgroundColor: color }}
            className="w-4 h-4 rounded-full"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Color;
