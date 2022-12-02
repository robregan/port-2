import React from 'react'
import { Tabs, TabPanel } from 'react-tabs'

import { FiPlus } from 'react-icons/fi'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
}

const AllPortfolioContent = [
  {
    img: 'feedback',
    title: 'Feedback App',
    subTitle: 'Leave ratings and reviews for products and services!',
    link: 'https://product-review-ui.netlify.app/',
    code: 'https://github.com/robregan/feedback-ui',
  },
  {
    img: 'gh',
    title: 'GitHub User Search',
    subTitle: 'React App to search user profiles by name or username',
    link: 'https://github-finda.netlify.app/',
    code: 'https://github.com/robregan/github-user-search',
  },
  {
    img: 'eth2',
    title: 'Web3 App',
    subTitle:
      'Send ETH anywhere in the world! A gif and a message will be forever attached to your transaction on the blockchain',
    link: 'https://cryptobobby.digital/',
    code: 'https://github.com/robregan/web3app',
  },
  {
    img: 'chill3',
    title: 'Chillow Marketplace',
    subTitle: 'Browse current listings or post your property for sale!',
    link: 'https://chillow.netlify.app/',
    code: 'https://github.com/robregan/house-market-app',
  },
  {
    img: 'face9',
    title: 'AI Emotion Analyzer',
    subTitle:
      'Users upload a photo and the program will analyze the emotions of detected faces.',
    link: 'https://emotion-check.herokuapp.com/',
    code: 'https://github.com/robregan/emotion-check',
  },
  {
    img: 'thumbstore',
    title: 'ProShop',
    subTitle: 'Ecommerce store with PayPal integration',
    link: 'https://ecom-app-802.herokuapp.com/',
    code: 'https://github.com/robregan/anothaOne',
  },

  {
    img: 'inv2',
    title: 'MERN Inventory App',
    subTitle: 'login to see stats about your store',
    link: 'https://inventory-802.netlify.app/',
    code: 'https://github.com/robregan/inventory',
  },
  {
    img: 'object',
    title: 'Object Detector',
    subTitle: 'Upload an image and our AI will detect any objects.',
    link: 'https://object-detecta.herokuapp.com/',
    code: 'https://github.com/robregan/object-finder',
  },
  {
    img: 'help',
    title: 'Support Desk',
    subTitle: 'Users can login and create support tickets',
    link: 'https://customer-tickets.herokuapp.com/',
    code: 'https://github.com/robregan/support-desk',
  },
]

const PortfolioAnimation = () => {
  return (
    <div className='portfolio-filter-01'>
      <Tabs>
        <TabPanel>
          <div className='portfolio-content '>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className='my-masonry-grid'
              columnClassName='my-masonry-grid_column'
            >
              {AllPortfolioContent.map((val, i) => (
                <div
                  className='portfolio-box-01'
                  key={i}
                  data-aos='fade-right'
                  data-aos-duration='1200'
                  data-aos-delay={val.delayAnimation}
                >
                  <div className='portfolio-img'>
                    <img
                      src={`img/portfolio/${val.img}.jpg`}
                      alt={val.alterText}
                    />
                  </div>

                  <div className='siteCode'>
                    <h4>
                      <a
                        href={`${val.link}`}
                        target='_blank'
                        className='gallery-link'
                      >
                        Live Site
                      </a>
                    </h4>

                    <p className='siteCode wutang'>{val.title}</p>

                    <h4 className='code'>
                      {' '}
                      <a
                        href={`${val.code}`}
                        target='_blank'
                        className='gallery-link'
                      >
                        Code
                      </a>
                    </h4>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>

          {/* End list wrapper */}
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default PortfolioAnimation
