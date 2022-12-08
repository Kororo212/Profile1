import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ProjectBox from './ProjectBox'
import { Loadeed } from './Projects'


export default function MyProject({data}) {



  
  return (

   
        <div className='sec-myproject'>
                    <div  className="canvas-project">
                        <Canvas camera={{ fov: 4, position: [10, 0, 28]}} >
                            <OrbitControls enableZoom={true} rotation={0.1} />
                            <ambientLight intensity={1}/>
                            <directionalLight position={[-2,5,2]} />
                            <Suspense fallback={<Loadeed />}>
                             <ProjectBox  img={data.path_image}/>
                            </Suspense>
                        </Canvas>
        
            
                    </div>


           
                    <div calassName= "container-project-box" 
                    style={{ borderBottomColor: '3px solid black',
                            display: 'flex',
                            flexDirection:'column',
                            justifyContent:'space-evenly',  
                            alignItems:'center',
                            padding:'10px 15px 10px 15px'
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
