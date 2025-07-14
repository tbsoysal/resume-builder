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

  const [skill, setSkill] = useState('');

  const [experience, setExperience] = useState({ companyName: '', jobName: '', jobDate: '', jobExplanation: '' });

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

  const addSkill = (e) => {
    e.preventDefault();
    if (!skill.trim()) return;

    const newSkill = { skill: skill };
    setSkill('');

    setCvData({ ...cvData, skills: [...cvData.skills, newSkill] });
  }

  const removeSkill = (index) => {
    setCvData({ ...cvData, skills: cvData.skills.filter((_, i) => i !== index) });
  }

  const addExperience = (e) => {
    e.preventDefault();
    if (!experience.companyName.trim()) return;

    const newExperience = experience;
    setExperience({ companyName: '', jobName: '', jobDate: '', jobExplanation: '' });

    setCvData({ ...cvData, experience: [...cvData.experience, newExperience] });
  }

  const removeExperience = (index) => {
    setCvData({ ...cvData, experience: cvData.experience.filter((_, i) => i !== index) });
  }

  return (
    <form>
      <h3>Kişisel Bilgiler</h3>
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

      <label htmlFor="profiletext">Kendinizden bahsedin</label>
      <textarea onChange={e => setCvData({ ...cvData, profileText: e.target.value })} id='profiletext' type="text" name="profiletext" placeholder='Kendinizden bahsedin...' />

      <h3>Yabancı Dil</h3>
      <div className={styles.languagesSection}>
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

      <h3>Belgeler</h3>
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

      <h3>Eğitim</h3>
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

      <h3>Yetenekler</h3>
      <div className={styles.skillsSection}>
        <input type="text" id="skillInput" value={skill} onChange={e => setSkill(e.target.value)} />
        <input type='submit' value='Ekle' onClick={e => addSkill(e)} />
        {cvData.skills.map((skillItem, index) => (
          <span key={index} onClick={() => removeSkill(index)} className={styles.languageTag}>
            {skillItem.skill} x
          </span>
        ))}
      </div>

      <h3>Deneyim</h3>
      <div>
        <label htmlFor="cName">Şirket Adı</label>
        <input type="text" id="cName" value={experience.companyName} onChange={e => setExperience({ ...experience, companyName: e.target.value })} />
        <label htmlFor="jName">Alan</label>
        <input type="text" id="jName" value={experience.jobName} onChange={e => setExperience({ ...experience, jobName: e.target.value })} />
        <label htmlFor="jDate">Tarih - Konum</label>
        <input type="text" id="jDate" value={experience.jobDate} onChange={e => setExperience({ ...experience, jobDate: e.target.value })} />
        <label htmlFor="jExplanation">Açıklama</label>
        <input type="text" id="jExplanation" value={experience.jobExplanation} onChange={e => setExperience({ ...experience, jobExplanation: e.target.value })} />
        <input type="submit" value="Ekle" onClick={e => addExperience(e)} />
        {cvData.experience.map((experience, index) => (
          <span key={index} onClick={() => removeExperience(index)} className={styles.languageTag}>
            {experience.companyName} x
          </span>
        ))}
      </div>

    </form>
  )
}

export default Form
