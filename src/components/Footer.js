import React from 'react';
import logo1 from '../assets/logo192.png';
import logo2 from '../assets/Instagram_Glyph_Gradient_RGB.png';
import logo3 from '../assets/Logo-White-108px-R.png';
import logo4 from '../assets/Twitter social icons - circle - white.png';
// import logo5 from '../assets/WhatsApp_Logo_1.png';
import logo6 from '../assets/yt_logo_rgb_light.png';

import './Footer.css';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className='footer-container'>
      <div className='footer-container-links'>
        <h3 className='footer-text'>About</h3>
        <h3 className='footer-text'>Site Map</h3>
        <h3 className='footer-text'>Services</h3>
      </div>
      <div className='footer-copy-text'>
        <p>Cocktail App! Copyright&copy; {date}</p>
      </div>
      <div className='logo-container-footer'>
        <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' title='ReactJs Docs'>
          <img src={logo1} alt='logo1' />
        </a>
        <a href='https://www.instagram.com/gokceoozan/' target='_blank' rel='noopener noreferrer' title='Instagram Account'>
          <img src={logo2} alt='logo2' />
        </a>
        <a href='https://www.linkedin.com/in/ozan-gokceoglu-907458102/' target='_blank' rel='noopener noreferrer' title='LinkedIn Account'>
        <img src={logo3} alt='logo3' />
        </a>
        <img src={logo4} alt='logo4' />
        {/* <img src={logo5} alt='logo5'/> */}
        <img src={logo6} alt='logo6' />
      </div>
    </div>
  );
}

export default Footer;
