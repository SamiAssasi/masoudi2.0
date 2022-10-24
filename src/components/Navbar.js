import  { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="p-8 flex items-center container mx-auto">
        <h1 className="text-5xl p-0 m-0 grow">Masoudi</h1> 
            <div className="flex align-end ml-auto">
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
