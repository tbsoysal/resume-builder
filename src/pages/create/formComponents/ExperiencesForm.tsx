import styles from "../CreationPage.module.scss";
import { ExperienceType, CategoryName, CvDataType } from "../CvData";

interface ExperiencesFormProps {
  experienceInput: ExperienceType;
  setExperienceInput: React.Dispatch<React.SetStateAction<ExperienceType>>;
  addItem: (categoryName: CategoryName, newItemObject: ExperienceType, resetInput: () => void) => void;
  removeItem: (categoryName: CategoryName, index: number) => void;
  cvData: CvDataType;
}

const ExperiencesForm = (props: ExperiencesFormProps) => {
  const visible = props.experienceInput.visible;

  return (
    <div style={{ display: visible ? 'block' : 'none' }} className={styles.experiencesSection}>
      <h3>Deneyim</h3>
      <div>
        <label htmlFor="cName">Şirket Adı</label>
        <input type="text" id="cName" value={props.experienceInput.companyName} onChange={e => props.setExperienceInput(prev => ({ ...prev, companyName: e.target.value }))} />
        <label htmlFor="jName">Alan</label>
        <input type="text" id="jName" value={props.experienceInput.jobName} onChange={e => props.setExperienceInput(prev => ({ ...prev, jobName: e.target.value }))} />
        <label htmlFor="jDate">Tarih - Konum</label>
        <input type="text" id="jDate" value={props.experienceInput.jobDate} onChange={e => props.setExperienceInput(prev => ({ ...prev, jobDate: e.target.value }))} />
        <label htmlFor="jExplanation">Açıklama</label>
        <input type="text" id="jExplanation" value={props.experienceInput.jobExplanation} onChange={e => props.setExperienceInput(prev => ({ ...prev, jobExplanation: e.target.value }))} />
        <input type="button" value="Ekle" onClick={() => props.addItem('experience', props.experienceInput, () => props.setExperienceInput({ companyName: '', jobName: '', jobDate: '', jobExplanation: '', visible: true }))} />
        {props.cvData.experience.map((experience, index) => (
          <span key={index} onClick={() => props.removeItem('experience', index)} className={styles.languageTag}>
            {experience.companyName} x
          </span>
        ))}
      </div>
    </div>
  )
}

export default ExperiencesForm
