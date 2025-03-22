import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Home from './01_Home';
import Project from './03_Projects';
import Timeline from './05_Timeline';
import Skills from './04_Skills';
import Intro from './02_Intro';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const lenisRef = useRef(null); // Removed <Lenis | null>

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    // Set reference
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
          <div data-aos="fade-left">
            <Project />
          </div>
          <div data-aos="fade-right">
            <Skills />
          </div>
          <div data-aos="fade-left">
            <Timeline />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
