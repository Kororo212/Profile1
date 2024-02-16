import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ProjectBox from './ProjectBox'
import { Loadeed } from './Projects'
import './Projects.css'


export default function MyProject({data}) {



  
  return (

   
        <div className='sec-myproject'>
                    <div  className="canvas-project">
                        <Canvas style={{
                            height:'300px',width:'265px',
                            maxWidth: '310px',
                            maxHeight: '310px',
                            borderRadius: '15px',
                            borderImage:  'linear-gradient(rgba(10, 83, 126, 0.438), #4e9f0c42) 30',
                            borderWidth: '4px',
                            borderStyle: 'solid'}} 
                      camera={{ fov: 1, position: [10, 0, 28]}} >
                            <OrbitControls enableZoom={true} rotation={0.1} />
                            <ambientLight intensity={1}/>
                            <directionalLight position={[2,5,2]} />
                            <Suspense fallback={<Loadeed />}>
                             <ProjectBox  img={data.path_image}/>
                            </Suspense>
                        </Canvas>
        
            
                    </div>


           
                    <div className= "container-project-box" 
                    style={{ 
                            display: 'flex',
                            flexDirection:'column',
                            justifyContent:'space-evenly',  
                            alignItems:'center',
                            padding:'10px 15px 10px 15px',
                            border:'none'
                            }}>
                        <div>
                            <h2>{data.name}</h2>
                        </div>
                        <div>
                            <h4>About Project </h4>
                        </div>
                        <div>
                            <p>
                            {data.about}
                            </p>
                        </div>
                        <div>
                            <h3>More : </h3>
                        </div>
                        <div style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
                            <a className='goto' href={data.github}>Github</a>
                            <a className='goto' href={data.web}>Web</a>
                            <a className='goto' href={data.docker}>Docker</a>
                        </div>
                    </div>
        
        </div>
    
  )
}
