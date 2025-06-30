import React from "react";
import { Link } from "react-router-dom";

function WhiteButton({ text, path, icon, flex }) {
  return (
    <>
      <Link
        to={path}
        className={`${
          flex ? "w-1/2 xll:w-fit" : "w-fit"
        } py-3.4 px-5 text-sm font-semibold text-gray-15 l-150 border border-white-95 rounded-full text-center block 3xl:py-4.7 3xl:px-[43px] 3xl:text-lg`}
      >
        {icon && <span>{icon}</span>}
        <span>{text}</span>
      </Link>
    </>
  );
}

export default WhiteButton;
