import React from 'react';

function TierPreview() {
  return (
    <section className="tier-preview">
      <div className="container">
        <div className="section-header">
          <h2>UNLOCK <span>TIER BENEFITS</span></h2>
          <p>Each tier reveals more of Ainsley and provides more AI-powered picks. Hover over the images to see the next tier preview.</p>
        </div>
        
        <div className="tier-showcase">
          <div className="tier-card">
            <div className="tier-level">Tier 1</div>
            <div className="tier-image-container">
              <div className="tier-image-layers">
                <img className="image-layer layer-1" src="/assets/images/tier1-baseball.jpg" alt="Tier 1 Baseball Ainsley" />
                <img className="image-layer layer-2" src="/assets/images/tier2-preview.jpg" alt="Tier 2 Preview" style={{filter: 'blur(5px)'}} />
              </div>
              <div className="tier-control">
                <button className="layer-btn active"></button>
                <button className="layer-btn"></button>
                <button className="layer-btn"></button>
              </div>
            </div>
            <div className="tier-info">
              <div className="tier-name">Rookie Card</div>
              <div className="tier-price">$25 <span>one-time</span></div>
              <div className="tier-benefits">
                <div className="benefit-tag">5 Daily Picks</div>
                <div className="benefit-tag">All Sports</div>
                <div className="benefit-tag">Basic Stats</div>
              </div>
            </div>
          </div>
          
          <div className="tier-card">
            <div className="tier-level">Tier 2</div>
            <div className="tier-image-container">
              <div className="tier-image-layers">
                <img className="image-layer layer-1" src="/assets/images/tier2-soccer.jpg" alt="Tier 2 Soccer Ainsley" />
                <img className="image-layer layer-2" src="/assets/images/tier3-preview.jpg" alt="Tier 3 Preview" style={{filter: 'blur(5px)'}} />
              </div>
              <div className="tier-control">
                <button className="layer-btn active"></button>
                <button className="layer-btn"></button>
                <button className="layer-btn"></button>
              </div>
            </div>
            <div className="tier-info">
              <div className="tier-name">Pro Card</div>
              <div className="tier-price">$50 <span>total</span></div>
              <div className="tier-benefits">
                <div className="benefit-tag">10 Daily Picks</div>
                <div className="benefit-tag">Enhanced Stats</div>
                <div className="benefit-tag">Priority Access</div>
              </div>
            </div>
          </div>
          
          <div className="tier-card">
            <div className="tier-level">Tier 3</div>
            <div className="tier-image-container">
              <div className="tier-image-layers">
                <img className="image-layer layer-1" src="/assets/images/tier3-boxing.jpg" alt="Tier 3 Boxing Ainsley" />
              </div>
              <div className="tier-control">
                <button className="layer-btn active"></button>
                <button className="layer-btn"></button>
                <button className="layer-btn"></button>
              </div>
            </div>
            <div className="tier-info">
              <div className="tier-name">VIP Card</div>
              <div className="tier-price">$75 <span>total</span></div>
              <div className="tier-benefits">
                <div className="benefit-tag">15 Daily Picks</div>
                <div className="benefit-tag">Full Reveal</div>
                <div className="benefit-tag">VIP Analysis</div>
                <div className="benefit-tag">Exclusive Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TierPreview;