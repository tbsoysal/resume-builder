import React from 'react';
import Navbar from '@/components/common/Navbar.jsx';
import Footer from '@/components/common/Footer.jsx';
import styles from './TemplatesPage.module.scss';

function TemplatesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.templates}>
        <h2>Hazır CV Şablonları</h2>
        <div className={styles.gridContainer}>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/templateimages/cvtemplateimage01.webp`} alt="cvtemplate01" /></a>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/templateimages/cvtemplateimage02.webp`} alt="cvtemplate02" /></a>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/templateimages/cvtemplateimage03.webp`} alt="cvtemplate03" /></a>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/templateimages/cvtemplateimage04.webp`} alt="cvtemplate04" /></a>
          <a href=""><img src={`${import.meta.env.BASE_URL}assets/templateimages/cvtemplateimage05.webp`} alt="cvtemplate05" /></a>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TemplatesPage
