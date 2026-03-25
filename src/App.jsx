import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/globals.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}