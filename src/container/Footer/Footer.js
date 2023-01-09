import React from 'react'
import { Nav } from 'react-bootstrap';
import{EnvelopeFill, Github, Instagram, Whatsapp} from 'react-bootstrap-icons';
import './Footer.css'
function Footer() {
  const scrollTo = async(e)=>{
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const doc = document.querySelector(target)?.offsetTop
    window.scrollTo({
      top:doc - 30,
      left:0,
      behavior:'smooth'
    })
    const docNav = document.getElementById("basic-navbar-nav")
    docNav.classList.remove("show")
  }


  return (
    <div style={{backgroundColor:'black',color:'white',padding:'5px',}}>
        <div className='footer-cont'>
          <h5><strong>Hudi Indrawan</strong></h5>
          <h5 style={{fontSize:'12px'}}>Copyright &#169; 2023 </h5>
          <div style={{display:'flex',width:'100%',height:'max-content',justifyContent:'space-evenly',margin:'10px'}}>
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
            <Nav >
              <Nav.Link className="nav-sec active" href="#about-me" onClick={scrollTo}  >About Me </Nav.Link>
              <Nav.Link className="nav-sec"  href="#project" onClick={scrollTo}>My Projects </Nav.Link>
              <Nav.Link className="nav-sec" href ="#contacts" onClick={scrollTo}>Contacts </Nav.Link>
            </Nav>
          </div>
        </div>
    </div>
  )
}

export default Footer
