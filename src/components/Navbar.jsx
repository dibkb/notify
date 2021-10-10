import React from 'react'
import mainLogo from '../assets/logo.png'
import classes from './Navbar.module.css'
const Navbar = () => {
   return (
      <div className = {classes.navbar}>
         <img src = {mainLogo} className = {classes.logo} alt = 'logo powered by dribbble'></img>
         <h3 className = {classes.name}>noteify</h3>
      </div>
   )
}

export default Navbar
