import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faWallet } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <FontAwesomeIcon icon={faRobot} /> AINSLEY.AI
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Sports</a>
            <a href="#">NFTs</a>
            <a href="#">Tokenomics</a>
            <a href="#">About</a>
          </div>
          <button className="wallet-btn">
            <FontAwesomeIcon icon={faWallet} /> Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;