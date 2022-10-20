import  { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/navigation.module.scss'

export default function Navbar() {
  return (
    <nav>
        <div className={styles.linkWrapper}>
        <h1>Masoudi</h1> 
            <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/">About me</Link>
            <Link to="/">References</Link>
            </div>
       </div>
    </nav>
  )
}
