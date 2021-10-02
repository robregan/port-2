import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Slider from "../../components/slider/Slider";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Map from "../../components/contact/Map";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeTwo = () => {
  useDocumentTitle("Robert Regan's Portfolio");
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
            <ul className="repos">
            <li><a href="https://github.com/robregan/storytime" target="_blank">Storybooks App</a></li>
            <li><a href="https://github.com/robregan/face-analyza" target="_blank">Age Guesser</a></li>
            <li><a href="https://github.com/robregan/books-for-you" target="_blank">Campus Catalogs</a></li>
            <li><a href="https://github.com/robregan/emotion-check" target="_blank">Ai Emotion Analyzer</a></li>
            <li><a href="https://github.com/robregan/text-analyzer" target="_blank">Text Sentiment Analysis</a></li>
            <li><a href="https://github.com/robregan/drum-machine/" target="_blank">JavaScript Drum Kit</a></li>
            <li><a href="https://github.com/robregan/reddit" target="_blank">Reddit Clone</a></li>
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

      {/* <section id="blog" className="section ">
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
            <div className="col-lg-5 col-xl-4 m-15px-tb">
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div className="col-lg-7 ml-auto m-15px-tb  ">
              <div className="contact-form">
                <h4>Get in touch!</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}

            <div className="col-12">
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

export default HomeTwo;
