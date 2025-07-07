import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CommonTitle from "../components/CommonTitle";
import YellowButton from "../components/Buttons/YellowButton";
import WhiteButton from "../components/Buttons/WhiteButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonSlider from "../components/Sliders/CommonSlider";
import AboutCard from "../components/Cards/AboutCard";
import TestimonialsCard from "../components/Cards/TestimonialsCard";
import Faq from "../components/commonsection/Faq";
import { AboutCardData } from "../Data/AboutCardData";
import { HeroCounter } from "../Data/HeroCounter";
import { PruductsData } from "../Data/PruductsData";
import { TestimonialsCardData } from "../Data/TestimonialsCardData";
import { ExperienceData } from "../Data/ExperienceData";
import Experiencecard from "../components/Cards/Experiencecard";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };

    handleResize(); // run once on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsToShow = isMobile
    ? AboutCardData.slice(0, showAll ? AboutCardData.length : 2)
    : AboutCardData;

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
      const mm = gsap.matchMedia();

      mm.add(
        {
          // Viewports below 900px
          isSmall: "(max-width: 899px)",
          // Viewports 900px and above
          isLarge: "(min-width: 900px)",
        },
        (context) => {
          const { isSmall, isLarge } = context.conditions;

          if (isSmall) {
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
          }

          if (isLarge) {
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
        }
      );
    });
    return () => ctx.revert();
  }, []);

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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.99976 5.5V6.125H5.34382C4.54419 6.125 3.87361 6.7287 3.7899 7.52393L2.73727 17.5239C2.64016 18.4465 3.36352 19.25 4.29118 19.25H17.2085C18.1361 19.25 18.8595 18.4465 18.7624 17.5239L17.7097 7.52393C17.626 6.7287 16.9554 6.125 16.1558 6.125H14.4998V5.5C14.4998 3.42893 12.8208 1.75 10.7498 1.75C8.67869 1.75 6.99976 3.42893 6.99976 5.5ZM10.7498 3C9.36905 3 8.24976 4.11929 8.24976 5.5V6.125H13.2498V5.5C13.2498 4.11929 12.1305 3 10.7498 3ZM8.24976 9.875C8.24976 11.2557 9.36905 12.375 10.7498 12.375C12.1305 12.375 13.2498 11.2557 13.2498 9.875V9.25C13.2498 8.90482 13.5296 8.625 13.8748 8.625C14.2199 8.625 14.4998 8.90482 14.4998 9.25V9.875C14.4998 11.9461 12.8208 13.625 10.7498 13.625C8.67869 13.625 6.99976 11.9461 6.99976 9.875V9.25C6.99976 8.90482 7.27958 8.625 7.62476 8.625C7.96994 8.625 8.24976 8.90482 8.24976 9.25V9.875Z"
                    fill="#262626"
                  />
                </svg>
              }
            />
            <WhiteButton text="Contact Us" path="/support" flex={true} />
          </div>
          <div className="grid grid-cols-2 gap-2.5 p-2 bg-white-97 border-2 border-white rounded-xl shadow-ss2 xll:p-3.5 xll:gap-4 xll:shadow-ss1 3xl:p-4.8 3xl:gap-5">
            {HeroCounter.map((counter) => (
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
              src="https://i.imgur.com/6yqFw5f.png"
              alt="heroimg"
              width="357px"
              height="438px"
              className="xll:hidden"
            />
            <img
              src="https://i.imgur.com/FinXS6W.png"
              alt="heroimg"
              width="544px"
              height="619px"
              className="hidden xll:block 3xl:hidden"
            />
            <img
              src="https://i.imgur.com/WTR8F5i.png"
              alt="heroimg"
              width="673px"
              height="750px"
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
        <CommonSlider cardData={PruductsData} />
      </section>
      <section className="section overflow-hidden">
        <CommonTitle
          capsule="About Us"
          title="The Klothink Experience."
          pera="At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story."
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-3 gap-5 bg-white-99 rounded-16 p-4.9 border border-white-97 3xl:p-6.9 3xl:rounded-20 3xl:gap-7.5 ">
          {cardsToShow.map((item) => (
            <AboutCard key={item.id} item={item} />
          ))}

          {isMobile && AboutCardData.length > 3 && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              name="View All"
              aria-label="View All"
              className="flex items-center justify-center gap-2 text-base font-medium text-[#4C4C4D]"
            >
              <span>View All</span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4.25V16.75M10 16.75L15.625 11.125M10 16.75L4.375 11.125"
                  stroke="#4C4C4D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </section>
      <section className="section overflow-hidden">
        <CommonTitle
          capsule="Testimonials"
          title="Customers Love."
          pera="At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion."
          buttonText="View All Testimonials"
          buttonPath="#"
        />
        <div className="grid grid-cols-1 gap-5 ll:grid-cols-3 3xl:gap-7.5 p-4.9 bg-white-99 border border-white-97 rounded-16 xll:p-5.3 3xl:p-6.9 3xl:rounded-20">
          {TestimonialsCardData.map((card, i) => {
            return <TestimonialsCard key={i} card={card} />;
          })}
        </div>
      </section>
      <Faq />
      <section className="section">
        <CommonTitle
          capsule="How it Works ?"
          title="Seamless Experience."
          pera="At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease."
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 xll:grid-cols-4 gap-2.5 xll:gap-4 3xl:gap-5 p-[9px] xll:p-3.6 3xl:p-4.9 3xl:rounded-20 bg-white-99 border border-white-97 rounded-16">
          {ExperienceData.map((card, i) => {
            return <Experiencecard key={i} card={card} i={i} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
