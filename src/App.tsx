import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-[160px]" />
      </div>

      <Navbar />

      <main className="relative">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
