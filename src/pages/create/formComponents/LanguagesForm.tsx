import styles from "../CreationPage.module.scss";
import { LanguageType, CategoryName, CvDataType } from "../CvData";

interface LanguagesFormProps {
  languageInput: LanguageType;
  setLanguageInput: React.Dispatch<React.SetStateAction<LanguageType>>;
  addItem: (categoryName: CategoryName, newItemObject: LanguageType, resetInput: () => void) => void;
  removeItem: (categoryName: CategoryName, index: number) => void;
  cvData: CvDataType;
}

const LanguagesForm = (props: LanguagesFormProps) => {
  const visible = props.languageInput.visible;
  return (
    <div style={{ display: visible ? 'block' : 'none' }} className={styles.languagesSection}>
      <h3>Yabancı Dil</h3>
      <div>
        <input onChange={e => props.setLanguageInput(prev => ({ ...prev, name: e.target.value }))} value={props.languageInput.name} id='language' type="text" name="language" />
        <select name="language" onChange={e => props.setLanguageInput(prev => ({ ...prev, level: parseInt(e.target.value) as 1 | 2 | 3 | 4 | 5 }))} value={props.languageInput.level}>
          <option value="1">Başlangıç</option>
          <option value="2">Temel</option>
          <option value="3">Orta</option>
          <option value="4">Profesyonel</option>
          <option value="5">Ana dil</option>
        </select>
        <input onClick={() => props.addItem('languages', props.languageInput, () => { props.setLanguageInput({ name: '', level: 1, visible: true }) })} type="button" value='Ekle' />
        {props.cvData.languages.map((language, index) => (
          <span key={index} onClick={() => props.removeItem('languages', index)} className={styles.languageTag}>
            {language.name} x
          </span>
        ))}
      </div>
    </div>
  )
}

export default LanguagesForm
