import React, { Suspense, useState } from 'react';
import About from './component/About/About';
import Contact from './component/Contacts/Contact';

import foto from '../../assets/Hudi.png'

import {Typewriter} from 'react-simple-typewriter'

import './body.css'
import Loading from './component/Loading.js/Loading';
import { Canvas } from '@react-three/fiber';
import Background from './Background';
import Projects from './component/Project_2/Projects';
const Body = () => {

    const [load,setLoad] = useState(false)
   

    
    const imageLoaded = async()=>{
        setLoad(true)
    }
    
    return (
        <div >
         <div  id="home" className='section' style={{minHeight:'30em',
            paddingTop:'7em',
            display:'flex',
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems:'center',
            alignContent:'space-between',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(102,195,200,1) 0%, rgba(0,212,255,1) 100%)',
            justifyContent:'space-evenly',
            color:'white',
            
            
            }}>
              <div className='photo' >
             
                     
                     <img className="my_photo" src={foto} style={{width:'100%',position:'relative'}} 
                           alt='foto_hudi'
                           onLoad={()=>{imageLoaded()}}
                       />
                     {!load && <Loading from={"hero"}/>}
                     <span className='back'></span>
                       
              </div>
             
              
            <div style={{position:'relative',minHeight:'12em'}}>
              <div className='intro' style={{position:'relative',textAlign:'center',marginBottom:'3em',height:'max-content',zIndex:'10'}}>
                <h3><strong className='name'>Hudi Indrawan</strong></h3>
                {/* <h5>I am a  
                    <span style={{color:"red",fontWeight:'bold',zIndex:15}}>
                    <Typewriter 
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={60}
                        delaySpeed={2000}
                        words={[' Web Developer', ' Web Design']}

                    />
                    </span></h5> */}
              </div>
              <div className='background-sec' style={{position:'absolute',zIndex:'1',top:0}}>
                <Canvas shadows camera={{position:[0,0,5],fov:50}} size={[`500px`,`300px`]}>
                  <ambientLight  intensity={0.1}/>
                  <directionalLight position={[-2,5,2]} intensity={1}/>
                  <Suspense fallback={null}>
                    <Background />
                  </Suspense>
                 </Canvas>
              </div>
              </div>
            
            </div>
            <About/>
            <Projects />
            {/* <Project/> */}
            <Contact/>
        </div>
    );
}

export default Body;
