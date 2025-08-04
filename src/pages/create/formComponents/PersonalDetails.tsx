import { CvDataType } from "../CvData"

interface PersonalDetailsProps {
  setCvData: React.Dispatch<React.SetStateAction<CvDataType>>;
}

const PersonalDetails = ({ setCvData }: PersonalDetailsProps) => {
  return (
    <>
      <h3>Kişisel Bilgiler</h3>
      <label htmlFor="nameinput">Ad ve Soyad</label>
      <input onChange={e => setCvData(prev => ({ ...prev, firstName: e.target.value }))} id='nameinput' type="text" placeholder='Adınızı ve soyadınızı giriniz' />

      <label htmlFor="proficiency-input">Meslek</label>
      <input onChange={e => setCvData(prev => ({ ...prev, jobTitle: e.target.value }))} id='proficiency-input' type="text" placeholder='Meslek/Uzmanlık alanınızı giriniz' />

      <label htmlFor="emailinput">E-mail</label>
      <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))} id='emailinput' type="email" placeholder='Mail adresinizi giriniz' />

      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="phoneinput">Telefon</label>
          <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))} id='phoneinput' type="text" placeholder='Telefon numaranızı giriniz' />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="locationinput">Konum</label>
          <input onChange={e => setCvData(prev => ({ ...prev, contact: { ...prev.contact, location: e.target.value } }))} id='locationinput' type="text" placeholder='Ülke ve şehir giriniz' />
        </div>
      </div>
    </>
  )
}

export default PersonalDetails
