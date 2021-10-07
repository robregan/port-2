import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>Want to reach out?</h4>
        <p>
          Always available for freelancing if the right project comes along,
          Feel free to contact me.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              Point Pleasant, NJ
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body"><a href="mailto:rsr@robregan.dev">rsr@robregan.dev</a></span>
          </li>
          {/* End li */}

          {/* <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+044 9696 9696 3636</span>
          </li> */}
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
