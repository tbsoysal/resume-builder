import React, { useState } from 'react';
import Cvtemplate01 from '@/components/templates/template01/Cvtemplate01';
import { Link } from "react-router-dom";
import styles from './CreationPage.module.scss';
import buttonStyles from '@/components/common/Button.module.scss';
import Form from './Form.jsx';
import html2pdf from 'html2pdf.js';

function CreationPage() {
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
    const cv = document.getElementById('cvcontainer');
    html2pdf()
      .set({
        filename: 'cv.pdf',
        image: { type: 'jpeg', quality: 1 }, // max quality
        html2canvas: {
          scale: 3,             // ⬆️ increases resolution
          dpi: 300,             // ⬆️ makes text sharper
          letterRendering: true, // ✅ improves text rendering
          useCORS: true,
        },
        jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' },
      })
      .from(cv)
      .save();
  }

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
        <div className={styles.preview} id='cvcontainer'>
          <Cvtemplate01 data={cvData} />
        </div>
      </main>
    </div>
  )
}

export default CreationPage
