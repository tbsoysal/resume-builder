import styles from "../CreationPage.module.scss";
import { ProfileType, CvDataType } from "../CvData";

interface ProfileTextProps {
  setCvData: React.Dispatch<React.SetStateAction<CvDataType>>;
  profileVisibility: ProfileType;
}

const ProfileText = ((props: ProfileTextProps) => {
  const visible = props.profileVisibility.visible;
  return (
    <div style={{ display: visible ? 'block' : 'none' }} className={styles.profileSection}>
      <label htmlFor="profiletext">Kendinizden bahsedin</label>
      <textarea onChange={e => props.setCvData(prev => ({ ...prev, profileText: e.target.value }))} id='profiletext' placeholder='Kendinizden bahsedin...' />
    </div>
  )
})

export default ProfileText
