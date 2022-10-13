
import './App.css';
import Body from './container/Body/Body';
import Footer from './container/Footer/Footer';
import NavBar from './container/Navbar/NavBar';
import React,{useEffect} from 'react';

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
    <div >
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
