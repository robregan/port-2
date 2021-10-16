import React from "react";

const ServiceContent = [
  {
    icon: "icon-browser",
    title: "JavaScript",
    // descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    // eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    delayAnimation: "",
  },
  {
    icon: "icon-genius",
    title: "React.js",
    // descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    // eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-adjustments",
    title: "Node.js",
    // descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    // eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    delayAnimation: "400",
  },
  {
    icon: "icon-documents",
    title: "MongoDB",
    // descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    // eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    delayAnimation: "",
  },
  {
    icon: "icon-newspaper",
    title: "PostgreSQL",
    // descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    // eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-global",
    title: "Web Accessibility",
    // descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    // eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">

                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
