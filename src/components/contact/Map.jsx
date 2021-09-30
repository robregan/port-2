import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
       
          <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24422.008283456307!2d-74.0796530745481!3d40.080965181941544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c185cb14c7c745%3A0x9a42389802fa0026!2sPT%20PLEAS%20BCH%2C%20NJ%2008742!5e0!3m2!1sen!2sus!4v1633002300910!5m2!1sen!2sus"  width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
