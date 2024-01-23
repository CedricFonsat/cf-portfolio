import './App.css'
import About from './components/About'
import Header from './components/Header'
import Project from './components/Project'
import Footer from './layouts/Footer'
import { Navbar } from './layouts/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
      {/* <About/> */}
      <About/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App