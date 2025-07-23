import { useState } from "react"
import PersonalDetails from "./formComponents/PersonalDetails";
import LanguagesForm from "./formComponents/LanguagesForm";
import ProfileText from "./formComponents/ProfileText";
import DocumentsForm from "./formComponents/DocumentsForm";
import ExperiencesForm from "./formComponents/ExperiencesForm";
import EducationForm from "./formComponents/EducationForm";
import SkillsForm from "./formComponents/SkillsForm";
import styles from "./CreationPage.module.scss";

function Form({ cvData, setCvData }) {
  const [profileVisibility, setProfileVisibility] = useState({ visible: false });
  const [languageInput, setLanguageInput] = useState({ name: '', level: 1, visible: false });
  const [documentInput, setDocumentInput] = useState({ origin: '', name: '', date: '', visible: false });
  const [educationInput, setEducationInput] = useState({ program: '', university: '', date: '', visible: false });
  const [skillInput, setSkillInput] = useState({ text: '', visible: false });
  const [experienceInput, setExperienceInput] = useState({ companyName: '', jobName: '', jobDate: '', jobExplanation: '', visible: false });

  const addItem = (categoryName, newItemObject, resetInput) => {
    if (!newItemObject || !Object.values(newItemObject)[0].trim?.()) return;
    setCvData(prev => ({ ...prev, [categoryName]: [...prev[categoryName], newItemObject] }))
    resetInput();
  }

  const removeItem = (categoryName, index) => {
    setCvData(prev => ({ ...prev, [categoryName]: prev[categoryName].filter((_, i) => i !== index) }))
  }

  const toggleVisibility = (toggler) => {
    toggler(prev => ({ ...prev, visible: !prev.visible }));
  }

  const commonProps = { addItem, removeItem, cvData };

  return (
    <form>
      <PersonalDetails setCvData={setCvData} />
      <div className={styles.sectionButtons}>
        <button type="button" onClick={() => toggleVisibility(setProfileVisibility)}><i className={`fa-solid fa-circle-${profileVisibility.visible ? 'minus' : 'plus'}`}></i> Profile</button>
        <button type="button" onClick={() => toggleVisibility(setLanguageInput)}><i className={`fa-solid fa-circle-${languageInput.visible ? 'minus' : 'plus'}`}></i> Language</button>
        <button type="button" onClick={() => toggleVisibility(setDocumentInput)}><i className={`fa-solid fa-circle-${documentInput.visible ? 'minus' : 'plus'}`}></i> Document</button>
        <button type="button" onClick={() => toggleVisibility(setExperienceInput)}><i className={`fa-solid fa-circle-${experienceInput.visible ? 'minus' : 'plus'}`}></i> Experience</button>
        <button type="button" onClick={() => toggleVisibility(setEducationInput)}><i className={`fa-solid fa-circle-${educationInput.visible ? 'minus' : 'plus'}`}></i> Education</button>
        <button type="button" onClick={() => toggleVisibility(setSkillInput)}><i className={`fa-solid fa-circle-${skillInput.visible ? 'minus' : 'plus'}`}></i> Skill</button>
      </div>
      <ProfileText
        setCvData={setCvData}
        profileVisibility={profileVisibility}
      />
      <LanguagesForm
        {...commonProps}
        languageInput={languageInput}
        setLanguageInput={setLanguageInput}
      />
      <DocumentsForm
        {...commonProps}
        documentInput={documentInput}
        setDocumentInput={setDocumentInput}
      />
      <ExperiencesForm
        {...commonProps}
        experienceInput={experienceInput}
        setExperienceInput={setExperienceInput}
      />
      <EducationForm
        {...commonProps}
        educationInput={educationInput}
        setEducationInput={setEducationInput}
      />
      <SkillsForm
        {...commonProps}
        skillInput={skillInput}
        setSkillInput={setSkillInput}
      />
    </form >
  )
}

export default Form
