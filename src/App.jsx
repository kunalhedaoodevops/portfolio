import { useState, useEffect } from 'react';
import Navbar from "./components/navbar"
import Main from "./components/main"
import Footer from "./components/footer"
import './App.css';
import AOS from 'aos'; // Import AOS

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false); // State for scroll-top button

  useEffect(() => {
    // --- Preloader ---
    const preloaderTimer = setTimeout(() => {
      setShowPreloader(false);
    }, 500); // Hide preloader after 500ms

    // --- Scroll Top Button ---
    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    // --- AOS Initialization ---
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    // AOS.refresh() can be called here if content changes dynamically after initial load
    // AOS.refresh();

    // Cleanup function for all effects
    return () => {
      clearTimeout(preloaderTimer);
      window.removeEventListener('load', toggleScrollTop);
      document.removeEventListener('scroll', toggleScrollTop);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const handleHeaderToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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

      {/* Scroll Top Button */}
      {showScrollTopButton && (
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center active" // 'active' class for visibility
          onClick={handleScrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}

      <Footer />
    </div>
  )
}

export default App