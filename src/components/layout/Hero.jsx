import styles from './Hero.module.scss';
import { Link } from "react-router-dom";
import buttonStyles from "@/components/common/Button.module.scss";

function Hero() {

  return (
    <section className={styles.hero} id="herosection">
      <div className={styles.textContainer}>
        <h1>Profesyonel bir CV oluşturmak artık çok kolay!</h1>
        <p>Kullanımı kolay arayüzümüz ve özenle hazırlanmış şablonlarımız sayesinde dakikalar içinde profesyonel bir CV oluşturabilirsin. 🚀</p>
        <Link className={`${buttonStyles.button} ${buttonStyles.primaryButton}`} to="/template" ><img src='/assets/arrow.svg' alt="arrow" />CV Oluşturmaya Başla! ✨</Link>
        <div className={styles.customerContainer}>
          <img src='/assets/customersprofilepictures.png' />
          <p>3.1 milyon kullanıcı tarafından seviliyor!</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src='/assets/herocvimage.webp' alt="cv template photo" />
        <a href="" className={styles.imglink1}>
          <div className={styles.textContent}>
            <h4>Tahaberk Soysal</h4>
            <p>Front-end Geliştirici</p>
            <img src='/assets/fivestars.png' />
          </div>
          <div className={styles.imgContent}>
            <img src='assets/profileletter.png' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
