"use client";
import React from "react";

// Styles
import "./style.scss";

const Button = ({ text, width = "263px", className, onClick }) => {
  return (
    <section className={`relative ${className}`} style={{ width: width }}>
      <img className="absolute" src="/images/btn-vector.png" alt="vector" />

      <img
        className="absolute bottom-0 rotate-[270deg]"
        src="/images/btn-vector.png"
        alt="vector"
      />
      <img
        className="absolute right-0 rotate-90"
        src="/images/btn-vector.png"
        alt="vector"
      />

      <img
        className="absolute right-0 bottom-0 rotate-180"
        src="/images/btn-vector.png"
        alt="vector"
      />

      <button onClick={() => onClick()} className="primary-btn mx-auto">{text}</button>
    </section>
  );
};

export default Button;
