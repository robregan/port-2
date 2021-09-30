import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaGithub />, link: "https://www.github.com/robregan" },
  { Social: <FaTwitter />, link: "https://twitter.com/rob_regan_dev" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/robert-regan-dev/" },
];

const Social = () => {
  return (
    <div className="nav justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
