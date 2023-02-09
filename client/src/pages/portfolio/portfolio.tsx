import React from 'react'
import {useState} from "react"
import {useEffect} from "react"
import "./portfolio.css"
import ProjectCard from "../../components/projectCard/card"
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import {project} from "../../models"


const Portfolio:React.FC = () => {
  const [projects, setProjects]= useState<project[]>([])
  const [isLoading, setLoading] = useState(true)
 
  
  
  useEffect(() =>{
    const fetchData= async()=>{
      try{
    const {data}= await axios.get("http://localhost:3001/projects/getall")
    console.log(data)
      setProjects(data)
  
    
      }
      catch(err:any){
        console.log(err.message)
      }
    }
    
    fetchData()
    if (projects){
      setLoading(false)
      }
 
},[])




  return (
    
    <div className="portfolio-container">
      <div className="projects-wrapper">
      <div>   {isLoading && <Spinner animation="grow" />}  </div>
    
        {projects.map((project:project, index)=>{
            return <ProjectCard key={index} project={project}  />
        })}
      
      
   
    </div>
    </div>
  )
}

export default Portfolio