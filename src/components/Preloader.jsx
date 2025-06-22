// src/components/Preloader.js
import React from "react";
import "../App.css" // 🌀 Your GIF path

const Preloader = () => {
  return (
    <div className="preloader d-flex justify-content-center align-items-center">
      <img src="../../assets/img/Skateboarding.gif" alt="Loading..."  />
    </div>
  );
};

export default Preloader;
