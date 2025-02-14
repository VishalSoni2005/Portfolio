import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Home from './01_Home'
import Project from './03_Projects'
import Timeline from './05_Timeline'
import Skills from './04_Skills'
// import Footer from './06_SocialLinks'
// import Header from './00_Header'
import Intro from './02_Intro'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const lenisRef = useRef(null) // Removed <Lenis | null>

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []); // Initialize AOS


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
      {/* <Header className="sticky top-0  shadow-md z-10 w-screen h-auto" /> */}

      {/* Scrollable Content */}
      <div>
        <section className="relative">
          <div data-aos="fade-up">
            <Home />
          </div>
          <div data-aos="fade-up">
            <Intro />
          </div>
          <div data-aos="fade-up">
            <Project />
          </div>
          <div data-aos="fade-up">
            <Skills />
          </div>
          <div data-aos="fade-up">
            <Timeline />
          </div>
          {/* <div>
            <Footer />
          </div> */}
        </section>
      </div>
    </div>
  )
}

export default App
