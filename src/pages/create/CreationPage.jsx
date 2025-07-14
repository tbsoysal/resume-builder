import React, { useEffect, useState } from 'react';
import Cvtemplate01 from '@/components/templates/template01/Cvtemplate01';
import { Link } from "react-router-dom";
import styles from './CreationPage.module.scss';
import buttonStyles from '@/components/common/Button.module.scss';
import Form from './Form.jsx';
import { pdf } from '@react-pdf/renderer';
import CvTemplate01Blob from '../../components/templates/template01/CvTemplate01Blob.jsx';

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


  const [pdfBlobUrl, setPdfBlobUrl] = useState();
  useEffect(() => {
    const generatePdfBlob = async () => {
      const blob = await pdf(<CvTemplate01Blob data={cvData} />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfBlobUrl(url);
    };

    generatePdfBlob();
  }, [cvData]);

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
        <a href={pdfBlobUrl} download='cv.pdf' className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${styles.downloadBtn}`}>İndir</a>
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

export default CreationPage;
