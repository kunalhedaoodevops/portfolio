import { memo } from 'react';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
        <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i><span>Home</span></a></li>
        <li><a href="#about"><i className="bi bi-person navicon"></i><span>About</span></a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
        <li><a href="#portfolio"><i className="bi bi-images navicon"></i><span>Portfolio</span></a></li>
        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;