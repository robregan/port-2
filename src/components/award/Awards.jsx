import React from "react";

const AwardContnet = [
  {
    img: "js3",
    awardName: "JavaScript",
  
  },
  {
    img: "react1",
    awardName: "React.js",

  },
  {
    img: "node4",
    awardName: "Node.js",
  
  },
  {
    img: "mongo",
    awardName: "MongoDB",
  
  },
  {
    img: "postgres1",
    awardName: "EJS",
   
  },
  {
    img: "web2",
    awardName: "SCSS frameworks",
    
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div className="col-lg-4 m-15px-tb" key={i}>
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award image" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
