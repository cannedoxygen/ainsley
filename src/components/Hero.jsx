import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWallet, 
  faGem, 
  faBaseballBall, 
  faFutbol, 
  faFistRaised, 
  faGolfBall, 
  faFootballBall 
} from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section className="hero">
      <div className="container" style={{display: 'flex', alignItems: 'center'}}>
        <div className="hero-content">
          <div className="hero-slogan">Powered by AI, Inspired by Beauty</div>
          <h1>UNLOCK <span>HOT PICKS</span> & WINNING PREDICTIONS</h1>
          <p>Ainsley combines cutting-edge AI with stunning visuals. Purchase tiered NFTs to unlock more predictions and more revealing imagery across 10 sports categories.</p>
          <div className="hero-cta">
            <button className="primary-btn pulse">
              <FontAwesomeIcon icon={faWallet} /> Connect Wallet & Enter
            </button>
            <button className="secondary-btn">
              <FontAwesomeIcon icon={faGem} /> Buy Ainsley NFT
            </button>
          </div>
        </div>
        
        <div className="hero-marquee">
          <div className="marquee-container">
            <div className="marquee-track">
              {/* First set of images */}
              <div className="marquee-item">
                <img src="/assets/images/baseball-ainsley.jpg" alt="Baseball Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faBaseballBall} /> Baseball
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <img src="/assets/images/soccer-ainsley.jpg" alt="Soccer Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faFutbol} /> Soccer
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <img src="/assets/images/boxing-ainsley.jpg" alt="Boxing Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faFistRaised} /> Boxing
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <img src="/assets/images/golf-ainsley.jpg" alt="Golf Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faGolfBall} /> Golf
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <img src="/assets/images/football-ainsley.jpg" alt="Football Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faFootballBall} /> Football
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              
              {/* Duplicated for continuous scrolling - identical set repeated */}
              <div className="marquee-item">
                <img src="/assets/images/baseball-ainsley.jpg" alt="Baseball Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faBaseballBall} /> Baseball
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <img src="/assets/images/soccer-ainsley.jpg" alt="Soccer Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faFutbol} /> Soccer
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <img src="/assets/images/boxing-ainsley.jpg" alt="Boxing Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faFistRaised} /> Boxing
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <img src="/assets/images/golf-ainsley.jpg" alt="Golf Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faGolfBall} /> Golf
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <img src="/assets/images/football-ainsley.jpg" alt="Football Ainsley" />
                <div className="marquee-caption">
                  <div className="marquee-sport">
                    <FontAwesomeIcon icon={faFootballBall} /> Football
                  </div>
                  <div className="marquee-tier">
                    <div className="tier-dot active"></div>
                    <div className="tier-dot"></div>
                    <div className="tier-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;