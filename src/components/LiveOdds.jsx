import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFootballBall, 
  faBasketballBall, 
  faFutbol, 
  faCheckCircle, 
  faChartLine, 
  faBolt,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

function LiveOdds() {
  // State to track if a simulation is running
  const [simulations, setSimulations] = useState({
    nfl: false,
    nba: false,
    soccer: false
  });

  // Function to handle simulation button clicks
  const runSimulation = (game) => {
    // Set the specific game simulation to running
    setSimulations({
      ...simulations,
      [game]: true
    });
    
    // After a delay, turn off the simulation
    setTimeout(() => {
      setSimulations(prev => ({
        ...prev,
        [game]: false
      }));
    }, 2000);
  };

  return (
    <section className="live-odds">
      <div className="container">
        <div className="section-header">
          <h2>LIVE <span>PREDICTIONS</span></h2>
          <p>Preview of Ainsley's AI-powered predictions. Connect your wallet to access the full selection.</p>
        </div>
        
        <div className="odds-grid">
          <div className="odds-card">
            <div className="odds-header">
              <div className="match-info">
                <div className="sport-type">
                  <FontAwesomeIcon icon={faFootballBall} /> NFL
                </div>
                <div className="match-teams">Chiefs vs Raiders</div>
              </div>
              <div className="match-time">8:20 PM ET</div>
            </div>
            <div className="odds-body">
              <div className="odds-row">
                <div className="team">
                  <div className="team-logo">KC</div>
                  Kansas City Chiefs
                </div>
                <div className="odds-value">-7.5</div>
              </div>
              <div className="odds-row">
                <div className="team">
                  <div className="team-logo">LV</div>
                  Las Vegas Raiders
                </div>
                <div className="odds-value">+7.5</div>
              </div>
              <div className="prediction-bar">
                <div className="prediction-fill" style={{width: '86%'}}></div>
              </div>
              <div className="ainsley-pick">
                <FontAwesomeIcon icon={faCheckCircle} /> Ainsley's Pick: Chiefs -7.5
              </div>
            </div>
            <div className="odds-footer">
              <button 
                className="simulate-btn"
                onClick={() => runSimulation('nfl')}
                disabled={simulations.nfl}
              >
                {simulations.nfl ? (
                  <><FontAwesomeIcon icon={faSpinner} spin /> Simulating...</>
                ) : (
                  <><FontAwesomeIcon icon={faChartLine} /> Run Simulation</>
                )}
              </button>
              <div className="confidence">
                <FontAwesomeIcon icon={faBolt} /> 86% Confidence
              </div>
            </div>
          </div>
          
          <div className="odds-card">
            <div className="odds-header">
              <div className="match-info">
                <div className="sport-type">
                  <FontAwesomeIcon icon={faBasketballBall} /> NBA
                </div>
                <div className="match-teams">Lakers vs Celtics</div>
              </div>
              <div className="match-time">7:00 PM ET</div>
            </div>
            <div className="odds-body">
              <div className="odds-row">
                <div className="team">
                  <div className="team-logo">LAL</div>
                  Los Angeles Lakers
                </div>
                <div className="odds-value">+4.5</div>
              </div>
              <div className="odds-row">
                <div className="team">
                  <div className="team-logo">BOS</div>
                  Boston Celtics
                </div>
                <div className="odds-value">-4.5</div>
              </div>
              <div className="prediction-bar">
                <div className="prediction-fill" style={{width: '72%'}}></div>
              </div>
              <div className="ainsley-pick">
                <FontAwesomeIcon icon={faCheckCircle} /> Ainsley's Pick: Celtics -4.5
              </div>
            </div>
            <div className="odds-footer">
              <button 
                className="simulate-btn"
                onClick={() => runSimulation('nba')}
                disabled={simulations.nba}
              >
                {simulations.nba ? (
                  <><FontAwesomeIcon icon={faSpinner} spin /> Simulating...</>
                ) : (
                  <><FontAwesomeIcon icon={faChartLine} /> Run Simulation</>
                )}
              </button>
              <div className="confidence">
                <FontAwesomeIcon icon={faBolt} /> 72% Confidence
              </div>
            </div>
          </div>
          
          <div className="odds-card">
            <div className="odds-header">
              <div className="match-info">
                <div className="sport-type">
                  <FontAwesomeIcon icon={faFutbol} /> Premier League
                </div>
                <div className="match-teams">Arsenal vs Liverpool</div>
              </div>
              <div className="match-time">10:00 AM ET</div>
            </div>
            <div className="odds-body">
              <div className="odds-row">
                <div className="team">
                  <div className="team-logo">ARS</div>
                  Arsenal
                </div>
                <div className="odds-value">+140</div>
              </div>
              <div className="odds-row">
                <div className="team">
                  <div className="team-logo">LIV</div>
                  Liverpool
                </div>
                <div className="odds-value">+190</div>
              </div>
              <div className="odds-row">
                <div className="team">
                  <div className="team-logo">D</div>
                  Draw
                </div>
                <div className="odds-value">+230</div>
              </div>
              <div className="prediction-bar">
                <div className="prediction-fill" style={{width: '58%'}}></div>
              </div>
              <div className="ainsley-pick">
                <FontAwesomeIcon icon={faCheckCircle} /> Ainsley's Pick: Arsenal +140
              </div>
            </div>
            <div className="odds-footer">
              <button 
                className="simulate-btn"
                onClick={() => runSimulation('soccer')}
                disabled={simulations.soccer}
              >
                {simulations.soccer ? (
                  <><FontAwesomeIcon icon={faSpinner} spin /> Simulating...</>
                ) : (
                  <><FontAwesomeIcon icon={faChartLine} /> Run Simulation</>
                )}
              </button>
              <div className="confidence">
                <FontAwesomeIcon icon={faBolt} /> 58% Confidence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveOdds;