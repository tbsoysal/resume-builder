import styles from "../CreationPage.module.scss";

const ProfileText = ((props) => {
  const visible = props.profileVisibility.visible;
  return (
    <div style={{ display: visible ? 'block' : 'none' }} className={styles.profileSection}>
      <label htmlFor="profiletext">Kendinizden bahsedin</label>
      <textarea onChange={e => props.setCvData(prev => ({ ...prev, profileText: e.target.value }))} id='profiletext' type="text" placeholder='Kendinizden bahsedin...' />
    </div>
  )
})

export default ProfileText
