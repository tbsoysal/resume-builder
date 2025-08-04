import React from 'react';
import Navbar from '@/components/common/Navbar';
import Hero from '@/components/layout/Hero';
import Topfeatures from '@/components/layout/Topfeatures';
import Howitworks from '@/components/layout/Howitworks';
import Templates from '@/components/layout/Templates';
import Benefits from '@/components/layout/Benefits';
import Testimonials from '@/components/layout/Testimonials';
import Faq from '@/components/layout/Faq';
import Footer from '@/components/common/Footer';

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
