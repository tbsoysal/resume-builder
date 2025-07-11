import { faAddressCard, faAward, faBrain, faBriefcase, faEarthAmericas, faEnvelope, faLocationDot, faPhone, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import styles from "./Cvtemplate01.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
              {data.documents.map((doc, index) => (
                <li key={index} className={styles.documentRow}><h4>{doc.documentOrigin}</h4><p>{doc.documentDate}</p><p>{doc.documentName}</p></li>
              ))}
            </ul>
          </section>
        </div>
        <div className={styles.rightColumn}>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faBriefcase} />DENEYİM</h3>
            <ul className={styles.experienceContainer}>
              {data.experience.map((experience, index) => (
                <li key={index}>
                  <h4 className={styles.companyName}>{experience.companyName}</h4>
                  <p className={styles.jobName}>{experience.jobName}</p>
                  <p className={styles.jobDate}>{experience.jobDate}</p>
                  <p>{experience.jobExplanation}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faUserGraduate} />EĞİTİM</h3>
            <ul className={styles.educationContainer}>
              {data.education.map((edu, index) => (
                <li key={index}>
                  <h4>{edu.educationProgram}</h4>
                  <p>{edu.educationUniversity}</p>
                  <p>{edu.educationDate}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className={styles.sectionHeading}><FontAwesomeIcon icon={faBrain} />YETENEKLER</h3>
            <ul className={styles.skillsContainer}>
              {data.skills.map((skill, index) => (
                <li key={index}>{skill.skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export default cvtemplate01
