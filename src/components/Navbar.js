import  { Link } from 'gatsby'
import { useState } from "react";
import React from 'react'

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
  return (
    <nav>
        <div className="p-8 flex items-center container mx-auto">
        <h1 className="text-5xl p-0 m-0 grow">Masoudi</h1> 
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        aria-controls="navbar-default" aria-expanded="false" onClick={() => setNavbar(!navbar)}
        >
        <span className="sr-only">Navigation</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
            <div className={`align-end ml-auto w-full md:flex md:w-auto ${ navbar ? "block" : "hidden"}`} id="navbar-default">
            {[
            ['Home', '#'],
            ['About me', '#'],
            ['References', '#'],
            ['Contact', '#'],
  ].map(([title, url]) => (
    <Link to={url} className="px-4 text-2xl text-white transition transition-shadow duration-300 hover:text-cyan-400">{title}</Link>
  ))}
            </div>
       </div>
    </nav>
  )
}
