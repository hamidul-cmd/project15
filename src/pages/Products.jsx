import React, { useLayoutEffect, useRef, useState } from "react";
import CommonTitle from "../components/CommonTitle";
import { ProductHeroData } from "../Data/ProductHeroData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PruductsCommontitle from "../components/PruductsCommontitle";
import { PruductsData } from "../Data/PruductsData";
import CommonSlider from "../components/Sliders/CommonSlider";

gsap.registerPlugin(ScrollTrigger);

function Products() {
  const casualdata = PruductsData.filter((item) => item.type === "Casual");
  const formaldata = PruductsData.filter((item) => item.type === "formal");
  const activedata = PruductsData.filter((item) => item.type === "active");
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
      <section className="px-4 pt-10 xll:pt-20 xll:px-20 3xl:px-36.6 3xl:pt-36.6 flex flex-wrap justify-between items-center xll:items-end gap-7.5">
        <div className="max-w-[541px] 3xl:max-w-[670px]">
          <CommonTitle
            capsule="Discover Now"
            title="Products"
            pera="Dive into the world of fashion excellence at Klothink. Our curated selection brings together the latest trends and timeless classics, offering you a diverse array of clothing items that resonate with your unique style."
            product={true}
          />
        </div>
        <div
          ref={rightref}
          className="p-4.9 rounded-14 border border-white-95 flex flex-wrap gap-5 xll:py-6.9 xll:px-[39px] xll:gap-7.5 3xl:py-[39px] 3xl:px-[49px] 3xl:rounded-20 3xl:gap-10"
        >
          {ProductHeroData.map((data, i) => {
            return (
              <div
                key={i}
                className="space-y-1.5 xll:space-y-2.5 3xl:gap-y-3.5"
              >
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
      </section>
      <section id="casual" className="products__section">
        <PruductsCommontitle
          title="Casual Collection"
          pera="Discover our versatile men's casual wear collection, where comfort meets contemporary fashion."
        />
        <CommonSlider cardData={casualdata} />
      </section>
      <section className="products__section">
        <PruductsCommontitle
          title="Formal Elegance"
          pera="Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look."
        />
        <CommonSlider cardData={formaldata} />
      </section>
      <section className="products__section">
        <PruductsCommontitle
          title="Active Lifestyle"
          pera="Embrace an active lifestyle with our performance-driven men's wear, designed for comfort and flexibility."
        />
        <CommonSlider cardData={activedata} />
      </section>
    </>
  );
}

export default Products;
