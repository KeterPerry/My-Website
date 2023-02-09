import React from 'react'
import {useState} from 'react'
import "./hamburgerMenu.css"
import {AiOutlineHome, AiOutlineProject,AiOutlineContacts } from "react-icons/ai"
import {SiAboutdotme}  from "react-icons/si"
import {GiHamburgerMenu}  from "react-icons/gi"
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/navbar"


function HamburgerMenu() {

  const[isDisplay ,setIsOpen] = useState<boolean>(true);
  const handleToggle= () => setIsOpen (!isDisplay);
  return (
    <div className="ham-navbar" style={{display: isDisplay ? "block" : "none"}}>
    <div className="top-container" onClick={handleToggle}>
<GiHamburgerMenu className="ham-menu" />
</div>
  <ul className="nav">
    <li>
      <AiOutlineHome className="icon"/>
    </li>
    <li>
    <SiAboutdotme className="icon"/>
    </li>
    <li>
      <NavLink to="/portfolio" className="link">
      <AiOutlineProject className="icon"/>
      </NavLink>
    </li>
    <li>
      <NavLink to="/contact" className="link">
      <AiOutlineContacts className="icon"/>
      </NavLink>
    </li>
  </ul> 
  <div className="navbar" style={{display: isDisplay ? "none" : "block"}}>
    <Navbar/>
  </div>
</div>



  )
}

export default HamburgerMenu