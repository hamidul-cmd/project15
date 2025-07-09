import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PruductsData } from "../Data/PruductsData";
import CommonTitle from "../components/CommonTitle";
import Testimonialssection from "../components/Testimonialssection";
import Faq from "../components/commonsection/Faq";

function ProductsDetails() {
  const { id } = useParams();
  const product = PruductsData.find((p) => p.id.toString() === id);

  // Guard clause: show "not found" if product is undefined
  if (!product)
    return <p className="text-center py-10 text-xl">Product not found.</p>;

  // Safe to access now
  const images = product.sliderimg;
  const testimonials = product.testimonials;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <>
      <section className="px-4 pt-10 xll:px-20 xll:pt-20 3xl:px-36.6 3xl:pt-20 grid grid-cols-1 gap-10 ll:grid-cols-2 xll:gap-10 3xl:gap-12.5">
        <div className="relative bg-white-97 rounded-16 overflow-hidden flex items-center justify-center">
          <img
            src={selectedImage}
            alt="products img"
            className="w-[358px] h-[347px] m-auto xll:w-[560px] xll:h-[565px] 3xl:w-[713px] 3xl:h-[700px]"
          />
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-3 p-1.9 bg-white border border-white-95 rounded-lg w-fit ll2:left-5 ll2:translate-x-0 ll2:bottom-1/2 ll2:translate-y-1/2 ll2:flex-col">
            {images.map((img, i) => {
              return (
                <div
                  onClick={() => setSelectedImage(img)}
                  className="w-[70px] h-12.5 bg-white-97 rounded 3xl:w-[87px] 3xl:h-[72px] cursor-pointer"
                  key={i}
                >
                  <img
                    src={img}
                    alt="selact img"
                    className="h-full w-full object-cover object-top block"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-4 3xl:space-y-5">
          <div className="space-y-6 ll2:space-y-0 ll2:flex ll2:justify-between ll2:items-start">
            <div className="flex justify-between items-end ll2:flex-col ll2:items-start ll2:gap-2.5 3xl:gap-3.5">
              <div className="space-y-1 3xl:space-y-1.5">
                <p className="flex gap-1.5 items-center 3xl:gap-2.5">
                  <span className="text-sm l-150 text-gray-40 xll:text-base 3xl:text-lg">
                    {product.gender}
                  </span>
                  <span className="text-12 font-medium l-150 text-gray-15 py-0.5 px-2 bg-yellow-70 rounded-full xll:text-sm xll:px-2.5 3xl:px-3">
                    {product.stock} Left!
                  </span>
                </p>
                <h3 className="text-lg font-semibold l-150 text-gray-15 xll:text-xl">
                  {product.title}
                </h3>
              </div>
              <div className="text-22 font-bold l-150 text-gray-15 xll:text-2xl 3xl:text-3xl">
                {product.price}
              </div>
            </div>
            <div className="flex justify-center gap-5 items-center">
              <button className="py-3.5 px-5 border border-white-95 flex items-center gap-2 rounded-full text-sm font-medium l-150 bg-gray-15 text-white 3xl:px-6 3xl:py-4.8 3xl:gap-2.5 3xl:text-lg cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.50049 6V6.75H5.51336C4.55381 6.75 3.74911 7.47444 3.64866 8.42872L2.3855 20.4287C2.26897 21.5358 3.13701 22.5 4.2502 22.5H19.7509C20.8641 22.5 21.7322 21.5358 21.6156 20.4287L20.3525 8.42872C20.252 7.47444 19.4473 6.75 18.4878 6.75H16.5005V6C16.5005 3.51472 14.4858 1.5 12.0005 1.5C9.51521 1.5 7.50049 3.51472 7.50049 6ZM12.0005 3C10.3436 3 9.00049 4.34315 9.00049 6V6.75H15.0005V6C15.0005 4.34315 13.6573 3 12.0005 3ZM9.00049 11.25C9.00049 12.9069 10.3436 14.25 12.0005 14.25C13.6573 14.25 15.0005 12.9069 15.0005 11.25V10.5C15.0005 10.0858 15.3363 9.75 15.7505 9.75C16.1647 9.75 16.5005 10.0858 16.5005 10.5V11.25C16.5005 13.7353 14.4858 15.75 12.0005 15.75C9.51521 15.75 7.50049 13.7353 7.50049 11.25V10.5C7.50049 10.0858 7.83628 9.75 8.25049 9.75C8.6647 9.75 9.00049 10.0858 9.00049 10.5V11.25Z"
                    fill="white"
                  />
                </svg>
                <span>Buy Now</span>
              </button>
              <button className="py-3.5 px-5 border border-white-95 flex items-center gap-2 rounded-full text-sm font-medium l-150 bg-gray-15 text-white 3xl:px-6 3xl:py-4.8 3xl:gap-2.5 3xl:text-lg cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.875 1.875C1.52982 1.875 1.25 2.15482 1.25 2.5C1.25 2.84518 1.52982 3.125 1.875 3.125H3.02974C3.17132 3.125 3.29521 3.22019 3.33169 3.35698L5.46313 11.3499C4.11815 11.6988 3.125 12.9209 3.125 14.375C3.125 14.7202 3.40482 15 3.75 15H16.875C17.2202 15 17.5 14.7202 17.5 14.375C17.5 14.0298 17.2202 13.75 16.875 13.75H4.48169C4.73909 13.0218 5.43361 12.5 6.25 12.5H15.5985C15.8376 12.5 16.0557 12.3637 16.1604 12.1488C17.1064 10.2075 17.9319 8.19669 18.6273 6.12605C18.6826 5.96131 18.6668 5.78097 18.5837 5.62833C18.5007 5.47569 18.3578 5.36452 18.1894 5.32152C14.1712 4.29535 9.96135 3.75 5.625 3.75C5.32681 3.75 5.02921 3.75258 4.73223 3.75772L4.53948 3.0349C4.35708 2.35091 3.73762 1.875 3.02974 1.875H1.875Z"
                    fill="white"
                  />
                  <path
                    d="M3.125 16.875C3.125 16.1846 3.68464 15.625 4.375 15.625C5.06536 15.625 5.625 16.1846 5.625 16.875C5.625 17.5654 5.06536 18.125 4.375 18.125C3.68464 18.125 3.125 17.5654 3.125 16.875Z"
                    fill="white"
                  />
                  <path
                    d="M13.75 16.875C13.75 16.1846 14.3096 15.625 15 15.625C15.6904 15.625 16.25 16.1846 16.25 16.875C16.25 17.5654 15.6904 18.125 15 18.125C14.3096 18.125 13.75 17.5654 13.75 16.875Z"
                    fill="white"
                  />
                </svg>
                <span>Add To cart</span>
              </button>
            </div>
          </div>
          <div className="space-y-2.5 p-4.9 border border-white-95 rounded-14 grid grid-cols-2 gap-2.5 xll:p-6 xll:gap-4 3xl:p-7.5 3xl:gap-5">
            <div className="space-y-1 3xl:space-y-1.5">
              <h3 className="text-sm font-medium l-150 text-gray-15 xll:text-base 3xl:text-lg">
                Material
              </h3>
              <p className="text-sm l-150 text-gray-40 xll:text-base 3xl:text-lg">
                {product.material}
              </p>
            </div>
            <div className="space-y-1 3xl:space-y-1.5">
              <h3 className="text-sm font-medium l-150 text-gray-15 xll:text-base 3xl:text-lg">
                Fit
              </h3>
              <p className="text-sm l-150 text-gray-40 xll:text-base 3xl:text-lg">
                {product.fit}
              </p>
            </div>
            <div className="space-y-1 3xl:space-y-1.5">
              <h3 className="text-sm font-medium l-150 text-gray-15 xll:text-base 3xl:text-lg">
                Color
              </h3>
              <div className="flex py-[5px] px-2 border border-white-95 rounded-full gap-1 w-fit 3xl:py-2 3xl:px-2.5">
                {product.colors.map((color, i) => {
                  const isSeleColor = selectedColor === color;
                  return (
                    <div
                      key={i}
                      className="h-5 w-5 rounded-full 3xl:h-6 3xl:w-6 cursor-pointer relative"
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    >
                      <svg
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                          isSeleColor ? "block" : "hidden"
                        }`}
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6.55556L5.8 11L13 1"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-1 3xl:space-y-1.5">
              <h3 className="text-sm font-medium l-150 text-gray-15 xll:text-base 3xl:text-lg">
                Size
              </h3>
              <div className="flex gap-1.5">
                {product.size.map((size, i) => {
                  const isSelected = selectedSize === size;
                  return (
                    <div
                      key={i}
                      onClick={() => setSelectedSize(size)}
                      className={`h-[33px] w-[33px] cursor-pointer flex justify-center items-center border border-white-95 rounded text-sm l-150 3xl:w-12 3xl:h-10 3xl:text-lg  ${
                        isSelected
                          ? "bg-gray-15 text-white"
                          : "bg-white-97 text-gray-15"
                      }`}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p-4.9 border border-white-95 rounded-14 space-y-4 xll:p-6 3xl:p-7.5 3xl:space-y-5">
            <h3 className="text-base l-150 font-medium text-gray-15 xll:text-lg">
              Shipping Information
            </h3>
            <div className="space-y-2 xll:space-y-2.5 3xl:space-y-3.5">
              {product.shippinginfo.map((info, i) => {
                return (
                  <p
                    key={i}
                    className="text-sm l-150 text-gray-40 flex gap-2 items-center xll:text-base 3xl:text-lg 3xl:gap-2.5"
                  >
                    <svg
                      className="h-2 w-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                    </svg>
                    <span>{info}</span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="p-4.9 border border-white-95 rounded-14 space-y-4 xll:p-6 3xl:p-7.5 3xl:space-y-5">
            <h3 className="text-base l-150 font-medium text-gray-15 xll:text-lg">
              Features
            </h3>
            <div className="space-y-2 xll:space-y-2.5 3xl:space-y-3.5">
              {product.features.map((feature, i) => {
                return (
                  <p
                    key={i}
                    className="text-sm l-150 text-gray-40 flex gap-2 items-center xll:text-base 3xl:text-lg 3xl:gap-2.5"
                  >
                    <svg
                      className="h-2 w-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                    </svg>
                    {feature}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <CommonTitle
          capsule="Product Reviews"
          title="Reviews"
          pera="At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion."
        />
        <Testimonialssection TestimonialsCardData={testimonials} />
      </section>
      <Faq />
    </>
  );
}

export default ProductsDetails;
