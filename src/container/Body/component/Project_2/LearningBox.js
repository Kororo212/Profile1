import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

export default function LearningBox({data}) {
   const ImgLoad = useLoader(TextureLoader,data)
   const mesh = useRef()
   useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y += 0.02 ));
  return (
    <mesh ref={mesh}  rotation={[60,10,10]}>
        <boxBufferGeometry  attach={"geometry"} args={[3,3,3]}/>
        <meshBasicMaterial map={ImgLoad}  />
       
    </mesh>
  )
}
