import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/robregan" },
  { Social: <FaTwitter />, link: "https://twitter.com/rob_regan_dev" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/robert-regan-dev/" },
  ];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
               <h1 className="socials">{val.Social}</h1>
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        {/* <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes
            </a>{" "}
            all right reserved
          </p>
        </div> */}
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
