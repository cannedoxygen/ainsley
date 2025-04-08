import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faChevronRight, 
  faFootballBall, 
  faBasketballBall, 
  faBaseballBall,
  faFutbol, 
  faFistRaised, 
  faQuestionCircle, 
  faBook, 
  faHeadset, 
  faShieldAlt, 
  faFileContract
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter, 
  faDiscord, 
  faTelegram, 
  faMedium
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo" style={{marginBottom: '1rem'}}>
              <FontAwesomeIcon icon={faRobot} /> AINSLEY.AI
            </div>
            <p>AI-powered sports predictions with tiered NFTs that reveal more as you upgrade. Get an edge on your sports betting with our cutting-edge technology.</p>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faDiscord} /></a>
              <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
              <a href="#"><FontAwesomeIcon icon={faMedium} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#"><FontAwesomeIcon icon={faChevronRight} /> Home</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faChevronRight} /> Sports Categories</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faChevronRight} /> NFT Marketplace</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faChevronRight} /> Token Information</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faChevronRight} /> About Ainsley.AI</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Sports Categories</h4>
            <ul className="footer-links">
              <li><a href="#"><FontAwesomeIcon icon={faFootballBall} /> Football</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faBasketballBall} /> Basketball</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faBaseballBall} /> Baseball</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFutbol} /> Soccer</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFistRaised} /> Boxing/UFC</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Help & Support</h4>
            <ul className="footer-links">
              <li><a href="#"><FontAwesomeIcon icon={faQuestionCircle} /> FAQs</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faBook} /> Documentation</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faHeadset} /> Customer Support</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faShieldAlt} /> Privacy Policy</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFileContract} /> Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ainsley.AI. All rights reserved. Not affiliated with any sports league or organization.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;