import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Home from './Home'
import Project from './Projects'
import Timeline from './Timeline'
import Skills from './Skills'
import Footer from './SocialLinks'
import Header from './header'
import Intro from './Intro'

function App() {
  const lenisRef = useRef(null) // Removed <Lenis | null>

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
    })

    // Set reference
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-[#FFFFF0] min-h-screen text-4xl relative">
      {/* Sticky Header */}
      <Header className="sticky top-0  shadow-md z-10 w-screen h-auto" />

      {/* Scrollable Content */}
      <div>
        <section className="relative">
          <div>
            <Home />
          </div>
          <div>
            <Intro />
          </div>
          <div>
            <Project />
          </div>
          <div>
            <Timeline />
          </div>
          <div>
            <Skills />
          </div>
          <div>
            <Footer />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
