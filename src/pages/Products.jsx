import React from "react";
import CommonTitle from "../components/CommonTitle";
import { ProductHeroData } from "../Data/ProductHeroData";
import PruductsCommontitle from "../components/PruductsCommontitle";
import { PruductsData } from "../Data/PruductsData";
import CommonSlider from "../components/Sliders/CommonSlider";
import CommonHeroBox from "../components/CommonHeroBox";

function Products() {
  const casualdata = PruductsData.filter((item) => item.type === "Casual");
  const formaldata = PruductsData.filter((item) => item.type === "formal");
  const activedata = PruductsData.filter((item) => item.type === "active");

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
        <CommonHeroBox data={ProductHeroData} />
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
