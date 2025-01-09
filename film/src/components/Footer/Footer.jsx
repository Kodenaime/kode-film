import React from 'react'
import './footer.css'

import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icons'>
          <img src={instagram} alt="Instagram Icon" />
          <img src={youtube} alt="Youtube Icon" />
          <img src={twitter} alt="Twitter Icon" />
          <img src={facebook} alt="Facebook Icon" />
        </div>

        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Media Center</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notes</li>
          <li>Cookies</li>
          <li>Investor Relations</li>
          {/* <li>Audio Description</li>
          <li>Audio Description</li> */}
          <li>Contact Us</li>
        </ul>

        <p className='copy'>Kode Movies 2025</p>

    </div>
  )
}

export default Footer