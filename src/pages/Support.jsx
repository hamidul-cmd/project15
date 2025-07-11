import React from "react";
import CommonTitle from "../components/CommonTitle";
import { ContactHeroData } from "../Data/ContactHeroData";
import CommonHeroBox from "../components/CommonHeroBox";
import ContactCommonGrid from "../components/ContactCommonGrid";
import { ReturnBoxData } from "../Data/ReturnBoxData";
import { PolicyBoxData } from "../Data/PolicyBoxData";

function Support() {
  return (
    <>
      <section className="px-4 pt-10 xll:pt-20 xll:px-20 3xl:px-36.6 3xl:pt-36.6 flex flex-wrap justify-between items-center xll:items-end gap-7.5">
        <div className="max-w-[541px] 3xl:max-w-[670px]">
          <CommonTitle
            capsule="Your Fashion Ally"
            title="Klothink Support."
            pera="24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction."
            product={true}
          />
        </div>
        <CommonHeroBox data={ContactHeroData} />
      </section>
      <section className="section">
        <CommonTitle
          capsule="Easy Returns at Klothink"
          title="Return Policy"
          pera="Explore our hassle-free return policy designed to ensure your satisfaction with every purchase."
          buttonPath="#"
          buttonText="Read Return Policy ->"
        />
        <ContactCommonGrid data={ReturnBoxData} />
      </section>
      <section className="section">
        <CommonTitle
          capsule="Flexible Ordering Experience"
          title="Cancellation Policy"
          pera="Familiarize yourself with our cancellation policy to make changes to your order with ease."
          buttonPath="#"
          buttonText="Read Cancellation Policy ->"
        />
        <ContactCommonGrid data={PolicyBoxData} />
      </section>
    </>
  );
}

export default Support;
