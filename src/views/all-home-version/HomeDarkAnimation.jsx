import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderAnimation";
import About from "../../components/about/AboutAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Map from "../../components/contact/Map";
import Footer from "../../components/footer/FooterAnimation";
import useDocumentTitle from "../../components/useDocumentTitle";



const HomeOne = () => {
  useDocumentTitle(
    "Robert Regan's Portfolio"
  );
  return (
    <div className="main-left theme-dark">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

    
      {/* End Resume Section */}

      <section id="work" className="section theme-light dark-bg">
        <div className="container">
          <div className="title">
               
          <h3>Some Recent Projects.</h3>
            <h5 className="github">GitHub Repo's</h5>
            <div>
            <ul className="repos" id="bambi">
            <li><a href="https://github.com/robregan/feedback-ui" target="_blank">Feedback UI App</a></li>
            <li><a href="https://github.com/robregan/face-analyza" target="_blank">Age Guesser</a></li>
            <li><a href="https://github.com/robregan/books-for-you" target="_blank">Campus Catalogs</a></li>
            <li><a href="https://github.com/robregan/emotion-check" target="_blank">AI Emotion Analyzer</a></li>
            <li><a href="https://github.com/robregan/text-analyzer" target="_blank">Text Sentiment Analysis</a></li>
            <li><a href="https://github.com/robregan/employee-chat" target="_blank">Medical Pager</a></li>
            <li><a href="https://github.com/robregan/reddit" target="_blank">Reddit Clone - WIP</a></li>
            <li><a href="https://github.com/robregan/object-finder" target="_blank">Object Recognition</a></li>
            <li><a href="https://github.com/robregan/translator" target="_blank">Voice Translator</a></li>
            </ul>
            </div>
          </div>
          <h5 className="github">Live Versions</h5>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio Section */}

      {/* <section id="blog" className="section">
        <div className="container">
          <div className="title">
            <h3>Latest Blog.</h3>
          </div>
          <Blog />
        </div>
      </section> */}
      {/* End Portfolio Section */}

      <section id="contactus" className="section theme-light dark-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                <h4>Get in touch!</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}

            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Map />
              {/* End google-map */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default HomeOne;
