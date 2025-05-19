import React from 'react';
import Navbar from '/src/components/landingpage/Navbar.jsx';
import Hero from '/src/components/landingpage/Hero.jsx';
import Topfeatures from '/src/components/landingpage/Topfeatures.jsx';
import Howitworks from '/src/components/landingpage/Howitworks.jsx';
import Templates from '../components/landingpage/Templates';
import Benefits from '../components/landingpage/Benefits';
import Testimonials from '../components/landingpage/Testimonials';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Topfeatures />
      <Howitworks />
      <Templates />
      <Benefits />
      <Testimonials />
    </>
  )
}

export default LandingPage
