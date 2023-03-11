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
    img: 'dalle',
    title: 'AI Image Generator',
    link: 'https://image-generator.com/',
    code: 'https://github.com/robregan/dalle',
  },
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
    img: 'openai',
    title: 'Rob-oT: GPT-3 Chatbot',
    subTitle: 'Chat with a bot that uses GPT-3 to generate responses',
    link: 'https://openai-chi.vercel.app/',
    code: 'https://github.com/robregan/openai',
  },
  {
    img: 'pink',
    title: 'Facial Spa Website',
    subTitle:
      'Users upload a photo and the program will analyze the emotions of detected faces.',
    link: 'https://pinkglowfacialroom.com',
    code: 'https://github.com/robregan/pinkglow-new-1',
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
                    <a
                      href={`${val.link}`}
                      target='_blank'
                      className='gallery-link'
                    >
                      <img
                        src={`img/portfolio/${val.img}.jpg`}
                        alt={val.alterText}
                      />
                    </a>
                  </div>

                  <div className='siteCode'>
                    {/* <h4>
                      <a
                        href={`${val.link}`}
                        target='_blank'
                        className='gallery-link'
                      >
                        Live Site
                      </a>
                    </h4> */}
                    <a
                      href={`${val.link}`}
                      target='_blank'
                      className='gallery-link'
                    >
                      <p className='siteCode wutang'>{val.title}</p>
                    </a>

                    <h4 className='code'>
                      {' '}
                      <a href={`${val.code}`} target='_blank' className='bobby'>
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
