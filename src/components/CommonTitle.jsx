import React, { useLayoutEffect, useRef } from "react";
import YellowButton from "./Buttons/YellowButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CommonTitle({ capsule, title, pera, hero, buttonText, buttonPath }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

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
            gsap.from(leftRef.current, {
              y: 100,
              opacity: 0,
              duration: 1.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: leftRef.current,
                start: "top 90%",
                end: "bottom 90%",
                toggleActions: "play none none none",
              },
            });

            gsap.from(rightRef.current, {
              y: 100,
              opacity: 0,
              duration: 1.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: rightRef.current,
                start: "top 90%",
                end: "bottom 90%",
                toggleActions: "play none none none",
              },
            });
          }

          if (isLarge) {
            gsap.from(leftRef.current, {
              x: -150,
              opacity: 0,
              duration: 1.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: leftRef.current,
                start: "top 95%",
                end: "bottom 95%",
                toggleActions: "play none none none",
              },
            });

            gsap.from(rightRef.current, {
              x: 150,
              opacity: 0,
              duration: 1.5,
              ease: "power4.out",
              scrollTrigger: {
                trigger: rightRef.current,
                start: "top 95%",
                end: "bottom 95%",
                toggleActions: "play none none none",
              },
            });
          }
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      className={`${
        hero
          ? "mb-6 xll:mb-10 3xl:mb-12.5"
          : "mb-10 xll:mb-14.5 ll:mb-12.5 3xl:mb-20"
      } ${
        buttonText
          ? "space-y-5 ll:flex ll:justify-between ll:items-center ll:space-y-0"
          : ""
      }`}
    >
      <div
        ref={leftRef}
        className={`space-y-2.5 xll:space-y-5 3xl:space-y-6 ${
          hero ? "" : "max-w-[600px] xll:max-w-[975px] 3xl:max-w-[1088px]"
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
      {buttonText && (
        <div ref={rightRef} className="w-fit">
          <YellowButton text={buttonText} path={buttonPath} />
        </div>
      )}
    </div>
  );
}

export default CommonTitle;
