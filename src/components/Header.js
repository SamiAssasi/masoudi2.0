import React from 'react'
import Navbar from '../components/Navbar'
import LandingText from '../components/LandingText'
import { graphql } from "gatsby";



const Header = ({ title, description }) => {
    return (
    <div className="bg-black text-white h-screen">
        <Navbar></Navbar>
        <div className="m-0 mx-auto md:max-w-screen-md	pt-24 container px-4 md:px-0">
         <h2 className="text-white text-5xl md:text-7xl pb-4">{title}</h2>
         <h3 className="text-2xl md:text-3xl text-gray-500">{description}</h3>
        </div>
    </div>
  )
}

export default Header;