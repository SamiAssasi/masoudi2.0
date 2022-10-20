import React from 'react'
import Navbar from '../components/Navbar'
import * as styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
        <Navbar></Navbar>
        <div className={styles.heroText}>
         <h2>Software Developer & Project Manager</h2>
         <h3>I have worked on multiple large projects in my career as a developer and project manager. My past experience as a software developer has given me advantages of understanding the technical side of projects and responding to the customer and user needs.</h3>   
        </div>
    </div>
  )
}
