import React from 'react'
import "./footer.css"
import {BiCopyright} from "react-icons/bi"
import {AiFillGithub,AiFillFacebook, AiFillLinkedin} from "react-icons/ai"



const Footer = () => {
  return (
    <div className="footer">
        <div>Designed and Developed by Keter Perry</div>
        <div className="copy-right-container">
        <div className="keter">KeterPery</div>
        <BiCopyright className="copy-right"/>
        </div>
        
        <div className="footer-icons-wrapper">
            <AiFillGithub className= "icons"/>
            <AiFillFacebook className= "icons"/>
            <AiFillLinkedin className= "icons"/>
        </div>
    </div>
  )
}

export default Footer