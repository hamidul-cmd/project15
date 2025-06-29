import React from "react";

function CommonTitle({ capsule, title, pera }) {
  return (
    <>
      <div>
        <div className="space-y-2.5">
          <div className="space-y-1">
            <span className="block text-sm font-semibold text-gray-60 uppercase leading-[19px]">{capsule}</span>
            <h1 className="text-28 font-semibold text-gray-10 uppercase leading-[38px]">{title}</h1>
          </div>
          <p className="text-sm text-gray-40 leading-150">Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</p>
        </div>
      </div>
    </>
  );
}

export default CommonTitle;
