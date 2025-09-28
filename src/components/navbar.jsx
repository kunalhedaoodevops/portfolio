import { memo, useEffect, useState } from 'react';
import '../assets/css/navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // At least 50% of the section must be visible
    );

    // Observe all sections
    const sections = ['hero', 'about', 'resume', 'portfolio', 'services', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}><i className="bi bi-house navicon"></i><span>Home</span></a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}><i className="bi bi-person navicon"></i><span>About</span></a></li>
        <li><a href="#resume" className={activeSection === 'resume' ? 'active' : ''}><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
        <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}><i className="bi bi-images navicon"></i><span>Portfolio</span></a></li>
        <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}><i className="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;