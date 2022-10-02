import React from "react";

export const GradText = ({ text, className }) => {
  return (
    <span
      className={`bg-clip-text bg-gradient-secondary font-bold block ${
        className || ""
      }`}
      style={{
        textFillColor: "transparent",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </span>
  );
};

export default GradText;
