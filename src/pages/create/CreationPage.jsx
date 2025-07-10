import React, { useState } from 'react';
import { useRef } from 'react';
import Cvtemplate01 from '@/components/templates/template01/Cvtemplate01';
import { Link } from "react-router-dom";
import styles from './CreationPage.module.scss';
import buttonStyles from '@/components/common/Button.module.scss';
import Form from './Form.jsx';
import { html2pdf } from 'html2pdf.js';

function CreationPage() {
  const cvRef = useRef();
  const [cvData, setCvData] = useState({
    firstName: '',
    jobTitle: '',
    contact: {
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: ''
    },
    profileText: '',
    languages: [],
    documents: [],
    experience: [],
    education: [],
    skills: []
  });

  const handleDownload = () => {
    html2pdf(cvRef.current);
  };

  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <Link className={styles.backButton} to="/">&lt; Anasayfa</Link>
        <select>
          <option value="cvtemplate01">Şablon 01</option>
          <option value="cvtemplate02">Şablon 02</option>
          <option value="cvtemplate03">Şablon 03</option>
          <option value="cvtemplate04">Şablon 04</option>
          <option value="cvtemplate05">Şablon 05</option>
        </select>
        <a onClick={handleDownload} className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${styles.downloadBtn}`}>İndir</a>
      </header>
      <main className={styles.mainsection}>
        <div className={styles.editor}>
          <h3>Bilgilerinizi Giriniz</h3>
          <Form cvData={cvData} setCvData={setCvData} />
        </div>
        <div ref={cvRef} className={styles.pdfMode}>
          <Cvtemplate01 data={cvData} />
        </div>
      </main>
    </div>
  )
}

export default CreationPage
