import React from 'react';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>HOW <span>IT WORKS</span></h2>
          <p>Three simple steps to unlock Ainsley's AI-powered predictions and revealing imagery.</p>
        </div>
        
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-visual">
              <img src="/assets/images/purchase-nft.jpg" alt="Purchase NFT" />
            </div>
            <div className="step-content">
              <h3>Purchase Your Ainsley NFT</h3>
              <p>Choose your favorite sport and tier level. Each tier unlocks more picks and more revealing Ainsley imagery. Buy once, use forever.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-visual">
              <img src="/assets/images/select-game.jpg" alt="Select Game" />
            </div>
            <div className="step-content">
              <h3>Select Your Game</h3>
              <p>Browse upcoming games across your favorite sports and choose one to analyze. Your tier level determines how many picks you get daily.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-visual">
              <img src="/assets/images/get-predictions.jpg" alt="Get Predictions" />
            </div>
            <div className="step-content">
              <h3>Get Winning Predictions</h3>
              <p>Ainsley's AI analyzes thousands of data points to generate high-confidence picks with detailed reasoning. Place your bets with an edge.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;