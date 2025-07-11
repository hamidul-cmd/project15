import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CommonHeroBox({ data }) {
    const rightref = useRef(null);
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
              gsap.from(rightref.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: rightref.current,
                  start: "top 90%",
                  end: "bottom 90%",
                  toggleActions: "play none none none",
                },
              });
            }
  
            if (isLarge) {
              gsap.from(rightref.current, {
                x: 150,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: rightref.current,
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
    <>
      <div
        ref={rightref}
        className="p-4.9 rounded-14 border border-white-95 flex flex-wrap gap-5 xll:py-6.9 xll:px-[39px] xll:gap-7.5 3xl:py-[39px] 3xl:px-[49px] 3xl:rounded-20 3xl:gap-10"
      >
        {data.map((data, i) => {
          return (
            <div key={i} className="space-y-1.5 xll:space-y-2.5 3xl:gap-y-3.5">
              <h3 className="text-base font-semibold l-150 text-gray-15 xll:text-lg 3xl:text-2xl">
                {data.title}
              </h3>
              <p className="text-sm font-medium l-150 text-gray-40 3xl:text-lg">
                {data.discription}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CommonHeroBox;
