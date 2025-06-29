import React from "react";
import { Link, NavLink } from "react-router-dom";
import logosm from "../assets/logosm.png";
import logomd from "../assets/logomd.png";
import logolg from "../assets/logolg.png";

function Header() {
  const navLinks = [
    {
      id: 1,
      title: "home",
      path: "/",
    },
    {
      id: 2,
      title: "products",
      path: "/products",
    },
    {
      id: 3,
      title: "Contact Support",
      path: "/support",
    },
  ];
  const [showmenu, setShowmenu] = React.useState(false);
  return (
    <>
      <header className="flex justify-between items-center px-4 py-5 after:content-[''] after:h-[2px] after:w-full relative after:absolute after:bg-white-95 after:bottom-0 after:left-0 xll:px-20 xll:py-4.8 3xl:py-5 3xl:px-36.6">
        <ul
          className={`absolute top-0 left-0 w-full h-screen flex flex-col pt-24.5 items-center gap-6 bg-white z-[500] transition-all duration-300 ease-in ll:pt-0 ${
            showmenu ? "translate-y-0" : "translate-y-[-110%]"
          } ll:relative ll:h-fit ll:w-fit ll:translate-y-0 ll:flex-row xll:gap-2.5`}
        >
          {navLinks.map((links, i) => {
            return (
              <li
                key={links.id}
                onClick={() => setShowmenu(!showmenu)}
                className={`${i === 2 && "ll:hidden"}`}
              >
                <NavLink
                  to={links.path}
                  className={`text-sm font-medium leading-150 text-gray-40 py-2.6 px-4.7 border border-white-95 rounded-full block capitalize nav__links 3xl:py-3.4 3xl:px-5.3 3xl:text-lg`}
                >
                  {links.title}
                </NavLink>
              </li>
            );
          })}
          <span className="ll:hidden" onClick={() => setShowmenu(!showmenu)}>
            <svg
              className="h-6 w-6 absolute top-5 right-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
            </svg>
          </span>
        </ul>
        <div>
          <Link to="/">
            <picture>
              <source
                srcSet={logolg}
                media="(min-width: 1920px)"
                height="60px"
                width="60px"
              />
              <source
                srcSet={logomd}
                media="(min-width: 1440px)"
                height="40px"
                width="40px"
              />
              <img src={logosm} alt="logo" />
            </picture>
          </Link>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="p-3 bg-yellow-50 rounded-full block cursor-pointer 3xl:p-3.5">
            <svg
              className="w-5 h-5 3xl:h-6 3xl:w-6"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.875 1.875C1.52982 1.875 1.25 2.15482 1.25 2.5C1.25 2.84518 1.52982 3.125 1.875 3.125H3.02974C3.17132 3.125 3.29521 3.22019 3.33169 3.35698L5.46313 11.3499C4.11815 11.6988 3.125 12.9209 3.125 14.375C3.125 14.7202 3.40482 15 3.75 15H16.875C17.2202 15 17.5 14.7202 17.5 14.375C17.5 14.0298 17.2202 13.75 16.875 13.75H4.48169C4.73909 13.0218 5.43361 12.5 6.25 12.5H15.5985C15.8376 12.5 16.0557 12.3637 16.1604 12.1488C17.1064 10.2075 17.9319 8.19669 18.6273 6.12605C18.6826 5.96131 18.6668 5.78097 18.5837 5.62833C18.5007 5.47569 18.3578 5.36452 18.1894 5.32152C14.1712 4.29535 9.96135 3.75 5.625 3.75C5.32681 3.75 5.02921 3.75258 4.73223 3.75772L4.53948 3.0349C4.35708 2.35091 3.73762 1.875 3.02974 1.875H1.875Z"
                fill="#262626"
              />
              <path
                d="M3.125 16.875C3.125 16.1846 3.68464 15.625 4.375 15.625C5.06536 15.625 5.625 16.1846 5.625 16.875C5.625 17.5654 5.06536 18.125 4.375 18.125C3.68464 18.125 3.125 17.5654 3.125 16.875Z"
                fill="#262626"
              />
              <path
                d="M13.75 16.875C13.75 16.1846 14.3096 15.625 15 15.625C15.6904 15.625 16.25 16.1846 16.25 16.875C16.25 17.5654 15.6904 18.125 15 18.125C14.3096 18.125 13.75 17.5654 13.75 16.875Z"
                fill="#262626"
              />
            </svg>
          </button>
          <NavLink
            to="/support"
            className="hidden ll:block nav__links text-sm font-medium leading-150 text-gray-40 py-2.6 px-4.7 border border-white-95 rounded-full capitalize 3xl:py-3.4 3xl:px-5.3 3xl:text-lg"
          >
            Contact Support
          </NavLink>
          <div className="ll:hidden" onClick={() => setShowmenu(!showmenu)}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.25 9.5625C4.25 8.9757 4.7257 8.5 5.3125 8.5H28.6875C29.2743 8.5 29.75 8.9757 29.75 9.5625C29.75 10.1493 29.2743 10.625 28.6875 10.625H5.3125C4.7257 10.625 4.25 10.1493 4.25 9.5625ZM4.25 17C4.25 16.4132 4.7257 15.9375 5.3125 15.9375H28.6875C29.2743 15.9375 29.75 16.4132 29.75 17C29.75 17.5868 29.2743 18.0625 28.6875 18.0625H5.3125C4.7257 18.0625 4.25 17.5868 4.25 17ZM15.9375 24.4375C15.9375 23.8507 16.4132 23.375 17 23.375H28.6875C29.2743 23.375 29.75 23.8507 29.75 24.4375C29.75 25.0243 29.2743 25.5 28.6875 25.5H17C16.4132 25.5 15.9375 25.0243 15.9375 24.4375Z"
                fill="#262626"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
