import { Link } from "react-router-dom";
import styles from './Templates.module.scss';
import buttonStyles from '@/components/common/Button.module.scss';
import { TemplatesCarousel } from "./TemplatesCarousel";

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
      <TemplatesCarousel />
      <Link className={`${buttonStyles.button} ${styles.showTemplatesButton}`} to={'/template'}>Tüm Şablonları Göster</Link>
    </section>
  );
}

export default Templates;