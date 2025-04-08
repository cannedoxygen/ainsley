import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TierPreview from './components/TierPreview';
import LiveOdds from './components/LiveOdds';
import HowItWorks from './components/HowItWorks';
import Winners from './components/Winners';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TierPreview />
        <LiveOdds />
        <HowItWorks />
        <Winners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;