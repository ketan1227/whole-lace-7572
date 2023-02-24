import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links-column">
          <h3 className="footer__title">ONLINE SHOPPING</h3>
          <ul className="footer__list">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Home & Living</a></li>
            <li><a href="#">Beauty</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Myntra Insider</a></li>
          </ul>
        </div>
        <div className="footer__links-column">
          <h3 className="footer__title">USEFUL LINKS</h3>
          <ul className="footer__list">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Whitehat</a></li>
          </ul>
        </div>
        <div className="footer__useful-links-column">
          <h3 className="footer__title">CUSTOMER POLICIES</h3>
          <ul className="footer__list">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">T&C</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Track Orders</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Grievance Officer</a></li>
          </ul>
        </div>
        <div className="footer__useful-links-column">
          <h3 className="footer__title">EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="footer__mobile-apps">
            <a href="#"><img src="https://th.bing.com/th/id/OIP.31CQI8Mh0d67Xfx9pBGL1wHaF0?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Google Play" /></a>
            <a href="#"><img src="https://th.bing.com/th/id/OIP.z_D7I8ja-bCWHjtujdrDLwHaHZ?w=154&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="App Store" /></a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">&copy; 2023 www.myntra.com. All rights reserved.</p>
        <p className="footer__address">Registered Office Address</p>
      </div>
    </footer>
  );
}

export default Footer;
