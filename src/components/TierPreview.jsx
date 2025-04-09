import React, { useState } from 'react';

function TierPreview() {
  // State to track which layer is active for each tier card
  const [activeLayers, setActiveLayers] = useState({
    tier1: 0,
    tier2: 0,
    tier3: 0
  });

  // Function to handle layer button clicks
  const handleLayerChange = (tier, layerIndex) => {
    setActiveLayers({
      ...activeLayers,
      [tier]: layerIndex
    });
  };

  // Use placeholder images until real ones are available
  const images = {
    tier1: {
      layer1: "https://placehold.co/600x400?text=Tier1-Baseball",
      layer2: "https://placehold.co/600x400?text=Tier2-Preview",
    },
    tier2: {
      layer1: "https://placehold.co/600x400?text=Tier2-Soccer",
      layer2: "https://placehold.co/600x400?text=Tier3-Preview",
    },
    tier3: {
      layer1: "https://placehold.co/600x400?text=Tier3-Boxing",
    }
  };

  return (
    <section className="tier-preview">
      <div className="container">
        <div className="section-header">
          <h2>UNLOCK <span>TIER BENEFITS</span></h2>
          <p>Each tier reveals more of Ainsley and provides more AI-powered picks. Hover over the images to see the next tier preview.</p>
        </div>
        
        <div className="tier-showcase">
          <div 
            className="tier-card"
            onMouseEnter={() => handleLayerChange('tier1', 1)}
            onMouseLeave={() => handleLayerChange('tier1', 0)}
          >
            <div className="tier-level">Tier 1</div>
            <div className="tier-image-container">
              <div className="tier-image-layers">
                <img 
                  className="image-layer layer-1" 
                  src={images.tier1.layer1} 
                  alt="Tier 1 Baseball Ainsley" 
                  style={{opacity: activeLayers.tier1 === 0 ? 1 : 0}}
                />
                <img 
                  className="image-layer layer-2" 
                  src={images.tier1.layer2} 
                  alt="Tier 2 Preview" 
                  style={{
                    opacity: activeLayers.tier1 === 1 ? 1 : 0,
                    filter: 'blur(5px)'
                  }}
                />
              </div>
              <div className="tier-control">
                <button 
                  className={`layer-btn ${activeLayers.tier1 === 0 ? 'active' : ''}`}
                  onClick={() => handleLayerChange('tier1', 0)}
                ></button>
                <button 
                  className={`layer-btn ${activeLayers.tier1 === 1 ? 'active' : ''}`}
                  onClick={() => handleLayerChange('tier1', 1)}
                ></button>
                <button 
                  className="layer-btn"
                ></button>
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
          
          <div 
            className="tier-card"
            onMouseEnter={() => handleLayerChange('tier2', 1)}
            onMouseLeave={() => handleLayerChange('tier2', 0)}
          >
            <div className="tier-level">Tier 2</div>
            <div className="tier-image-container">
              <div className="tier-image-layers">
                <img 
                  className="image-layer layer-1" 
                  src={images.tier2.layer1} 
                  alt="Tier 2 Soccer Ainsley" 
                  style={{opacity: activeLayers.tier2 === 0 ? 1 : 0}}
                />
                <img 
                  className="image-layer layer-2" 
                  src={images.tier2.layer2} 
                  alt="Tier 3 Preview" 
                  style={{
                    opacity: activeLayers.tier2 === 1 ? 1 : 0,
                    filter: 'blur(5px)'
                  }}
                />
              </div>
              <div className="tier-control">
                <button 
                  className={`layer-btn ${activeLayers.tier2 === 0 ? 'active' : ''}`}
                  onClick={() => handleLayerChange('tier2', 0)}
                ></button>
                <button 
                  className={`layer-btn ${activeLayers.tier2 === 1 ? 'active' : ''}`}
                  onClick={() => handleLayerChange('tier2', 1)}
                ></button>
                <button 
                  className="layer-btn"
                ></button>
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
          
          <div 
            className="tier-card"
          >
            <div className="tier-level">Tier 3</div>
            <div className="tier-image-container">
              <div className="tier-image-layers">
                <img 
                  className="image-layer layer-1" 
                  src={images.tier3.layer1} 
                  alt="Tier 3 Boxing Ainsley" 
                />
              </div>
              <div className="tier-control">
                <button 
                  className="layer-btn active"
                ></button>
                <button 
                  className="layer-btn"
                ></button>
                <button 
                  className="layer-btn"
                ></button>
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