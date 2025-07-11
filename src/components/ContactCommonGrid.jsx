import React from "react";

function ContactCommonGrid({ data }) {
  return (
    <>
      <div className="grid grid-cols-1 ll:grid-cols-3 p-6.9 border border-white-95 rounded-16 gap-5 xll:p-[39px] xll:gap-10 3xl:p-[49px] 3xl:gap-12.5 3xl:rounded-20">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className={`${
                i === 2
                  ? "pb-0"
                  : "pb-4.9 border-b border-white-95 ll:border-b-0 ll:border-r ll:pb-0 ll:pr-4.9 xll:pr-10 3xl:pr-12.5"
              } space-y-1.5 3xl:space-y-2.5`}
            >
              <h3 className="text-base font-semibold l-150 text-gray-15 xll:text-lg 3xl:text-xl">
                {item.title}
              </h3>
              <p className="text-sm l-150 text-gray-40 xll:text-base 3xl:text-lg">
                {item.discription}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ContactCommonGrid;
