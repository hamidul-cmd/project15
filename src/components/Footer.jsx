import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { footersicialLinks } from "../Data/FootersicialLinks";
import { footerlinksmobile } from "../Data/Footerlinksmobile";
import { footerlinksdesktop } from "../Data/Footerlinksdesktop";
import { footerpolicy } from "../Data/Footerpolicy";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerref = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerref.current, {
        y: 200,
        opacity: 0,
        ease: "power4.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: footerref.current,
          start: "top 90%",
          end: "bottom 90%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <footer ref={footerref} className="max-w-wrapper m-auto">
        <div className="border-y border-white-95 pt-7.5 ll2:flex ll2:justify-between ll2:items-center ll2:pt-0">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <picture>
                <source
                  srcSet="https://i.imgur.com/WtdC96C.png"
                  media="(min-width: 1920px)"
                  height="100px"
                  width="100px"
                />
                <source
                  srcSet="https://i.imgur.com/cSiTLHF.png"
                  media="(min-width: 1440px)"
                  height="60px"
                  width="60px"
                />
                <img src="https://i.imgur.com/Xffnw5g.png" alt="logo" />
              </picture>
              <div className="flex gap-4 ll2:hidden">
                {footersicialLinks.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href={link.path}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-fit p-2.5 bg-gray-15 text-white rounded-full"
                    >
                      {link.icon}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-2 3xl:gap-2.5">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                id="email"
                className="py-3.4 pl-3.6 pr-6.5 bg-white-99 border border-white-95 rounded-full text-sm placeholder:text-sm font-medium placeholder:font-medium l-150 placeholder:l-150 text-gray-60 placeholder:text-gray-60 outline-none w-full xll:w-[231px] 3xl:w-[323px] 3xl:py-3.6 3xl:pl-4.9 3xl:pr-6.9 3xl:text-lg 3xl:placeholder:text-lg"
              />
              <button className="py-3.4 px-5.3 bg-yellow-50 rounded-full cursor-pointer text-sm font-semibold l-150 text-gray-15 3xl:py-4 3xl:px-7.5 3xl:text-lg">
                Subscribe
              </button>
            </div>
          </div>
          <div className="py-6 flex justify-center gap-6 items-center ll2:hidden">
            {footerlinksmobile.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.path}
                  className="block text-sm font-medium l-130 text-gray-15 hover:text-yellow-50"
                >
                  {link.text}
                </a>
              );
            })}
          </div>
          <div className="hidden ll2:flex gap-10 py-10 pl-10 border-l border-white-95 xll:p-14.5 xll:pr-0 3xl:p-20 3xl:pr-0">
            {footerlinksdesktop.map((link, index) => {
              return (
                <div
                  key={index}
                  className={`space-y-6 ${
                    index === 3 ? "xll:w-fit" : "xll:w-[195px] 3xl:w-[241px]"
                  } 3xl:space-y-9`}
                >
                  <h3 className="text-lg font-medium l-130 text-gray-15 3xl:text-xl">
                    {link.title}
                  </h3>
                  <ul className="space-y-3.5 3xl:space-y-4.8">
                    {link.links.map((link, i) => {
                      return (
                        <li
                          key={i}
                          className="text-base l-130 text-gray-40 3xl:text-lg"
                        >
                          <Link to={link.path}>{link.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ll:flex ll:justify-between ll:items-center py-5 space-y-3.5 ll:space-y-0 xll:py-7.5 3xl:py-10">
          <ul className="ll:flex text-center space-y-1.5 ll:space-y-0">
            {footerpolicy.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`text-sm l-130 text-gray-60 3xl:text-lg ${
                    index === 0
                      ? "ll:pr-5 ll:border-r border-white-95 3xl:pr-6"
                      : "ll:pl-5 3xl:pl-6"
                  }`}
                >
                  <Link to={link.path}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
          <div className="gap-4 hidden ll2:flex 3xl:gap-5">
            {footersicialLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-fit p-2.5 bg-gray-15 text-white rounded-full"
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
          <p className="text-center text-sm l-130 text-gray-40 3xl:text-lg">
            &copy; 2024 Klothink. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
