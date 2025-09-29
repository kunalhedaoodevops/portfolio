import { memo, useEffect, useRef } from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
    <div className="container">
      <h3 className="sitename">Kunal Hedaoo</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links d-flex justify-content-center">
        <a href=""><i className="bi bi-github"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-skype"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="container">
        <div className="copyright">
          {/* <span>Copyright</span> <strong className="px-1 sitename">Alex Smith</strong> <span>All Rights Reserved</span> */}
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact.
          You can delete the links only if you've purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: [buy-url]
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
        </div>
      </div>
    </div>
  </footer>
    </>
  );
};

export default Footer;
