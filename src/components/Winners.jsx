import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Winners() {
  return (
    <section className="winners">
      <div className="container">
        <div className="section-header">
          <h2>RECENT <span>WINNERS</span></h2>
          <p>Ainsley's AI has been helping users make winning picks. See some of our recent successes.</p>
        </div>
        
        <div className="winners-track">
          <div className="winner-card">
            <div className="winner-info">
              <div className="winner-avatar">🏆</div>
              <div className="winner-details">
                <div className="winner-name">CryptoKing21</div>
                <div className="winner-id">0x7d4...8e9f</div>
              </div>
            </div>
            <div className="winner-bet">
              <div className="winner-match">NFL: Bills vs Jets</div>
              <div className="winner-pick">
                <div className="pick-details">
                  <div className="team-logo">BUF</div>
                  Bills -3.5
                </div>
                <div className="pick-odds">-110</div>
              </div>
              <div className="winner-profit">
                <div className="profit-label">Profit</div>
                <div className="profit-value">
                  <FontAwesomeIcon icon={faArrowUp} /> $1,450
                </div>
              </div>
            </div>
          </div>
          
          <div className="winner-card">
            <div className="winner-info">
              <div className="winner-avatar">💰</div>
              <div className="winner-details">
                <div className="winner-name">SportsBettor42</div>
                <div className="winner-id">0x3a8...f1e2</div>
              </div>
            </div>
            <div className="winner-bet">
              <div className="winner-match">NBA: Warriors vs Lakers</div>
              <div className="winner-pick">
                <div className="pick-details">
                  <div className="team-logo">GSW</div>
                  Warriors ML
                </div>
                <div className="pick-odds">+165</div>
              </div>
              <div className="winner-profit">
                <div className="profit-label">Profit</div>
                <div className="profit-value">
                  <FontAwesomeIcon icon={faArrowUp} /> $825
                </div>
              </div>
            </div>
          </div>
          
          <div className="winner-card">
            <div className="winner-info">
              <div className="winner-avatar">🔥</div>
              <div className="winner-details">
                <div className="winner-name">BettyBaller</div>
                <div className="winner-id">0x5f1...9d4c</div>
              </div>
            </div>
            <div className="winner-bet">
              <div className="winner-match">UFC: Jones vs Miocic</div>
              <div className="winner-pick">
                <div className="pick-details">
                  <div className="team-logo">JJ</div>
                  Jones by KO
                </div>
                <div className="pick-odds">+275</div>
              </div>
              <div className="winner-profit">
                <div className="profit-label">Profit</div>
                <div className="profit-value">
                  <FontAwesomeIcon icon={faArrowUp} /> $2,750
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Winners;