import React from "react";

function CommonTitle({ capsule, title, pera, hero }) {
  return (
    <>
      <div>
        <div
          className={`space-y-2.5 xll:space-y-5 3xl:space-y-6 ${
            hero ? "space-y-2.5 3xl:space-y-6" : "space-y-4 3xl:space-y-9"
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
      </div>
    </>
  );
}

export default CommonTitle;
