import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const mobileNavRef = useRef(null);

  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Project",
      link: "/project",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const closeMobileMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!mobileNavRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

      window.addEventListener("mousedown", handleOutsideClick);

  },);

  return (
    <>
      <div className="bg-[#0d2b41] left-0 sticky top-0 z-20 px-2 bg-[#0e2c42f2] ">
        <nav className="flex justify-between items-center max-w-container mx-auto py-4 ">
          <h1 className="text-[#EDEDED] text-2xl font-semibold">
            <Link to=''>Akash Sarker</Link></h1>

          {/* Desktop Nav */}
          <ul className="md:flex hidden items-center gap-10 text-[#EDEDED]">
            {Links.map((link, i) => (
              <li key={i} className="font-semibold hover:text-primary-color">
                <NavLink
                  style={({ isActive, isPending }) => {
                    return {
                      color: isActive ? "#00ABF0" : "inherit",
                    };
                  }}
                  className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                  }}
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <button className="button-me md:py-2 md:px-5 py-2 px-5 font-semibold text-base overflow-hidden  border-primary-color border-2 rounded-full md:rounded-lg after:bg-primary-color text-button-text after:z-[-10] hover:text-primary-color z-50">
              Resume
            </button>
          </ul>

          {/* Mobile Nav */}
          <ul
            ref={mobileNavRef}
            className={`fixed text-[#EDEDED] text-center items-center text-lg top-0 z-50 bg-[#112e42] w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium  p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
          >
            {Links.map((link, i) => (
              <li key={i} className="font-semibold hover:text-primary-color">
                <NavLink
                  onClick={closeMobileMenu}
                  style={({ isActive, isPending }) => {
                    return {
                      color: isActive ? "#00ABF0" : "inherit",
                    };
                  }}
                  className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                  }}
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <button className="button-me md:py-6 py-2 px-5 font-semibold text-base overflow-hidden  border-primary-color border-2 rounded-full md:rounded-lg after:bg-primary-color text-button-text after:z-[-10] hover:text-primary-color">
              Resume
            </button>
          </ul>

          <div className="text-2xl md:hidden z-50 " onClick={() => setOpen(!open)}>
            {!open ? (
              <AiOutlineMenu className="text-[#EDEDED] cursor-pointer text-3xl" />
            ) : (
              <RxCross2 className="text-[#EDEDED] cursor-pointer text-3xl" />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
