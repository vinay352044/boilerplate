import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
    <Navbar />   {/* This is where child routes will render*/}
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default Layout
