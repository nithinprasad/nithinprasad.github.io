import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DownloadResume from './components/DownloadResume';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Loader from './components/Loader';
import GoToTop from './components/GoToTop';

function App() {
  useEffect(() => {
    // Load external scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript('/js/jquery.min.js');
        await loadScript('/js/jquery.easing.1.3.js');
        await loadScript('/js/bootstrap.min.js');
        await loadScript('/js/jquery.waypoints.min.js');
        await loadScript('/js/jquery.stellar.min.js');
        await loadScript('/js/jquery.easypiechart.min.js');
        // Google Maps disabled - no map element in React app
        await loadScript('/js/main.js');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();
  }, []);

  return (
    <div>
      <Loader />
      <div id="page">
        <Header />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <DownloadResume />
        <Roadmap />
        <Contact />
      </div>
      <GoToTop />
    </div>
  );
}

export default App;
