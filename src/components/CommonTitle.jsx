import React from "react";
import YellowButton from "./Buttons/YellowButton";

function CommonTitle({ capsule, title, pera, hero, buttonText, buttonPath }) {
  return (
    <>
      <div
        className={`${
          hero
            ? "mb-6 xll:mb-10 3xl:mb-12.5"
            : "mb-10 xll:mb-14.5 ll:mb-12.5 3xl:mb-20"
        } ${
          buttonText
            ? "space-y-5 ll:flex ll:justify-between ll:items-center ll:space-y-0"
            : ""
        }`}
      >
        <div
          className={`space-y-2.5 xll:space-y-5 3xl:space-y-6 ${
            hero ? "space-y-2.5 3xl:space-y-6" : "space-y-4 3xl:space-y-9"
          } ${
            hero ? "" : "max-w-[600px] xll:max-w-[975px] 3xl:max-w-[1088px]"
          }`}
        >
          <div className="space-y-1 xll:space-y-0 xll:flex">
            <span className="block text-sm font-semibold text-gray-60 uppercase leading-[19px] xll:order-2 text-nowrap 3xl:text-lg">
              {capsule}
            </span>
            <h1 className="text-28 font-semibold text-gray-10 uppercase leading-[38px] xll:text-38 xll:leading-[52px] 3xl:text-5xl 3xl:leading-[66px]">
              {title}
            </h1>
          </div>
          <p className="text-sm text-gray-40 l-150 xll:text-base 3xl:text-lg">
            {pera}
          </p>
        </div>
        {buttonText && <YellowButton text={buttonText} path={buttonPath} />}
      </div>
    </>
  );
}

export default CommonTitle;
