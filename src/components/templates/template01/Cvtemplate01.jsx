import styles from "./Cvtemplate01.module.scss";

function cvtemplate01({ data }) {
  return (
    <>
      <main className={styles.cvtemplate01}>
        <div className={styles.leftColumn}>
          <h1>{data.name}</h1>
          <h3>{data.proficiency}</h3>
          <img src="" alt="" />
          <ul>
            {data.contact}
          </ul>
          <section>
            <h3>PROFIL</h3>
            <p>{data.profile}</p>
          </section>
          <section>
            <h3>DILLER</h3>
            <ul>
              {data.languages}
            </ul>
          </section>
          <section>
            <h3>BELGELER</h3>
            <ul>
              {data.degrees}
            </ul>
          </section>
        </div>
        <div className={styles.rightColumn}>
          <section>
            <h3>PROFESYONEL DENEYIM</h3>
            <ul>
              {data.experience}
            </ul>
          </section>
          <section>
            <h3>EGITIM</h3>
            <ul>
              {data.education}
            </ul>
          </section>
          <section>
            <h3>YETENEKLER</h3>
            <ul>
              {data.skills}
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export default cvtemplate01
