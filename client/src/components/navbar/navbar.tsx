import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../logo/logo"
import "./navbar.css";
import {AiOutlineHome, AiOutlineProject,AiOutlineContacts } from "react-icons/ai"
import {SiAboutdotme}  from "react-icons/si"
import {GiHamburgerMenu}  from "react-icons/gi"
import HomeIcon from '@mui/icons-material/Home';
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu"





const Navbar:React.FC=() => {
  // const [isHamburger, setIsHamburger] = useState<boolean>(false)
  // const[isOpen ,setIsOpen] = useState<boolean>(false);
  // const toggle = () => setIsOpen (!isOpen);
  return (
    <div>

    <div className="navbar" >
      <div className="top-container">
        <div className="logo-container" >
  <Logo />
  </div>
  <div  className="ham-menu-container" >
  <GiHamburgerMenu className="ham-menu"/>
  </div>
  </div>
    <ul className="nav">
      <li>
        <AiOutlineHome className="icon"/>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </li>
      <li>
      <SiAboutdotme className="icon"/>
        <NavLink to="/About" className="link">
          About
        </NavLink>
      </li>
      <li>
        <AiOutlineProject className="icon"/>
        <NavLink to="/portfolio" className="link">
          My portfolio
        </NavLink>
      </li>
      <li>
        <AiOutlineContacts className="icon"/>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </li>
    </ul> 
  </div>
<div className="hamburger" >
<HamburgerMenu/>
</div>
</div>

  )
}

export default Navbar




