import React from 'react';
import Navbar from '/src/components/landingpage/Navbar.jsx';
import Hero from '/src/components/landingpage/Hero.jsx';
import Topfeatures from '/src/components/landingpage/Topfeatures.jsx';
import Howitworks from '/src/components/landingpage/Howitworks.jsx';
import Templates from '../components/landingpage/Templates';
import Benefits from '../components/landingpage/Benefits';
import Testimonials from '../components/landingpage/Testimonials';
import Faq from '../components/landingpage/Faq.jsx';
import Footer from '../components/landingpage/Footer.jsx';

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
      <Faq />
      <Footer />
    </>
  )
}

export default LandingPage
