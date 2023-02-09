import React from 'react'
import {BsCloudDownload} from "react-icons/bs"
import "./contact.css"

const Contact:React.FC = () => {


     // Function will execute on click of button
     const handleDownload = () => {
      // using Java Script method to get PDF file
      fetch('keterPerryCV.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'keterPerryCV.pdf';
              alink.click();
          })
      })
  }
  return (
    <div className="Contact-container">
    <div>
      <div className="contact-info">
        <h1>You can Contact me at</h1>
        <h3>My phone number: 050-77-44-085</h3>
        <h3>My Email Address:<span> <a href="https://outlook.office365.com" target="blank" style={{color:"rgba(109, 95, 19, 0.786)"}}>keterav@gmail.com</a></span></h3> 
        
      </div>
      <div className="cv-upload">
        <h2>You can download my CV here:</h2>
        <br></br>
        <button  onClick={handleDownload} className='download-btn'>Download CV <br></br><br></br><span><BsCloudDownload/></span></button>
      </div>
    </div>
 
    </div>
  )
}

export default Contact