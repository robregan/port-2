import React from "react";
import Social from "../Social";
import Awards from "../../components/award/Awards";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>JavaScript Guru</p>
                  <h3>Rob Regan</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                  I am a software engineer based out of New Jersey, specializing in fullstack JavaScript. If I am not coding a project or learning new material, I am most likely practicing yoga, snowboarding in the Rockies, or just relaxing with the wife and dog.
                  </p>
                  <p>
                  Since High School, I have always had an interest in tinkering with my devices, from installing Game Boy Advanced emulators on my TI89 graphing calculator, to jailbreaking my iPhone for a <strong><em>much</em></strong> better user experience. I have really been enjoying building wonderful web apps that provide value to my community.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Robert Regan</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>December 2</span>
                        </li>
                        
                        
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>  
                      <li>
                          <label>Address: </label>
                          <span>Pt. Pleasant, NJ</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>rsr@robregan.dev</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          {/* <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services /> */}
          {/* End .row */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          <div className="title">
            <h3>Skills.</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div> 
      </section>
    </>
  );
};

export default About;
