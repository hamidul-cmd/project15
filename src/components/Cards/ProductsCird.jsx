import React from "react";
import { Link } from "react-router-dom";

function ProductsCird({ data,isDragging  }) {
    const handleClick = (e) => {
        if (isDragging) {
          // Prevent link navigation if a drag just occurred
          e.preventDefault();
        }
      };
  return (
    <>
      <Link
        to="/productsdetails"
        onClick={handleClick}
        onDragStart={(e) => e.preventDefault()}
        className="w-[358px] ll:w-[320px] xll:w-[297px] 3xl:w-[376px] block select-none"
      >
        <div className="bg-white-97 rounded-16 mb-4 xll:mb-5 relative 3xl:mb-7.5">
          <img
            src={data.img}
            alt="productimg"
            width="377px"
            height="384px"
            draggable={false} 
            className="xll:h-[318px] 3xl:h-[384px] select-none"
          />
          <div className="p-4 bg-yellow-50 rounded-full w-fit absolute bottom-3 right-3 3xl:p-4.8">
            <svg
              className="h-5 w-5 3xl:h-6.6 3xl:w-6.6"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.42631 16.9079C6.25567 16.9079 6.93514 17.6018 6.93514 18.459C6.93514 19.3061 6.25567 20 5.42631 20C4.58697 20 3.9075 19.3061 3.9075 18.459C3.9075 17.6018 4.58697 16.9079 5.42631 16.9079ZM16.6676 16.9079C17.4969 16.9079 18.1764 17.6018 18.1764 18.459C18.1764 19.3061 17.4969 20 16.6676 20C15.8282 20 15.1487 19.3061 15.1487 18.459C15.1487 17.6018 15.8282 16.9079 16.6676 16.9079ZM0.880056 0.0087383L3.2632 0.375101C3.60293 0.437352 3.85274 0.722074 3.88272 1.06905L4.07257 3.35499C4.10254 3.68257 4.36234 3.92749 4.68209 3.92749H18.1766C18.7861 3.92749 19.1858 4.1418 19.5855 4.61123C19.9852 5.08067 20.0551 5.7542 19.9652 6.36549L19.0159 13.06C18.8361 14.3469 17.7569 15.2949 16.4879 15.2949H5.58639C4.25742 15.2949 3.15828 14.255 3.04837 12.908L2.12908 1.7834L0.620259 1.51807C0.22057 1.44664 -0.0592117 1.04864 0.0107338 0.640433C0.0806793 0.223045 0.470376 -0.0535127 0.880056 0.0087383ZM14.8891 7.70236H12.1213C11.7016 7.70236 11.3719 8.03912 11.3719 8.46774C11.3719 8.88615 11.7016 9.23312 12.1213 9.23312H14.8891C15.3088 9.23312 15.6386 8.88615 15.6386 8.46774C15.6386 8.03912 15.3088 7.70236 14.8891 7.70236Z"
                fill="#262626"
              />
            </svg>
          </div>
          <div className="absolute top-0 left-0 h-full w-full bg-transparent"></div>
        </div>
        <div className="space-y-0.5 3xl:space-y-1.5">
          <h4 className="text-base font-semibold l-150 text-gray-15 3xl:text-xl">
            {data.title}
          </h4>
          <h5 className="text-base font-medium l-150 text-gray-30 3xl:text-lg">
            {data.price}
          </h5>
        </div>
      </Link>
    </>
  );
}

export default ProductsCird;
