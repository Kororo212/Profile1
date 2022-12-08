import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notfound() {
    const nav = useNavigate()
    useEffect(()=>{
        setInterval(()=>{
            nav("/")
        },2000)
    },[])
  return (
    <div style={{paddingTop:'100px',height:'100vh',backgroundColor:'black',textAlign:'center'}}>
        <h1 style={{color:"red"}}>Sorry, Page Not found</h1>
    </div>
  )
}
