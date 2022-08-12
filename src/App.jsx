import React from 'react'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Services from './components/services/Services'

const App = () => {
  return (
    <>

    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App