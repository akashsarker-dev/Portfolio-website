import React, { useState } from "react";
// import Logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between max-w-container mx-auto py-4">
      <h1 className="text-[#EDEDED] text-2xl font-semibold">Akash Sarker</h1>
      <ul className="md:flex hidden items-center gap-10 text-[#EDEDED]">
        <NavLinks />
      <button className="button-me md:py-2 md:px-5 py-2 px-5 font-semibold text-base overflow-hidden  border-primary-color border-2 rounded-full md:rounded-lg after:bg-primary-color text-button-text after:z-[-10] hover:text-primary-color ">Resume</button>
      </ul>
      {/* Mobile Nav */}
      <ul
        className={`fixed text-[#EDEDED] text-center items-center text-lg top-0 z-50 bg-[#112e42] w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium  p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
      >
        <NavLinks/>
        <button className="button-me md:py-2 md:px-5 py-2 px-5 font-semibold text-base overflow-hidden  border-primary-color border-2 rounded-full md:rounded-lg after:bg-primary-color text-button-text after:z-[-10] hover:text-primary-color ">Resume</button>
      </ul>

      <div className="text-2xl md:hidden z-50 " onClick={() => setOpen(!open)}>
        {
        !open ? <AiOutlineMenu className="text-[#EDEDED] cursor-pointer text-3xl"></AiOutlineMenu> : <RxCross2 className="text-[#EDEDED] cursor-pointer text-3xl"></RxCross2>
        
        }
          
      </div>
    </nav>
  );
};

export default Nav;
