
import React, { useState } from "react";
import "./Toggle.css"; 

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive); 
  };

  return (
    <div
      className={`toggle-container ${isActive ? "active" : ""}`}
      onClick={handleToggle}
    >
      <div className="toggle-circle">
        <img
          src={isActive ? "/Group.png" : "/Isolation_Mode.png"}
          alt="Toggle Icon"
          className="toggle-image"
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
