import React from 'react'
import Nav from '../../component/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import CopyRight from '../../component/copyright/CopyRight'
import ScrollToTop from 'react-scroll-up'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      {/* <ScrollUpButton /> */}
      <ScrollToTop showUnder={160}>
        <MdOutlineKeyboardArrowUp className='text-primary-color text-4xl h-10 w-10 bg-[#081b29] rounded-full border-2 border-primary-color hover:bg-primary-color hover:text-[#081b29] duration-500'></MdOutlineKeyboardArrowUp>
    </ScrollToTop>
      <CopyRight></CopyRight>

    </div>
  )
}

export default Root
