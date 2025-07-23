import React, { useEffect, useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Link } from "react-router-dom";
import CvTemplate01Blob from '../../components/templates/template01/CvTemplate01Blob.jsx';
import Cvtemplate01 from '@/components/templates/template01/Cvtemplate01';
import Form from './Form.jsx';
import styles from './CreationPage.module.scss';
import buttonStyles from '@/components/common/Button.module.scss';
import { useRef } from 'react';

function CreationPage() {
  const [cvData, setCvData] = useState({
    firstName: '',
    jobTitle: '',
    profileText: '',
    contact: {
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: ''
    },
    languages: [],
    documents: [],
    experience: [],
    education: [],
    skills: []
  });

  const [pdfBlobUrl, setPdfBlobUrl] = useState();
  const wrapperRef = useRef();

  useEffect(() => {
    const generatePdfBlob = async () => {
      const blob = await pdf(<CvTemplate01Blob data={cvData} />).toBlob();
      const url = URL.createObjectURL(blob);
      setPdfBlobUrl(url);
    };

    const scale = () => {
      const wrapper = wrapperRef.current;
      const cv = wrapper.firstElementChild;

      if (!wrapper || !cv) return;

      const scale = wrapper.clientWidth / cv.offsetWidth;

      cv.style.transform = `scale(${scale})`;
      wrapper.style.height = (cv.offsetHeight * scale) + 'px';
    }

    window.addEventListener('resize', scale);
    window.addEventListener('load', scale);

    scale();
    generatePdfBlob();
  }, [cvData]);

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <header className={styles.navbar}>
          <Link className={styles.backButton} to="/">&lt; Anasayfa</Link>
          <select name='templateNo'>
            <option value="cvtemplate01">Şablon 01</option>
            <option value="cvtemplate02">Şablon 02</option>
            <option value="cvtemplate03">Şablon 03</option>
            <option value="cvtemplate04">Şablon 04</option>
            <option value="cvtemplate05">Şablon 05</option>
          </select>
          <a href={pdfBlobUrl} download='cv.pdf' className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${styles.downloadBtn}`}>İndir<i className="fa-solid fa-download"></i></a>
        </header>
      </div>

      <main className={styles.mainsection}>
        <div className={styles.editor}>
          <Form cvData={cvData} setCvData={setCvData} />
        </div>
        <div className={styles.preview}>
          <div ref={wrapperRef}>
            <Cvtemplate01 data={cvData} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default CreationPage;
