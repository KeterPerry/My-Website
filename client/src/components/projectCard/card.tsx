import React from 'react'
import "./card.css"
import {FiGithub} from 'react-icons/fi'
import {project} from "../../models"

interface Props{
    project:project;
    
}
const ProjectCard: React.FC<Props> =({project}:Props) => {
  return (
    <div className="card-cont">
        <div className="card-body-top">
    <img className= "card-img" style={{ width:"150px", height: "150px"}} src={`/assets/${project.image}`}></img>
    <div className="project-desc">
      <h1>{project.name}</h1>
      <p>
    {project.description}
      </p>
    </div>
    </div >
    <div className="card-body-bottom">
     
  
         <button className="card-btn" ><FiGithub style={{paddingTop:"6px", fontSize:"20px", width:"30px", height:"21px"}}/><a href={project.code_source} style={{textDecoration:"none", color:"black"}}>Check Github</a></button>
        
         </div>
  </div>


  )
}

export default ProjectCard

