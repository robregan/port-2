import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
       
          <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5817.772015760965!2d-72.81789972181929!3d43.19090263872229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e05165a359b175%3A0x60c46e19ea9c2450!2sSouth%20Londonderry%2C%20Londonderry%2C%20VT!5e0!3m2!1sen!2sus!4v1663199704902!5m2!1sen!2sus"  width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
