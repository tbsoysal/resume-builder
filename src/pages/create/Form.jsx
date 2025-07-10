import { useState } from "react"
import styles from './CreationPage.module.scss';

function Form({ cvData, setCvData }) {
  const [languageName, setLanguageName] = useState('');
  const [languageLevel, setLanguageLevel] = useState(1);

  const [documentOrigin, setDocumentOrigin] = useState('');
  const [documentName, setDocumentName] = useState('');
  const [documentDate, setDocumentDate] = useState('');

  const [educationProgram, setEducationProgram] = useState('');
  const [educationUniversity, setEducationUniversity] = useState('');
  const [educationDate, setEducationDate] = useState('');

  const addLanguage = (e) => {
    e.preventDefault();
    if (!languageName.trim()) return;

    const newLang = { name: languageName, level: languageLevel };
    setLanguageName('');
    setLanguageLevel(1);

    setCvData({ ...cvData, languages: [...cvData.languages, newLang] });
  };

  const removeLanguage = (index) => {
    setCvData({ ...cvData, languages: cvData.languages.filter((_, i) => i !== index) })
  };

  const addDocument = (e) => {
    e.preventDefault();
    if (!documentOrigin.trim()) return;

    const newDoc = { documentOrigin: documentOrigin, documentDate: documentDate, documentName: documentName };
    setDocumentOrigin('');
    setDocumentDate('');
    setDocumentName('');

    setCvData({ ...cvData, documents: [...cvData.documents, newDoc] });
  };

  const removeDocument = (index) => {
    setCvData({ ...cvData, documents: cvData.documents.filter((_, i) => i !== index) })
  }

  const addEducation = (e) => {
    e.preventDefault();
    if (!educationProgram.trim()) return;

    const newEdu = { educationProgram: educationProgram, educationUniversity: educationUniversity, educationDate: educationDate };
    setEducationProgram('');
    setEducationUniversity('');
    setEducationDate('');

    setCvData({ ...cvData, education: [...cvData.education, newEdu] });
  };

  const removeEducation = (index) => {
    setCvData({ ...cvData, education: cvData.education.filter((_, i) => i !== index) });
  }

  return (
    <form>
      <label htmlFor="nameinput">Ad ve Soyad</label>
      <input onChange={e => setCvData({ ...cvData, firstName: e.target.value })} id='nameinput' type="text" name="name" placeholder='Adınızı ve soyadınızı giriniz' />

      <label htmlFor="proficiency-input">Meslek</label>
      <input onChange={e => setCvData({ ...cvData, jobTitle: e.target.value })} id='proficiency-input' type="text" name="proficiency" placeholder='Meslek/Uzmanlık alanınızı giriniz' />

      <label htmlFor="emailinput">E-mail</label>
      <input onChange={e => setCvData({ ...cvData, contact: { ...cvData.contact, email: e.target.value } })} id='emailinput' type="email" name="email" placeholder='Mail adresinizi giriniz' />

      <label htmlFor="phoneinput">Telefon</label>
      <input onChange={e => setCvData({ ...cvData, contact: { ...cvData.contact, phone: e.target.value } })} id='phoneinput' type="number" name="number" placeholder='Telefon numaranızı giriniz' />

      <label htmlFor="locationinput">Konum</label>
      <input onChange={e => setCvData({ ...cvData, contact: { ...cvData.contact, location: e.target.value } })} id='locationinput' type="text" name="location" placeholder='Ülke ve şehir giriniz' />

      <label htmlFor="linkedininput">Linkedin Adresi</label>
      <input onChange={e => setCvData({ ...cvData, contact: { ...cvData.contact, linkedin: e.target.value } })} id='linkedin' type="text" name="linkedin" placeholder='https://linkedin.com/me/kullanici-adi' />

      <label htmlFor="websiteinput">Websitesi</label>
      <input onChange={e => setCvData({ ...cvData, contact: { ...cvData.contact, website: e.target.value } })} id='website' type="text" name="website" placeholder='https://orneksite.com' />

      <label htmlFor="profiletext">Kendinizden bahsedin</label>
      <textarea onChange={e => setCvData({ ...cvData, profileText: e.target.value })} id='profiletext' type="text" name="profiletext" placeholder='Kendinizden bahsedin...' />

      <div className={styles.languagesSection}>
        <label htmlFor="websiteinput">Yabancı Dil</label>
        <input onChange={e => setLanguageName(e.target.value)} value={languageName} id='language' type="text" name="language" />
        <select onChange={e => setLanguageLevel(parseInt(e.target.value))} value={languageLevel}>
          <option value="1">Başlangıç</option>
          <option value="2">Temel</option>
          <option value="3">Orta</option>
          <option value="4">Profesyonel</option>
          <option value="5">Ana dil</option>
        </select>
        <input onClick={addLanguage} type="submit" value='Ekle' />
        {cvData.languages.map((language, index) => (
          <span key={index} onClick={() => removeLanguage(index)} className={styles.languageTag}>
            {language.name} x
          </span>
        ))}
      </div>

      <div className={styles.documentSection}>
        <label htmlFor="documentOrigin">Kurum Adı</label>
        <input type="text" id="documentOrigin" value={documentOrigin} onChange={e => setDocumentOrigin(e.target.value)} />
        <label htmlFor="documentDate">Veriliş Tarihi</label>
        <input type="text" id="documentDate" value={documentDate} onChange={e => setDocumentDate(e.target.value)} />
        <label htmlFor="documentName">Belge Adı</label>
        <input type="text" id="documentName" value={documentName} onChange={e => setDocumentName(e.target.value)} />
        <input type="submit" value="Ekle" onClick={e => addDocument(e)} />
        {cvData.documents.map((doc, index) => (
          <span key={index} onClick={() => removeDocument(index)} className={styles.languageTag}>
            {doc.documentOrigin} x
          </span>
        ))}
      </div>

      <div className={styles.educationSection}>
        <label htmlFor="programname">Bölüm Adı</label>
        <input type="text" id="programname" value={educationProgram} onChange={e => setEducationProgram(e.target.value)} />
        <label htmlFor="schoolname">Üniversite Adı</label>
        <input type="text" id="schoolname" value={educationUniversity} onChange={e => setEducationUniversity(e.target.value)} />
        <label htmlFor="schooldate">Tarih ve şehir</label>
        <input type="text" id="schooldate" value={educationDate} onChange={e => setEducationDate(e.target.value)} />
        <input type="submit" value="Ekle" onClick={e => addEducation(e)} />
        {cvData.education.map((edu, index) => (
          <span key={index} onClick={() => removeEducation(index)} className={styles.languageTag}>
            {edu.educationUniversity} x
          </span>
        ))}
      </div>

    </form>
  )
}

export default Form
