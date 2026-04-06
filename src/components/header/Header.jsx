import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { FiUser, FiBriefcase, FiPhoneOutgoing } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      {/* Header */}
      <div className='mob-header'>
        <button
          className='toggler-menu'
          onClick={handleClick}
          aria-label='Toggle navigation menu'
        >
          <div className={click ? 'active' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? 'header-left menu-open' : 'header-left '}>
        <div className='scroll-bar'>
          <div className='hl-top'>
            <div className='hl-logo'>
              <Link to='/'>RR</Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className='nav nav-menu'
            items={['home', 'about', 'work', 'contactus']}
            currentClassName='active'
            offset={-30}
          >
            <li>
              <a
                className='nav-link '
                href='#home'
                data-tip
                aria-label='Home'
                data-for='HOME'
                onClick={handleClick}
              >
                <FaHome />
                <ReactTooltip id='HOME' place='top' type='dark' effect='float'>
                  <span>Home</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className='nav-link'
                href='#about'
                data-tip
                aria-label='About'
                data-for='ABOUT'
                onClick={handleClick}
              >
                <FiUser />
                <ReactTooltip id='ABOUT' place='top' type='dark' effect='float'>
                  <span>About</span>
                </ReactTooltip>
              </a>
            </li>

            <li>
              <a
                className='nav-link'
                href='#work'
                data-tip
                aria-label='Work'
                data-for='WORK'
                onClick={handleClick}
              >
                <FiBriefcase />
                <ReactTooltip id='WORK' place='top' type='dark' effect='float'>
                  <span>Recent Projects</span>
                </ReactTooltip>
              </a>
            </li>

            <li>
              <a
                className='nav-link'
                href='#contactus'
                data-tip
                aria-label='Contact'
                data-for='CONTACT'
                onClick={handleClick}
              >
                <FiPhoneOutgoing />
                <ReactTooltip
                  id='CONTACT'
                  place='top'
                  type='dark'
                  effect='float'
                >
                  <span>Contact</span>
                </ReactTooltip>
              </a>
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  )
}

export default Header
