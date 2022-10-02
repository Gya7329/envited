import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const GoBack = ({ to }) => {
  const navigate = useNavigate();
  return (
    <span
      onClick={() => navigate(to)}
      className="flex items-center mt-3 ml-3 cursor-pointer"
    >
      <BsArrowLeft fontSize={24} fontWeight={700} />
    </span>
  );
};
