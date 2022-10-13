import React from 'react'
import './Loading.css'

function Loading({from,height,}) {

  
  return (
    <div style={{width:'100%',minHeight:'300px',display:'grid',alignContent:'center',justifyContent:'center'}}>
        <p className={from}></p>
    </div>
  )
}

export default Loading
