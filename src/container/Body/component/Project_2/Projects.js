import { Html, useProgress } from '@react-three/drei'

import React, { useEffect, useState } from 'react'
import { Button, Dropdown} from 'react-bootstrap'
import {Typewriter} from 'react-simple-typewriter'
import Learning from './Learning'
import MyProject from './MyProject'
import './Projects.css'
import { data_project } from './Projects_assets'




export default function Projects() {

 const [view,setView] = useState(false)
 const [select,setSelect]= useState("")
 const [dataP,setDataP] = useState([])
 
 const getDataProject = (datas)=>{
   const dataSelected = data_project.filter((data)=>data.project_name === datas.toLowerCase())
   setDataP(dataSelected)
   setSelect(datas)
 }
 useEffect(()=>{
  getDataProject('React-Movie_app')
 },[])

  return (
    <div id="project" className="section">
        {/* <div >
            <h3 style={{color:'white',textAlign:'center'}}>Projects</h3>
        </div> */}
        {/* <div style={{textAlign:'center',paddingTop:'2em'}}>
          <div style={{display:'flex',justifyContent:'center',flexDirection:'column',
            alignItems:'center',
            }}>
           <div style={{minHeight:'50px',color:'green',zIndex:'10'}}> 
            <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={60}
                delaySpeed={2000}
                words={[' Click Buton To View More ', ' About My Projects ', 'and My Learning']}
                cursorColor="red"
                />
            </div>
            <Button className="btn-project" variant={"outline-primary"} onClick={()=>{setView(true)}}
             style={{width:'max-content'}} >
                View
            </Button>
            
          </div>  
        </div> */}
        {/* <div className='popup' style={{
             scale:view?"1":"0",
             height:'100vh',
             width:'100%',
             zIndex:'20000',
             backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
             backgroundSize:'cover',
             left:0,
             position:'absolute',
             top:0,
             position:'fixed',
             transition:'scale 0.5s ease',
             overflow:'scroll',
             color:'white',
             contain:'size style layout'
             
        }}> */}

            {/* <div className='project-close' >
                  <span className='close-popup'onClick={()=>{setView(false)}} >&times;</span>
            </div> */}
           
            <div className='container-learn'
              
              >
              <div>
                <h3>Learning</h3>
              </div>
              <div className='learn-box'>
                <Learning/>
              </div>
            </div>
            <div className='container-myproject'>
              <div>
                <h3>My Project</h3>
              </div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {select}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>{getDataProject('React-Movie_app')}}>React-Movie_App</Dropdown.Item>
                    <Dropdown.Item onClick={()=>{getDataProject('React-Gamebor_app')}}>React-Gambor_App</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
               </div>
               <div style={{width:'100%'}}>
                {dataP && dataP.map((data,i)=>{
                  return <MyProject key={data.name + i} data={data}/>
                })}
               </div>
             </div>
           
        {/* </div> */}
    </div>
  )
}
export const Loadeed =()=>{
  const {progress} = useProgress()
  return <Html center>Loading...{progress}%</Html>
}