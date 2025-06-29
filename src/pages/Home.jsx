import React from "react";
import CommonTitle from "../components/CommonTitle";
import YellowButton from "../components/Buttons/YellowButton";
import WhiteButton from "../components/Buttons/WhiteButton";
import heroimgsm from "../assets/heroimgsm.png";
import heroimgmd from "../assets/heroimgmd.png";
import heroimglg from "../assets/heroimglg.png";

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
  return (
    <>
      <section className="pt-10 px-4">
        <div className="space-y-6">
          <CommonTitle
            capsule="Style Redefined."
            title="Elevate Your Style with Klothink"
            pera="Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions."
          />
          <div className="flex gap-2 items-center grow">
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
          <div>
            {heroCounter.map((counter) => (
              <div key={counter.id}>
                <h4>{counter.title}</h4>
                <p>{counter.pera}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
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
        </div>
      </section>
    </>
  );
}

export default Home;
