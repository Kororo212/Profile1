import React from 'react'
import{EnvelopeFill, Github, Instagram, Whatsapp} from 'react-bootstrap-icons';
import './Footer.css'
function Footer() {
  return (
    <div style={{backgroundColor:'black',color:'white',padding:'5px',marginTop:'4em'}}>
        <div className='footer-cont'>
          <h5><strong>Hudi Indrawan</strong></h5>
          <h5 style={{fontSize:'12px'}}>Copyright &#169; 2022 </h5>
          <div style={{display:'flex',width:'100%',height:'max-content',justifyContent:'space-evenly'}}>
                           <a className='footer-container' 
                              href="https://github.com/Kororo212">
                                <Github size={20}/>
                            
                           </a> 
                           <a  className='footer-container'>
                                <Instagram size={20}/>
                             
                           </a> 
                           <a  className='footer-container '
                           href="https://wa.me/+6285883584374">
                                <Whatsapp size={20}/>
                     
                           </a>
                           <a  className='footer-container '
                            href='https://mail.google.com/mail/?view=cm&fs=1&to=hudiindrawan01@gmail.com'>
                                <EnvelopeFill size={20}/>
                           
                           </a> 
                           
          </div>
          <div className="footer-nav" id="nav-footer" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <a href='#about-me' > About Me </a>
              <span className='space'>|</span>
              <a href='#project' >My Projects </a>
              <span className='space'>|</span>
              <a href='#contacts'>Contact's</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
