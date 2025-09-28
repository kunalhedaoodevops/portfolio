import { memo, useEffect, useRef } from "react";
import "../assets/css/hero.css";
import heroImage from "../assets/img/hero-bg.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;

    const words = el.getAttribute("data-typed-items")?.split(",") || [];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex].trim();
      let displayText;

      if (isDeleting) {
        displayText = currentWord.substring(0, charIndex--);
      } else {
        displayText = currentWord.substring(0, charIndex++);
      }

      el.textContent = displayText;

      // --- Typing finished ---
      if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 1500); // Pause before deleting
        return;
      }

      // --- Deleting finished ---
      if (isDeleting && charIndex === -1) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Next word
        charIndex = 0;
      }

      const typingSpeed = isDeleting ? 60 : 120; // typing speed
      setTimeout(type, typingSpeed);
    };

    type();

    return () => {
      el.textContent = "";
    };
  }, []);

  return (
    <section id="hero" className="hero section light-background customWidth">
      <img src={heroImage} alt="" />
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Kunal Hedaoo</h2>
            <p>
              I'm{" "}
              <span
                className="typed"
                ref={typedRef}
                data-typed-items="Devops, Developer, Freelancer"
              ></span>
              <span className="typed-cursor typed-cursor--blink" aria-hidden="true">
                |
              </span>
            </p>
            <div className="social-links">
              <a href="https://github.com/kunaldesign">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.facebook.com/kunalhedaoo2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/kunal_hedaoo">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://in.linkedin.com/in/kunal-hedaoo-268b5719a">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
