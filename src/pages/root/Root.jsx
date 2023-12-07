import React from 'react'
import Nav from '../../component/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import CopyRight from '../../component/copyright/CopyRight'

const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <CopyRight></CopyRight>
    </div>
  )
}

export default Root
