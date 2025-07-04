import React from 'react';
import Navbar from '/src/components/landingpage/Navbar.jsx';
import Footer from '../components/landingpage/Footer.jsx';
import '../styles/templatespage.scss';

function TemplatesPage() {
  return (
    <>
      <Navbar />
      <main className='templates'>
        <h2>Hazır CV Şablonları</h2>
        <div class="grid-container">
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/cvtemplateimage01.webp`} alt="cvtemplate01" /></a>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/cvtemplateimage02.webp`} alt="cvtemplate02" /></a>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/cvtemplateimage03.webp`} alt="cvtemplate03" /></a>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/cvtemplateimage04.webp`} alt="cvtemplate04" /></a>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/cvtemplateimage05.webp`} alt="cvtemplate05" /></a>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TemplatesPage
