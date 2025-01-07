import React from 'react'
import './navbar.css'

import logo from '../../assets/mainlogo.png'
import searchi from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profilei from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="nav-left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse</li>
          </ul>
      </div>

      <div className="nav-right">
        <img src={searchi} alt="search icon" className='icons' />
        <p>Children</p>
        <img src={bell} alt="bell icon" className='icons' />

        <div className="nav-profile">
            <img src={profilei} alt="profile image" className='profile' />
            <img src={caret} alt="caret icon"  />

            <div className="drop">
              <p>Sign Out</p>
            </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar