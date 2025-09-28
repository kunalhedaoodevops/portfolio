import { useState, useEffect } from 'react';
import Navbar from "./components/navbar"
import Main from "./components/main"
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true); // State to control preloader visibility

  useEffect(() => {
    // Simulate window.onload by setting a timeout to hide the preloader
    // You might adjust the delay or tie this to actual asset loading if needed
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 500); // Hide preloader after 500ms

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleHeaderToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const headerClasses = `header d-flex flex-column justify-content-center ${isMenuOpen ? 'header-show' : ''}`;
  const toggleIconClasses = `header-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`;

  return (
    <div style={{width:'100%'}}>
      {showPreloader && (
        // This is your preloader element. You'll need to style it in App.css
        // or a dedicated preloader.css file.
        <div id="preloader"></div>
      )}

      <header id="header" className={headerClasses}>
        <i className={toggleIconClasses} onClick={handleHeaderToggle}></i>
        <Navbar />
      </header>
      <main className="main">
        <Main />
      </main>
    </div>
  )
}

export default App