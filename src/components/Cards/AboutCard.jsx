import React from "react";

function AboutCard({ item }) {
  return (
    <>
      <div
        key={item.id}
        className="p-5.3 bg-white border border-white-95 rounded-16 space-y-4 xll:p-6.9 xll:space-y-5 3xl:p-[39px] 3xl:space-y-6 3xl:rounded-20"
      >
        <div className="flex gap-2 items-center xll:gap-2.5 3xl:gap-4">
          <div className="p-3 rounded-full bg-yellow-50 xll:p-3.5 3xl:p-4">
            {item.icon}
          </div>
          <h3 className="text-base font-semibold l-150 text-gray-15 xll:text-lg 3xl:text-xl">{item.title}</h3>
        </div>
        <p className="text-sm l-150 text-gray-40 3xl:text-base">{item.pera}</p>
      </div>
    </>
  );
}

export default AboutCard;
