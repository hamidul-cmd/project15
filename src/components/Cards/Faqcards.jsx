import React from "react";

function Faqcards({ faq, ans, isOpen, toggleFaq }) {
  return (
    <>
      <div
        // ref={faqref}
        className={`p-5.3 3xl:rounded-xl bg-orange-95 rounded-14 border border-white-95 transition-all duration-150 ease-linear font-medium h-fit ${
          isOpen
            ? "bg-white-95 py-7.5 xll:p-7.5 3xl:p-10"
            : "bg-white-99 py-5 xll:p-6 3xl:p-7.5"
        }`}
      >
        <div
          onClick={toggleFaq}
          className={`flex justify-between items-center transition-all duration-150 ease-in cursor-pointer ${
            isOpen ? "pb-4.8" : "pb-0"
          }`}
        >
          <h3 className="text-base l-150 font-semibold text-gray-15 xll:text-lg 3xl:text-xl">
            {faq}
          </h3>
          <div className="bg-orange-97 h-8 flex justify-center items-center relative">
            <span className="block w-2.5 3xl:w-3.5 h-0.5 bg-gray-15"></span>
            <span
              className={`block w-2.5 3xl:w-3.5 h-0.5 bg-gray-15 absolute transition-all duration-150 ease-in ${
                isOpen ? "rotate-180" : "rotate-90 "
              }`}
            ></span>
          </div>
        </div>
        <div className={`overflow-hidden ${isOpen ? "h-fit" : "h-0"}`}>
          <p className="text-sm l-150 text-gray-20 font-medium 3xl:text-lg">
            {ans}
          </p>
        </div>
      </div>
    </>
  );
}

export default Faqcards;
