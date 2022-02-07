import React from "react";
import {Tabs, TabPanel } from "react-tabs";


import { FiPlus } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};


const AllPortfolioContent = [
  {
    img: "feedback",
    title: "Feedback UI App",
    subTitle: "Leave ratings and reviews for products and services!",
    
    link: 'https://product-review-ui.netlify.app/',
  },
  {
    img: "gypsy",
    title: "Age Guesser App",
    subTitle: "With Azure's Cognitive Services, this app will guess your age!",
    link: 'https://gypsy-queen.herokuapp.com/',
  },
  {
    img: "eth2",
    title: "Web3 App",
    subTitle: "Send ETH anywhere in the world! A gif will be forever attached to your transaction on the blockchain",
    link: "https://cryptobobby.digital/"
  },
  {
    img: "face",
    title: "AI Emotion Analyzer",
    subTitle: "Face Detection AI App",
    link: "https://emotion-check.herokuapp.com/",
  },
  {
    img: "text",
    title: "Text Sentiment Analyzer",
   subTitle: "enter in text and this program will analyze it!",
   link: "https://text-checka.herokuapp.com/",
  },
  {
    img: "chat4",
    title: "Medical Pager",
    subTitle: "Chat app for your workspace with tons of features",
    link: "https://employee-chat.netlify.com/",
  },
  {
    img: "gh",
    title: "GitHub User Search",
    subTitle: "Lookup Github Profiles using their API!",
    link: "https://github-finda.netlify.app/",
  },
  {
    img: "object",
    title: "Object Recognition App",
    subTitle: "Upload an image and our AI will detect any objects",
    link: "https://object-detecta.herokuapp.com/",
  },
  {
    img: "translate",
    title: "Voice Translation App",
    subTitle: "Speak into the mic and this program will translate it to any language!",
    link: "https://transl8or.herokuapp.com/",
  },
];

// const BrandingPortfolioContent = [
//   {
//     img: "m-portfolio-6",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//     delayAnimation: "",
//   },
//   {
//     img: "m-portfolio-3",
//     title: "Visual Design",
//     subTitle: "Themeforest Marke",
//     alterText: "Business Mockup",
//     delayAnimation: "100",
//   },
//   {
//     img: "m-portfolio-8",
//     title: "Chatting App Design",
//     subTitle: "Codecanyon Market",
//     alterText: "Chatting App Design",
//     delayAnimation: "200",
//   },
//   {
//     img: "m-portfolio-4",
//     title: "Business Card",
//     subTitle: "Graphicriver Market",
//     alterText: "E-Cosmetics",
//     delayAnimation: "300",
//   },
// ];
// const PhotographyPortfolioContent = [
//   {
//     img: "m-portfolio-2",
//     title: "E-Learning App",
//     subTitle: "Nuna ios App",
//     alterText: "Illustration",
//     delayAnimation: "",
//   },

//   {
//     img: "m-portfolio-5",
//     title: "Chatting Application",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//     delayAnimation: "100",
//   },
//   {
//     img: "m-portfolio-6",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//     delayAnimation: "200",
//   },
// ];

// const FashionPortfolioContent = [
//   {
//     img: "m-portfolio-1",
//     title: "Bottle Illustration",
//     subTitle: "Figma Shoot",
//     alterText: "Bottle Illustration",
//     delayAnimation: "",
//   },
//   {
//     img: "m-portfolio-7",
//     title: "Business Card",
//     subTitle: "Graphicriver Market",
//     alterText: "Business Card",
//     delayAnimation: "100",
//   },
//   {
//     img: "m-portfolio-9",
//     title: "Web Motion",
//     subTitle: "Behance Shot",
//     alterText: "Web Motion",
//     delayAnimation: "200",
//   },
// ];

// const ProductPortfolioContent = [
//   {
//     img: "m-portfolio-2",
//     title: "E-Learning App",
//     subTitle: "Nuna ios App",
//     alterText: "Illustration",
//     delayAnimation: "",
//   },
//   {
//     img: "m-portfolio-3",
//     title: "Visual Design",
//     subTitle: "Themeforest Marke",
//     alterText: "Business Mockup",
//     delayAnimation: "100",
//   },

//   {
//     img: "m-portfolio-5",
//     title: "Chatting Application",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//     delayAnimation: "200",
//   },
//   {
//     img: "m-portfolio-6",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//     delayAnimation: "300",
//   },
// ];

const PortfolioAnimation = () => {
  return (
 
      <div className="portfolio-filter-01">
        <Tabs>
          {/* <TabList className="filter d-flex flex-wrap justify-content-start">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList> */}
          {/* End tablist */}

         
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                          <a href={val.link}></a>
                        </div>
                        {/* End .portfolio-info */}
                        <a
                          href={`${val.link}`} target='_blank'
                          className="gallery-link"
                        >
                          
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a>
                        {/* End gallery link */}

                        <div className="portfolio-icon">
                          <FiPlus />
                        </div>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>

            {/* <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {BrandingPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div> */}
                        {/* End .portfolio-info */}
                        {/* <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a> */}
                        {/* End gallery link */}

                        {/* <div className="portfolio-icon">
                          <FiPlus />
                        </div> */}
                        {/* End .portfolio-icon */}
                      {/* </div>
                    </div>
                  ))}
                </Masonry> */}
                {/* grid item  */}
              {/* </div> */}

              {/* End list wrapper */}
            {/* </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {PhotographyPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div> */}
                        {/* End .portfolio-info */}
                        {/* <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a> */}
                        {/* End gallery link */}

                        {/* <div className="portfolio-icon">
                          <FiPlus />
                        </div> */}
                        {/* End .portfolio-icon */}
                      {/* </div>
                    </div>
                  ))}
                </Masonry>
              </div> */}
              {/* End list wrapper */}
            {/* </TabPanel>

            <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {FashionPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div> */}
                        {/* End .portfolio-info */}
                        {/* <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a> */}
                        {/* End gallery link */}

                        {/* <div className="portfolio-icon">
                          <FiPlus />
                        </div> */}
                        {/* End .portfolio-icon */}
                      {/* </div>
                    </div>
                  ))}
                </Masonry>
              </div> */}
              {/* End list wrapper */}
            {/* </TabPanel>

            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {ProductPortfolioContent.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>{val.title}</h5>
                          <span>{val.subTitle}</span>
                        </div> */}
                        {/* End .portfolio-info */}
                        {/* <a
                          href={`img/portfolio/${val.img}.jpg`}
                          className="gallery-link"
                        >
                          <img
                            src={`img/portfolio/${val.img}.jpg`}
                            alt={val.alterText}
                          />
                        </a> */}
                        {/* End gallery link */}
{/* 
                        <div className="portfolio-icon">
                          <FiPlus />
                        </div> */}
                        {/* End .portfolio-icon */}
                      {/* </div>
                    </div>
                  ))}
                </Masonry>
              </div> */}
              {/* End list wrapper */}
            {/* </TabPanel> */}
     
          {/* End tabpanel */}
        </Tabs>
      </div>
 
  );
};

export default PortfolioAnimation;
