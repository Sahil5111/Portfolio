import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
const Tools = React.lazy(() => import('./components/Tools'))
const Contact = React.lazy(() => import('./components/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))

import constants from './constants.json'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar data={constants.navbar} mobile={isMobile}/>
        <Header data={constants.header} mobile={isMobile} />
        <About data={constants.about} />
        <Portfolio data={constants.portfolio} mobile={isMobile} />
        <Tools data={constants.tools} />
        <Contact />
        <Footer data={constants.footer} />
      </BrowserRouter>
    </>
  )
}

export default App
