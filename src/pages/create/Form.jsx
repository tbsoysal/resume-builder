import { useState } from "react"
import styles from './CreationPage.module.scss';

function Form({ cvData, setCvData }) {
  const [languageInput, setLanguageInput] = useState({ name: '', level: 1 });
  const [documentInput, setDocumentInput] = useState({ origin: '', name: '', date: '' });
  const [educationInput, setEducationInput] = useState({ program: '', university: '', date: '' });
  const [skillInput, setSkillInput] = useState('');
  const [experienceInput, setExperienceInput] = useState({ companyName: '', jobName: '', jobDate: '', jobExplanation: '' });

  const addItem = (categoryName, newItemObject, resetInput) => {
    if (!newItemObject || !Object.values(newItemObject)[0].trim?.()) return;
    setCvData(prev => ({ ...prev, [categoryName]: [...prev[categoryName], newItemObject] }))
    resetInput();
  }

  const removeItem = (categoryName, index) => {
    setCvData(prev => ({ ...prev, [categoryName]: prev[categoryName].filter((_, i) => i !== index) }))
  }

  return (
    <form>
      <h3>Kişisel Bilgiler</h3>
      <label htmlFor="nameinput">Ad ve Soyad</label>
      <input onChange={e => setCvData(prev => ({ ...prev, firstName: e.target.value }))} id='nameinput' type="text" placeholder='Adınızı ve soyadınızı giriniz' />

      <label htmlFor="proficiency-input">Meslek</label>
      <input onChange={e => setCvData(prev => ({ ...prev, jobTitle: e.target.value }))} id='proficiency-input' type="text" placeholder='Meslek/Uzmanlık alanınızı giriniz' />

      <label htmlFor="emailinput">E-mail</label>
      <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))} id='emailinput' type="email" placeholder='Mail adresinizi giriniz' />

      <label htmlFor="phoneinput">Telefon</label>
      <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))} id='phoneinput' type="number" placeholder='Telefon numaranızı giriniz' />

      <label htmlFor="locationinput">Konum</label>
      <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, location: e.target.value } }))} id='locationinput' type="text" placeholder='Ülke ve şehir giriniz' />

      <label htmlFor="profiletext">Kendinizden bahsedin</label>
      <textarea onChange={e => setCvData(prev => ({ ...prev, profileText: e.target.value }))} id='profiletext' type="text" placeholder='Kendinizden bahsedin...' />

      <h3>Yabancı Dil</h3>
      <div className={styles.languagesSection}>
        <input onChange={e => setLanguageInput(prev => ({ ...prev, name: e.target.value }))} value={languageInput.name} id='language' type="text" name="language" />
        <select onChange={e => setLanguageInput(prev => ({ ...prev, level: parseInt(e.target.value) }))} value={languageInput.level}>
          <option value="1">Başlangıç</option>
          <option value="2">Temel</option>
          <option value="3">Orta</option>
          <option value="4">Profesyonel</option>
          <option value="5">Ana dil</option>
        </select>
        <input onClick={() => addItem('languages', languageInput, () => { setLanguageInput({ name: '', level: 1 }) })} type="button" value='Ekle' />
        {cvData.languages.map((language, index) => (
          <span key={index} onClick={() => removeItem('languages', index)} className={styles.languageTag}>
            {language.name} x
          </span>
        ))}
      </div>

      <h3>Belgeler</h3>
      <div className={styles.documentSection}>
        <label htmlFor="documentOrigin">Kurum Adı</label>
        <input type="text" id="documentOrigin" value={documentInput.origin} onChange={e => setDocumentInput(prev => ({ ...prev, origin: e.target.value }))} />
        <label htmlFor="documentDate">Veriliş Tarihi</label>
        <input type="text" id="documentDate" value={documentInput.date} onChange={e => setDocumentInput(prev => ({ ...prev, date: e.target.value }))} />
        <label htmlFor="documentName">Belge Adı</label>
        <input type="text" id="documentName" value={documentInput.name} onChange={e => setDocumentInput(prev => ({ ...prev, name: e.target.value }))} />
        <input type="button" value="Ekle" onClick={() => addItem('documents', documentInput, () => { setDocumentInput({ origin: '', name: '', date: '' }) })} />
        {cvData.documents.map((document, index) => (
          <span key={index} onClick={() => removeItem('documents', index)} className={styles.languageTag}>
            {document.origin} x
          </span>
        ))}
      </div>

      <h3>Deneyim</h3>
      <div>
        <label htmlFor="cName">Şirket Adı</label>
        <input type="text" id="cName" value={experienceInput.companyName} onChange={e => setExperienceInput(prev => ({ ...prev, companyName: e.target.value }))} />
        <label htmlFor="jName">Alan</label>
        <input type="text" id="jName" value={experienceInput.jobName} onChange={e => setExperienceInput(prev => ({ ...prev, jobName: e.target.value }))} />
        <label htmlFor="jDate">Tarih - Konum</label>
        <input type="text" id="jDate" value={experienceInput.jobDate} onChange={e => setExperienceInput(prev => ({ ...prev, jobDate: e.target.value }))} />
        <label htmlFor="jExplanation">Açıklama</label>
        <input type="text" id="jExplanation" value={experienceInput.jobExplanation} onChange={e => setExperienceInput(prev => ({ ...prev, jobExplanation: e.target.value }))} />
        <input type="button" value="Ekle" onClick={() => addItem('experience', experienceInput, () => setExperienceInput({ companyName: '', jobName: '', jobDate: '', jobExplanation: '' }))} />
        {cvData.experience.map((experience, index) => (
          <span key={index} onClick={() => removeItem('experience', index)} className={styles.languageTag}>
            {experience.companyName} x
          </span>
        ))}
      </div>

      <h3>Eğitim</h3>
      <div className={styles.educationSection}>
        <label htmlFor="programname">Bölüm Adı</label>
        <input type="text" id="programname" value={educationInput.program} onChange={e => setEducationInput(prev => ({ ...prev, program: e.target.value }))} />
        <label htmlFor="schoolname">Üniversite Adı</label>
        <input type="text" id="schoolname" value={educationInput.university} onChange={e => setEducationInput(prev => ({ ...prev, university: e.target.value }))} />
        <label htmlFor="schooldate">Tarih ve şehir</label>
        <input type="text" id="schooldate" value={educationInput.date} onChange={e => setEducationInput(prev => ({ ...prev, date: e.target.value }))} />
        <input type="button" value="Ekle" onClick={() => addItem('education', educationInput, () => setEducationInput({ program: '', university: '', date: '' }))} />
        {cvData.education.map((education, index) => (
          <span key={index} onClick={() => removeItem('education', index)} className={styles.languageTag}>
            {education.program} x
          </span>
        ))}
      </div>

      <h3>Yetenekler</h3>
      <div className={styles.skillsSection}>
        <input type="text" id="skillInput" value={skillInput} onChange={e => setSkillInput(e.target.value)} />
        <input type='button' value='Ekle' onClick={() => addItem('skills', skillInput, () => setSkillInput(''))} />
        {cvData.skills.map((skill, index) => (
          <span key={index} onClick={() => removeItem('skills', index)} className={styles.languageTag}>
            {skill} x
          </span>
        ))}
      </div>
    </form>
  )
}

export default Form
