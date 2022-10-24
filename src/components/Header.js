import React from 'react'
import Navbar from '../components/Navbar'
import { graphql } from "gatsby";


const Header = ({ data }) => {
    return (
    <div className="bg-black text-white h-screen">
        <Navbar></Navbar>
        <div className="m-0 mx-auto max-w-screen-md	pt-24">
         <h2 className="text-white text-7xl pb-4">Software Developer & Project Manager</h2>
         <h3 className="text-3xl text-gray-500">I have worked on multiple large projects in my career as a developer and project manager. My past experience as a software developer has given me advantages of understanding the technical side of projects and responding to the customer and user needs.</h3>   
        </div>
    </div>
  )
}

export const query = graphql`
  query headerQuery {
    contentfulHeader {
      title
      description 
    }
  }
`;

export default Header;



