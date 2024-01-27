import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from "./Footer"

function Layout(props) {
  return (
    <>
      <NavBar width={props.width}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout