import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>READY TO <span className="text-gradient">WIN BIG</span> WITH AINSLEY?</h2>
          <p>Join thousands of sports bettors who are already leveraging Ainsley's AI-powered predictions. Unlock exclusive picks and revealing imagery today.</p>
          <div className="cta-buttons">
            <button className="primary-btn pulse">
              <FontAwesomeIcon icon={faWallet} /> Connect Wallet Now
            </button>
            <button className="secondary-btn">
              <FontAwesomeIcon icon={faInfoCircle} /> Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;