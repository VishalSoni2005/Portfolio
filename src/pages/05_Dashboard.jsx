import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
export default function About() {
  const lenisRef = useRef(null); // Removed <Lenis | null>

  useEffect(() => {
    // Initialize Lenis
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
    <div className="text-3xl h-screen flex items-center justify-center bg-amber-700 text-white">
      <h1>About</h1>
    </div>
  );
}
