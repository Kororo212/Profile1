import { OrbitControls} from '@react-three/drei'
import { Canvas} from '@react-three/fiber'

import React, { Suspense,} from 'react'

import { data_learn } from './Projects_assets'

import LearningBox from './LearningBox';

import { Loadeed } from './Projects';



export default function Learning() {

  


  return (
    <>
    {data_learn.map((texture,i)=>{
       
        return(
          <div className="sec-box" style={{display:'flex',justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            padding:'10px'
         
          }}  key={i}>
            <div style={{padding:'20px'}}>
              <h4>{texture.title}</h4>
            </div>
            <Canvas style={{animation:'test 3s infinite'}} >
              <OrbitControls enableZoom={false} rotation={0.8} />
              <ambientLight intensity={1}/>
              <directionalLight position={[-2,5,2]} />
              <Suspense fallback={<Loadeed/>}>
                  <LearningBox data={texture.path_image}/>
              </Suspense>
            </Canvas>
          </div>
        )
      })}

 
    </>
    
  )
}
