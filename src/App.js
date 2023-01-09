
import './App.css';
import Body from './container/Body/Body';
import Footer from './container/Footer/Footer';
import NavBar from './container/Navbar/NavBar';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Notfound from './container/Notfound';

function App() {

  window.addEventListener('scroll',()=>{

    const sections = document.querySelectorAll(".section")
    const navItems = document.querySelectorAll(".nav-sec")
    
 
    let scrollHeight = window.pageYOffset;

    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop / 1.1 <= scrollHeight) {
            for (let j = 0; j < navItems.length; j++) {
                navItems[j].classList.remove('active');
            }

            navItems[i].classList.add('active');
        }
    }

   
   
  })


  return (
  <BrowserRouter>
    <div >
      <NavBar/>
       <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
    <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
