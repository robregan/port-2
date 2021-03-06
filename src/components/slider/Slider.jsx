import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
 
  email: "rsr@robregan.dev",
};

const sliderContent = {
  name: "Robert Regan",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web
  services and online stores.`,
  btnText: "My Resume",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
           
            <a href="mailto:rsr@robregan.dev">
              {conctInfo.email}
            </a>
          </div>

        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">Full Stack Web Developer</p>
                  <p className="loop-text lead">Avid Snowboarder</p>
                  <p className="loop-text lead">Husband and Yogi</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="https://drive.google.com/file/d/1Hl27UToMIMBu-C3X2fK5YAprzxvaeQ3p/view?usp=sharing"
                    target="_blank"
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/img/slider/colorado.jpg" 
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
