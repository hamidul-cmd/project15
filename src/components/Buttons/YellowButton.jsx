import React from "react";
import { Link } from "react-router-dom";

function YellowButton({ text, path, icon, flex }) {
  return (
    <>
      <Link
        to={path}
        className={`py-3.5 px-5 rounded-full bg-yellow-50 flex justify-center items-center gap-1.5 text-sm font-semibold text-gray-15 3xl:py-4.8 3xl:px-7.5 3xl:gap-2.5 3xl:text-lg l-150 ${
          flex ? "w-1/2 xll:w-fit" : "w-fit"
        }`}
      >
        {icon && <span>{icon}</span>}
        <span>{text}</span>
      </Link>
    </>
  );
}

export default YellowButton;
