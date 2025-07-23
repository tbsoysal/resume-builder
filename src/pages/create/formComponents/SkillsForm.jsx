import styles from "../CreationPage.module.scss";

const SkillsForm = (props) => {
  const visible = props.skillInput.visible;

  return (
    <div style={{ display: visible ? 'block' : 'none' }} className={styles.skillsSection}>
      <h3>Yetenekler</h3>
      <div>
        <input type="text" id="skillInput" value={props.skillInput.text} onChange={e => props.setSkillInput({ text: e.target.value, visible: true })} />
        <input type='button' value='Ekle' onClick={() => props.addItem('skills', props.skillInput, () => props.setSkillInput({ text: '', visible: true }))} />
        {props.cvData.skills.map((skill, index) => (
          <span key={index} onClick={() => props.removeItem('skills', index)} className={styles.languageTag}>
            {skill.text} x
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillsForm
