
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'



export default function ProjectBox({img}) {

 const image1 = useLoader(TextureLoader,img[0])
 const image2 = useLoader(TextureLoader,img[1])
 const image3 = useLoader(TextureLoader,img[2])
 const image4 = useLoader(TextureLoader,img[3])
 const image5 = useLoader(TextureLoader,img[4])
 const image6 = useLoader(TextureLoader,img[5])
 const boxRef = useRef()
 useFrame(() => {
  boxRef.current.rotation.y += 0.01;
  
  });
 
  return (
    <mesh  ref={boxRef} rotation={[0,0,0]} rotation-y={Math.PI * 0.25}>
        <boxBufferGeometry  args={[2,2,2]}/>
        <meshBasicMaterial attach="material-0" map={image1} />
        <meshBasicMaterial  attach="material-1"  map={image2} />
        <meshBasicMaterial attach="material-2"  map={image3} />
        <meshBasicMaterial attach="material-3" map={image4} />
        <meshBasicMaterial  attach="material-4"  map={image5} />
        <meshBasicMaterial attach="material-5"  map={image6}/>
    </mesh>
  )
}
