import React from 'react'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
// import Tools from './components/Tools'
const Tools = React.lazy(()=> import('./components/Tools'))
// import Contact from './components/Contact'
const Contact = React.lazy(()=> import('./components/Contact'))
// import Footer from './components/Footer'
const Footer = React.lazy(()=> import('./components/Footer'))

import constants from './constants.json'

function App() {

  return (
    <>
      <Navbar data={constants.navbar} />
      <Header data={constants.header} />
      <About data={constants.about} />
      <Portfolio data={constants.portfolio} />
      <Tools data={constants.tools} />
      <Contact/>
      <Footer data={constants.footer} />
    </>
  )
}

export default App
