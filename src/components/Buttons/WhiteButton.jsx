import React from "react";
import { Link } from "react-router-dom";

function WhiteButton({ text, path, icon, flex }) {
  return (
    <>
      <Link to={path} className={`${flex?"w-1/2":"w-fit"} py-3.4 px-5 text-sm font-semibold text-gray-15 leading-150 border border-white-95 rounded-full text-center block`}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
      </Link>
    </>
  );
}

export default WhiteButton;
