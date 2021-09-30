import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
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
    img: "story",
    title: "StoryBook App",
    subTitle: "Users can post private and public stories to the dashboard",
    
    link: 'https://thawing-bayou-76342.herokuapp.com/',
  },
  {
    img: "gypsy",
    title: "Age Guesser App",
    subTitle: "With Azure's Cognitive Services, this app will guess your age!",
    link: 'https://gypsy-queen.herokuapp.com/',
  },
  {
    img: "books",
    title: "Campus Catalogs",
    subTitle: "A Place to Buy and Sell Used Collge Textbooks",
    link: "https://campus-catalogs.herokuapp.com/"
  },
  {
    img: "face",
    title: "Ai Emotion Analyzer",
    subTitle: "Face Detection Ai App",
    link: "https://emotion-check.herokuapp.com/",
  },
  {
    img: "text",
    title: "Text Sentiment Analyzer",
   subTitle: "enter in text and this program will analyze it!",
   link: "https://text-checka.herokuapp.com/",
  },
  {
    img: "spotify",
    title: "Spotify Clone React",
    subTitle: "web player for spotify",
    link: "https://sp0tify-cl0ne.herokuapp.com/",
  },
  {
    img: "reddit",
    title: "Reddit for Devs",
    subTitle: "post pics for the feed",
    link: "https://reddit-for-devs.herokuapp.com/",
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
//   },
//   {
//     img: "m-portfolio-3",
//     title: "Visual Design",
//     subTitle: "Themeforest Marke",
//     alterText: "Business Mockup",
//   },
//   {
//     img: "m-portfolio-8",
//     title: "Chatting App Design",
//     subTitle: "Codecanyon Market",
//     alterText: "Chatting App Design",
//   },
//   {
//     img: "m-portfolio-4",
//     title: "Business Card",
//     subTitle: "Graphicriver Market",
//     alterText: "E-Cosmetics",
//   },
// ];
// const PhotographyPortfolioContent = [
//   {
//     img: "m-portfolio-2",
//     title: "E-Learning App",
//     subTitle: "Nuna ios App",
//     alterText: "Illustration",
//   },

//   {
//     img: "m-portfolio-5",
//     title: "Chatting Application",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//   },
//   {
//     img: "m-portfolio-6",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//   },
// ];

// const FashionPortfolioContent = [
//   {
//     img: "m-portfolio-1",
//     title: "Bottle Illustration",
//     subTitle: "Figma Shoot",
//     alterText: "Bottle Illustration",
//   },
//   {
//     img: "m-portfolio-7",
//     title: "Business Card",
//     subTitle: "Graphicriver Market",
//     alterText: "Business Card",
//   },
//   {
//     img: "m-portfolio-9",
//     title: "Web Motion",
//     subTitle: "Behance Shot",
//     alterText: "Web Motion",
//   },
// ];

// const ProductPortfolioContent = [
//   {
//     img: "m-portfolio-2",
//     title: "E-Learning App",
//     subTitle: "Nuna ios App",
//     alterText: "Illustration",
//   },
//   {
//     img: "m-portfolio-3",
//     title: "Visual Design",
//     subTitle: "Themeforest Marke",
//     alterText: "Business Mockup",
//   },

//   {
//     img: "m-portfolio-5",
//     title: "Chatting Application",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//   },
//   {
//     img: "m-portfolio-6",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//   },
// ];

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="portfolio-filter-01">
        <Tabs>
          
          {/* End tablist */}

      
            <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {AllPortfolioContent.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
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
                    <div className="portfolio-box-01" key={i}>
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
                    <div className="portfolio-box-01" key={i}>
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
            {/* </TabPanel> */}

            {/* <TabPanel>
              <div className="portfolio-content">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {FashionPortfolioContent.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
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
            {/* </TabPanel> */}

            {/* <TabPanel>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {ProductPortfolioContent.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
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
            {/* </TabPanel> */}
         
          {/* End tabpanel */}
        </Tabs>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
