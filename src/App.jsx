import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import constants from './constants.json'

function App() {

  return (
    <>
      <Navbar data={constants.navbar} />
      <Header data={constants.header} />
      <About data={constants.about} />
      <Footer data={constants.footer} />
    </>
  )
}

export default App
