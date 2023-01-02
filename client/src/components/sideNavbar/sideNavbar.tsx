import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "../logo/logo"
import "./sideNavbar.css";
import {AiOutlineHome, AiOutlineProject,AiOutlineContacts } from "react-icons/ai"
import {SiAboutdotme}  from "react-icons/si"
import {GiHamburgerMenu}  from "react-icons/gi"
import { FaBars}from "react-icons/fa";
import HomeIcon from '@mui/icons-material/Home';
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu"





const SideNavbar:React.FC=() => {
  const[isOpen ,setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
   }
 
   useEffect(() => {
     window.addEventListener('scroll', changeNavBg);
     return () => {
       window.removeEventListener('scroll', changeNavBg);
     }
   }, [])




  const menuItem=[
      {
          path:"/",
          name:"home",
          icon:<AiOutlineHome/>
      },
      {
          path:"/about",
          name:"About",
          icon:<SiAboutdotme/>
      },
      {
        path:"/portfolio",
        name:"Portfolio",
        icon:<AiOutlineProject/>
    },
      {
          path:"/contact",
          name:"Contact",
          icon:<AiOutlineContacts />
      },
    
  ]
  return (
    <div className="container">
    <div style={{width: isOpen ? "20rem" : "50px", backgroundColor: navBg ? "rgba(0, 0, 0, 0.511)": "black"}} className="sidebar" >
        <div className="top_section">
          <div className="logo-div"style={{display: isOpen ? "block" : "none"}}>
            <Logo/>
          </div>
            {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
            <div style={{marginLeft: isOpen ? "25px" : "5px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        <br></br>
        <br></br>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" >
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    <br></br>
                    <br></br>
                </NavLink>
                
            ))
            
        }
        
    </div>
    {/* <main>{children}</main> */}
 </div>

  )
}

export default SideNavbar




