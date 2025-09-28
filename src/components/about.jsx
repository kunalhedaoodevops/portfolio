import { memo, useEffect, useRef } from "react";
import "../assets/css/about.css";
import ProfileImage from "../assets/img/profile-img.jpg";
const About = () => {
  return (
    <>
        <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Experienced DevOps Engineer skilled in building robust CI/CD pipelines, automating development
processes, and managing cloud infrastructure (AWS, Azure, GCP). Proficient in Docker, Kubernetes, and
infrastructure as code. Collaborative team player adept at troubleshooting and fostering seamless
collaboration between teams. Committed to staying updated with emerging technologies for innovative
solutions.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={ProfileImage} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 content">
            <h2>Devops Engineer &amp; Software Developer.</h2>
            <p className="fst-italic py-3">
I am an experienced DevOps Engineer skilled in building robust CI/CD pipelines and automating development processes. I have expertise in managing cloud infrastructure (AWS, Azure, GCP), and I'm proficient in technologies like Docker and Kubernetes. My focus is on fostering collaboration and delivering innovative solutions.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>2 February 2025</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>kunaltechdesign.page.gd</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8262082876</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Pune, Maharashtra, India</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>kunalhedaoodevops@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    </>
  );
};

export default About;
