import { memo, useEffect, useRef, useState } from "react"; // Import useState
import "../assets/css/portfolio.css";
import MasonryPortfolio1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import MasonryPortfolio2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import MasonryPortfolio3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";
import MasonryPortfolio4 from "../assets/img/masonry-portfolio/masonry-portfolio-4.jpg";
import MasonryPortfolio5 from "../assets/img/masonry-portfolio/masonry-portfolio-5.jpg";
import MasonryPortfolio6 from "../assets/img/masonry-portfolio/masonry-portfolio-6.jpg";
import MasonryPortfolio7 from "../assets/img/masonry-portfolio/masonry-portfolio-7.jpg";
import MasonryPortfolio8 from "../assets/img/masonry-portfolio/masonry-portfolio-8.jpg";
import MasonryPortfolio9 from "../assets/img/masonry-portfolio/masonry-portfolio-9.jpg";

// Import GLightbox, Isotope, and imagesLoaded
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

const Portfolio = () => {
  const isotopeContainerRef = useRef(null); // Ref for the Isotope items container
  const portfolioSectionRef = useRef(null); // Ref for the entire portfolio section
  const isotopeInstance = useRef(null); // To store the Isotope instance
  const [activeFilter, setActiveFilter] = useState('*'); // State to manage the active filter

  useEffect(() => {
    let lightbox = null;
    let currentIsotope = null;

    // --- GLightbox Initialization ---
    lightbox = GLightbox({
      selector: '.glightbox'
    });

    // --- Isotope Initialization ---
    const isotopeLayoutElement = portfolioSectionRef.current.querySelector('.isotope-layout');
    if (isotopeLayoutElement && isotopeContainerRef.current) {
      const layout = isotopeLayoutElement.getAttribute('data-layout') ?? 'masonry';
      const defaultFilter = isotopeLayoutElement.getAttribute('data-default-filter') ?? '*';
      const sort = isotopeLayoutElement.getAttribute('data-sort') ?? 'original-order';

      // Ensure images are loaded before initializing Isotope for correct layout
      imagesLoaded(isotopeContainerRef.current, () => {
        currentIsotope = new Isotope(isotopeContainerRef.current, {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: defaultFilter,
          sortBy: sort
        });
        isotopeInstance.current = currentIsotope; // Store the instance
        setActiveFilter(defaultFilter); // Set initial active filter state
      });
    }

    // Cleanup function: destroy GLightbox and Isotope instances when component unmounts
    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
      if (isotopeInstance.current) {
        isotopeInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Effect to re-arrange Isotope when the active filter changes
  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({ filter: activeFilter });
      // If you are using AOS (Animate On Scroll) and want animations to re-trigger
      // after filtering, you might need to call AOS.refresh() here.
      // Example: if (typeof AOS !== 'undefined' && typeof AOS.refresh === 'function') { AOS.refresh(); }
    }
  }, [activeFilter]); // Re-run this effect when activeFilter changes

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue);
  };

  return (
    <>
      <section id="portfolio" className="portfolio section" ref={portfolioSectionRef}> {/* Add ref to the section */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="container">
          <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
              <li
                data-filter="*"
                className={activeFilter === '*' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('*')}
              >All</li>
              <li
                data-filter=".filter-app"
                className={activeFilter === '.filter-app' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-app')}
              >App</li>
              <li
                data-filter=".filter-product"
                className={activeFilter === '.filter-product' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-product')}
              >Card</li>
              <li
                data-filter=".filter-branding"
                className={activeFilter === '.filter-branding' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-branding')}
              >Web</li>
            </ul>

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200" ref={isotopeContainerRef}> {/* Add ref to the isotope container */}

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src={MasonryPortfolio1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio1} title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={MasonryPortfolio2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio2} title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src={MasonryPortfolio3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio3} title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src={MasonryPortfolio4} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio4} title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={MasonryPortfolio5} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio5} title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src={MasonryPortfolio6} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio6} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img src={MasonryPortfolio7} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio7} title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img src={MasonryPortfolio8} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio8} title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img src={MasonryPortfolio9} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a href={MasonryPortfolio9} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default memo(Portfolio);
