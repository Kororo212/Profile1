import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {


window.addEventListener('scroll',()=>{
    if(window.scrollY >= 97){
      document.querySelector("#navbarSection").classList.add("bg-black")
    }else{
      document.querySelector("#navbarSection").classList.remove("bg-black")
    }
})

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

const scrollToChild = (e)=>{
  e.preventDefault()
  const target = e.target.getAttribute('href')
  const doc = document.querySelector(target)?.offsetTop
  window.scrollTo({
    top:doc - 70,
    left:0,
    behavior:'smooth'
  })
  const docNav = document.getElementById("basic-navbar-nav")
  docNav.classList.remove("show")
}


 
  return (
    <Navbar id="navbarSection" variant="dark" className='section-navbar' expand="lg" fixed="top"
      
    >
    <Container>
      <Navbar.Brand href="#home" 
        style={{fontSize:'25px',background:'-webkit-linear-gradient(#eee, #333)',
           backgroundColor: '#00DBDE',
           backgroundImage: 'linear-gradient(285deg, #00DBDE 0%, #FC00FF 100%)',
           backgroundSize:'300% 300%',
           webkitBackgroundClip:'text',
           WebkitTextFillColor:'transparent',
           fontWeight:'bold',
           animation:'10s gradient linear infinite'
           }}>
        
        Hudi Indrawan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" >
          <Nav.Link className="nav-sec active" href="#home" onClick={scrollTo}  >Home</Nav.Link>
          <Nav.Link className="nav-sec"  href="#about-me" onClick={scrollTo}>About Me</Nav.Link>
          <Nav.Link className="nav-sec" href = "#project" onClinck={scrollTo}>Project</Nav.Link>
          {/* <NavDropdown  className="nav-sec"  title= {<span className="drop">Project</span>}>
            <NavDropdown.Item  href="#learning" onClick={scrollToChild} >Learning</NavDropdown.Item>
            <NavDropdown.Item  href="#my-projects" onClick={scrollToChild}>My Projects</NavDropdown.Item>
          </NavDropdown > */}
           
            <NavDropdown className="nav-sec"  title={<span className="drop">Contacts</span>}>
              <NavDropdown.Item  href="#message-me" onClick={scrollToChild}>Send Me Message</NavDropdown.Item>
              <NavDropdown.Item  href="#contact-me" onClick={scrollToChild}>Contact's Info</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
