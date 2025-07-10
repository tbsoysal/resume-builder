import { faAddressCard, faAward, faBrain, faBriefcase, faEarthAmericas, faEnvelope, faLink, faLocationDot, faPhone, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import styles from "./Cvtemplate01.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function cvtemplate01({ data }) {
  return (
    <>
      <main className={styles.cvtemplate01}>
        <div className={styles.leftColumn}>
          <h1 className={styles.firstName}>{data.firstName}</h1>
          <h3 className={styles.jobTitle}>{data.jobTitle}</h3>
          <ul className={styles.contactList}>
            <li><FontAwesomeIcon icon={faEnvelope} />{data.contact.email}</li>
            <li><FontAwesomeIcon icon={faPhone} />{data.contact.phone}</li>
            <li><FontAwesomeIcon icon={faLocationDot} />{data.contact.location}</li>
            <li><FontAwesomeIcon icon={faLinkedin} />{data.contact.linkedin}</li>
            <li><FontAwesomeIcon icon={faLink} />{data.contact.website}</li>
          </ul>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faAddressCard} />PROFİL</h3>
            <p className={styles.profileText}>{data.profileText}</p>
          </section>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faEarthAmericas} />YABANCI DİL</h3>
            <ul className={styles.languagesContainer}>
              {data.languages.map((language, index) => (
                <li className={styles.languageRow} key={index}>
                  <p>{language.name}</p>
                  <ul className={styles.languageLevel}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li key={i} className={i < language.level ? styles.active : ''}></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faAward} />BELGELER</h3>
            <ul className={styles.documentsList}>
              <li className={styles.documentRow}><h4>Ataturk University</h4><p>Erzurum 2025</p><p>Bilgisayar Programlama Ön Lisans Diploması</p></li>
              <li className={styles.documentRow}><h4>Amerikan Kültür Dil Okulları</h4><p>Adana 2020</p><p>İngilizce B1 Seviyesi Sertifikası</p></li>
            </ul>
          </section>
        </div>
        <div className={styles.rightColumn}>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faBriefcase} />DENEYİM</h3>
            <ul className={styles.experienceContainer}>
              <li>
                <h4 className={styles.companyName}>Appleseed Inc.</h4>
                <p className={styles.jobName}>Business Development Consultant</p>
                <p className={styles.jobDate}>2023 - present | NewYork</p>
                <ul className={styles.jobExperiences}>
                  <li>Developed and implemented strategic plans resulting in a 30% increase in new business opportunities.</li>
                  <li>Collaborated with cross-functional teams to drive business growth and expansion.</li>
                  <li>Estabilished and maintained relationships with key partners resulting in a 25% increase in sales revenue.</li>
                  <li>Conducted market research and analysis to identify new market opportunities resulting in the successful launch of a new product line.</li>
                </ul>
              </li>
              <li>
                <h4 className={styles.companyName}>Aexus</h4>
                <p className={styles.jobName}>Business Development</p>
                <p className={styles.jobDate}>2018 - 2022 | NewYork</p>
                <ul className={styles.jobExperiences}>
                  <li>Developed and implemented strategic plans resulting in a 30% increase in new business opportunities.</li>
                  <li>Collaborated with cross-functional teams to drive business growth and expansion.</li>
                  <li>Estabilished and maintained relationships with key partners resulting in a 25% increase in sales revenue.</li>
                  <li>Conducted market research and analysis to identify new market opportunities resulting in the successful launch of a new product line.</li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faUserGraduate} />EĞİTİM</h3>
            <ul className={styles.educationContainer}>
              <li>
                <h4>Master of Business Administration</h4>
                <p>Harvard Business School</p>
                <p>2017-2018 | Boston</p>
              </li>
              <li>
                <h4>Master of Business Administration</h4>
                <p>Harvard Business School</p>
                <p>2017-2018 | Boston</p>
              </li>
            </ul>
          </section>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faBrain} />YETENEKLER</h3>
            <ul className={styles.skillsContainer}>
              <li>Strategic thinking and problem-solving.</li>
              <li>relationship building and networking.</li>
              <li>Sales and business development strategy development and execution.</li>
              <li>Team managment and leadership.</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export default cvtemplate01
