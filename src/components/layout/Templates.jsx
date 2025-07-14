import { Link } from "react-router-dom";
import styles from './Templates.module.scss';
import buttonStyles from '@/components/common/Button.module.scss';

function Templates() {

  return (
    <section className={styles.templates}>
      <div className={styles.textcontent} >
        <h2>Ücretsiz CV Şablonları</h2>
        <p>
          Formatla uğraşmayı bırakın — modern ve ATS-uyumlu (Başvuru Takip
          Sistemi) şablonlarımız sayesinde her kariyer seviyesinde öne çıkan,
          profesyonel bir özgeçmiş hazırlayın.
        </p>
      </div>

      <div className={styles.carousel}>
        <ul>
          {[
            "wk78myowij2vvh1gy8l-s",
            "gs_qryrzly3kldmqhxqsb",
            "pgcuzlm0skbwabfnppg3b",
            "yrf-1jligslm-ta_zmyji",
            "cjy7ca_q8xpaocheef8v1",
            "_xarkap79m3qjwh4w8ztg",
          ].map((id, index) => (
            <li key={index}>
              <a href="#">
                <img
                  src={`https://prod.flowcvassets.com/resume-templates/${id}/960.jpeg`}
                  alt={`CV Template ${index + 1}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Link className={`${buttonStyles.button} ${styles.showTemplatesButton}`} to={'/template'}>Tüm Şablonları Göster</Link>
    </section>
  );
}

export default Templates;
