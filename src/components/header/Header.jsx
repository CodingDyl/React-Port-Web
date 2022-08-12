import React from 'react'
import './header.css'
import CTA from './CTA'
import DYL from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import TypeWriter from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1><TypeWriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Dylan Petzer")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Software Engineer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Dylan Petzer")
  .start();
  }}
  /></h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">Scroll Down</a>

        <div className="me">
          <img src={DYL} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header