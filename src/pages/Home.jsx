import React, { useLayoutEffect, useRef } from "react";
import CommonTitle from "../components/CommonTitle";
import YellowButton from "../components/Buttons/YellowButton";
import WhiteButton from "../components/Buttons/WhiteButton";
import heroimgsm from "../assets/heroimgsm.png";
import heroimgmd from "../assets/heroimgmd.png";
import heroimglg from "../assets/heroimglg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dis1 from "../assets/dis1.png";
import dis2 from "../assets/dis2.png";
import dis3 from "../assets/dis3.png";
import dis4 from "../assets/dis4.png";
import CommonSlider from "../components/Sliders/CommonSlider";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroCounter = [
    {
      id: 1,
      title: "Over 1000+",
      pera: "Trendsetting Styles",
    },
    {
      id: 2,
      title: "99%",
      pera: "Customer Satisfaction Rate",
    },
    {
      id: 3,
      title: "24/7",
      pera: "Shopping Convenience",
    },
    {
      id: 4,
      title: "30-Day",
      pera: "Hassle-Free Returns",
    },
  ];
  const herosizeBox = [
    {
      title: "Sizes",
      sizes: ["S", "m", "L", "XL"],
    },
  ];
  const herocoloerBox = [
    {
      title: "Color",
      colors: ["#739CDA", "#DAA573", "#DAD673"],
    },
  ];
  const HeroLeftRef = useRef(null);
  const HeroRightRef = useRef(null);
  const herocapsuleref = useRef(null);
  const herocapsuleref2 = useRef(null);
  const herocapsuleref3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth < 780) {
        gsap.from(HeroLeftRef.current, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: HeroLeftRef.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
        });
        gsap.from(HeroRightRef.current, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: HeroRightRef.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
        });
      } else {
        gsap.from(HeroLeftRef.current, {
          x: -200,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: HeroLeftRef.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
        });
        gsap.from(HeroRightRef.current, {
          x: 200,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: HeroRightRef.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
        });
        gsap.from(herocapsuleref.current, {
          scale: 0,
          opacity: 0,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: herocapsuleref.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
          // Add delay to wait for HeroRightRef animation to complete
          delay: 1.5, // Match duration of HeroRightRef animation
        });
        gsap.from(herocapsuleref2.current, {
          scale: 0,
          opacity: 0,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: herocapsuleref2.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
          // Add delay to wait for HeroRightRef animation to complete
          delay: 1.5, // Match duration of HeroRightRef animation
        });
        gsap.from(herocapsuleref3.current, {
          scale: 0,
          opacity: 0,
          ease: "power4.out",
          stagger: 0.2,
          delay: 1.5,
          scrollTrigger: {
            trigger: herocapsuleref3.current,
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);
  const DiscoverCirdData = [
    {
      id: 1,
      title: "Classic Denim Jeans",
      price: "$49.99",
      img: dis1,
    },
    {
      id: 2,
      title: "Cozy Comfort Hoodie",
      price: "$39.99",
      img: dis2,
    },
    {
      id: 3,
      title: "Classic Polo Shirt",
      price: "$29.99",
      img: dis3,
    },
    {
      id: 4,
      title: "Chino Pants",
      price: "$44.99",
      img: dis4,
    },
    {
      id: 5,
      title: "Classic Denim Jeans",
      price: "$49.99",
      img: dis1,
    },
    {
      id: 6,
      title: "Cozy Comfort Hoodie",
      price: "$39.99",
      img: dis2,
    },
    {
      id: 7,
      title: "Classic Polo Shirt",
      price: "$29.99",
      img: dis3,
    },
    {
      id: 8,
      title: "Chino Pants",
      price: "$44.99",
      img: dis4,
    },
    {
      id: 5,
      title: "Classic Denim Jeans",
      price: "$49.99",
      img: dis1,
    },
    {
      id: 6,
      title: "Cozy Comfort Hoodie",
      price: "$39.99",
      img: dis2,
    },
    {
      id: 7,
      title: "Classic Polo Shirt",
      price: "$29.99",
      img: dis3,
    },
    {
      id: 8,
      title: "Chino Pants",
      price: "$44.99",
      img: dis4,
    },
  ];
  return (
    <>
      <section className="pt-10 px-4 space-y-10 ll:px-10 xll:pt-20 xll:px-20 ll:flex ll:gap-10 xll:gap-14.5 xll:space-y-0 xll:items-center 3xl:pt-14.5 3xl:px-36.6 3xl:gap-20 overflow-x-hidden">
        <div ref={HeroLeftRef} className="space-y-6 xll:space-y-0">
          <CommonTitle
            capsule="Style Redefined."
            title="Elevate Your Style with Klothink"
            pera="Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions."
            hero={true}
          />
          <div className="flex gap-2 items-center grow xll:mt-10 xll:mb-14.5 3xl:mt-12.5 3xl:mb-20">
            <YellowButton
              text="Shop Now"
              path="/products"
              flex={true}
              icon={
                <svg
                  className="w-5 h-5 3xl:h-6 3xl:w-6"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.99976 5.5V6.125H5.34382C4.54419 6.125 3.87361 6.7287 3.7899 7.52393L2.73727 17.5239C2.64016 18.4465 3.36352 19.25 4.29118 19.25H17.2085C18.1361 19.25 18.8595 18.4465 18.7624 17.5239L17.7097 7.52393C17.626 6.7287 16.9554 6.125 16.1558 6.125H14.4998V5.5C14.4998 3.42893 12.8208 1.75 10.7498 1.75C8.67869 1.75 6.99976 3.42893 6.99976 5.5ZM10.7498 3C9.36905 3 8.24976 4.11929 8.24976 5.5V6.125H13.2498V5.5C13.2498 4.11929 12.1305 3 10.7498 3ZM8.24976 9.875C8.24976 11.2557 9.36905 12.375 10.7498 12.375C12.1305 12.375 13.2498 11.2557 13.2498 9.875V9.25C13.2498 8.90482 13.5296 8.625 13.8748 8.625C14.2199 8.625 14.4998 8.90482 14.4998 9.25V9.875C14.4998 11.9461 12.8208 13.625 10.7498 13.625C8.67869 13.625 6.99976 11.9461 6.99976 9.875V9.25C6.99976 8.90482 7.27958 8.625 7.62476 8.625C7.96994 8.625 8.24976 8.90482 8.24976 9.25V9.875Z"
                    fill="#262626"
                  />
                </svg>
              }
            />
            <WhiteButton text="Contact Us" path="/support" flex={true} />
          </div>
          <div className="grid grid-cols-2 gap-2.5 p-2 bg-white-97 border-2 border-white rounded-xl shadow-ss2 xll:p-3.5 xll:gap-4 xll:shadow-ss1 3xl:p-4.8 3xl:gap-5">
            {heroCounter.map((counter) => (
              <div
                key={counter.id}
                className="p-4.9 space-y-1 rounded-xl border border-white-95 bg-white xll:p-5.3 xll:space-y-1.5 3xl:p-[29px] 3xl:space-y-2.5"
              >
                <h4 className="text-xl font-semibold text-gray-10 leading-[27px] xll:text-26 xll:leading-9 3xl:text-34 3xl:leading-[46px]">
                  {counter.title}
                </h4>
                <p className="text-sm text-gray-40 l-150 xll:text-base 3xl:text-lg">
                  {counter.pera}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div ref={HeroRightRef} className="flex justify-center items-center">
          <div className="w-[357px] h-[w38px] xll:w-[544px] xll:h-[619px] 3xl:w-[673px] 3xl:h-[769px] bg-white-97 rounded-16 relative">
            <img
              src={heroimgsm}
              alt="heroimg"
              width="357px"
              height="438px"
              className="xll:hidden"
            />
            <img
              src={heroimgmd}
              alt="heroimg"
              width="544px"
              height="619px"
              className="hidden xll:block 3xl:hidden"
            />
            <img
              src={heroimglg}
              alt="heroimg"
              width="673px"
              height="769px"
              className="hidden 3xl:block"
            />
            <div className="absolute top-5 left-4 py-1.5 px-2.5 rounded-full bg-white text-sm font-medium l-150 text-gray-15 3xl:py-2 3xl:px-3.5 3xl:text-base">
              Best Seller
            </div>
            <div
              ref={herocapsuleref3}
              className="absolute top-4 left-1/2 py-1 px-2 rounded-full bg-white text-12 font-medium l-150 text-gray-15 xll:top-[36px] 3xl:py-1.5 3xl:px-3 3xl:text-base hero__capsule"
            >
              Hoodie{" "}
              <div className="absolute w-[15px] h-[33px] border-t border-l border-gray-15 rounded-tl-[9px] top-1/2 left-0 -translate-x-full after:content-[''] after:block after:absolute after:h-1.5 after:w-1.5 after:rounded-full after:bottom-0 after:left-0 after:-translate-x-1/2 after:bg-black"></div>
            </div>
            <div
              ref={herocapsuleref2}
              className="absolute top-[35%] left-3 py-1 px-2 rounded-full bg-white text-12 font-medium l-150 text-gray-15 xll:left-10 3xl:py-1.5 3xl:px-3 3xl:text-base hero__capsule"
            >
              Casual Jacket
              <div className="absolute w-[15px] h-[33px] border-t border-r border-gray-15 rounded-tr-[9px] top-1/2 right-0 translate-x-full after:content-[''] after:block after:absolute after:h-1.5 after:w-1.5 after:rounded-full after:bottom-0 after:right-0 after:translate-x-1/2 after:bg-black"></div>
            </div>
            <div
              ref={herocapsuleref}
              className="absolute top-[40%] right-1 py-1 px-2 rounded-full bg-white text-12 font-medium l-150 text-gray-15 xll:right-[27px] xll:top-[60%] 3xl:py-1.5 3xl:px-3 3xl:text-base hero__capsule"
            >
              Full Sleeve
              <div className="absolute w-[15px] h-[33px] border-t border-l border-gray-15 rounded-tl-[9px] top-1/2 left-0 -translate-x-full after:content-[''] after:block after:absolute after:h-1.5 after:w-1.5 after:rounded-full after:bottom-0 after:left-0 after:-translate-x-1/2 after:bg-black"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full px-4 pb-5 flex gap-x-5 gap-y-2.5 flex-wrap justify-between xll:gap-0 xll:items-center">
              {herosizeBox.map((size, i) => {
                return (
                  <div
                    key={i}
                    className="py-2 pl-4 pr-2.5 bg-white rounded-full flex w-full gap-1.5 items-center xll:w-fit xll:order-2"
                  >
                    <h4 className="text-sm l-150 text-gray-15 font-medium 3xl:text-lg">
                      {size.title}
                    </h4>
                    <div className="w-full flex gap-0.5 items-center 3xl:gap-1">
                      {size.sizes.map((sizes, i) => {
                        return (
                          <span
                            key={i}
                            className="block grow py-[5px] rounded-full border border-white-95 bg-white-97 text-12 3xl:l-150 capitalize text-gray-15 text-center xll:w-10 3xl:py-0.5 3xl:w-12 3xl:text-base"
                          >
                            {sizes}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              {herocoloerBox.map((color, i) => {
                return (
                  <div
                    key={i}
                    className="py-2 pl-4 pr-2.5 bg-white rounded-full flex items-center gap-1.5"
                  >
                    <h4 className="text-sm font-medium l-150 text-gray-15 3xl:text-lg">
                      {color.title}
                    </h4>
                    <div className="flex gap-0.5 py-[3px] px-1 border border-white-95 rounded-full 3xl:py-[5px] 3xl:px-1.5 3xl:gap-1">
                      {color.colors.map((colors, i) => {
                        return (
                          <div
                            key={i}
                            className="rounded-full h-4 w-4 3xl:h-5 3xl:w-5"
                            style={{
                              backgroundColor: colors,
                            }}
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              <a
                href="#"
                className="py-2 px-10 bg-white text-sm font-medium left-10.5 text-gray-15 rounded-full xll:order-3 xll:px-5 3xl:text-lg l-150 h-fit"
              >
                View Similar
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <CommonTitle
          capsule="Products"
          title="Discover Fashion."
          pera="Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion."
          buttonText="View All Products"
          buttonPath="/products"
        />
        <CommonSlider cardData={DiscoverCirdData} />
      </section>
      <section className="section">
        <CommonTitle
          capsule="About Us"
          title="The Klothink Experience."
          pera="At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story."
        />
      </section>
    </>
  );
}

export default Home;
