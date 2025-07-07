import React, { useEffect } from 'react'
import AppRouts from './Routes/AppRouts'
import Lenis from "lenis";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
     <AppRouts/>
    </>
  )
}

export default App
