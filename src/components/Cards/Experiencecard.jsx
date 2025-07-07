import React from "react";

function Experiencecard({ card, i }) {
  return (
    <>
      <div className="p-5.3 bg-white border border-white-95 rounded-xl flex gap-5 items-center xll:flex-col xll:items-start 3xl:rounded-16 3xl:p-6.9 3xl:gap-7.5">
        <div className="text-50 font-semibold leading-150 text-white-90 xll:text-60 xll:h-[43px] xll:leading-[43px] 3xl:text-58 3xl:leading-[58px] 3xl:h-[58px]">
          0{i + 1}
        </div>
        <div className="space-y-1 xll:space-y-1.5 3xl:space-y-2.5">
          <h3 className="text-base font-semibold l-150 text-gray-20 xll:text-lg 3xl:text-xl">
            {card.title}
          </h3>
          <p className="text-sm l-150 text-gray-40 3xl:text-lg">
            {card.discription}
          </p>
        </div>
      </div>
    </>
  );
}

export default Experiencecard;
