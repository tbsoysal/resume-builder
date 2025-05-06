import "/src/styles/landingpage/hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="text-container">
        <h1>Profesyonel bir CV oluşturmak artık çok kolay!</h1>
        <p>Kullanımı kolay arayüzümüz ve özenle hazırlanmış şablonlarımız sayesinde dakikalar içinde profesyonel bir CV oluşturabilirsin. 🚀</p>
        <Link className="button primary__button" to="/templates"><img src={`${import.meta.env.BASE_URL}assets/arrow.svg`} alt="arrow" />CV Oluşturmaya Başla! ✨</Link>
        <div className="customer__container">
          <img src={`${import.meta.env.BASE_URL}assets/customersprofilepictures.png`} />
          <p>3.1 milyon kullanıcı tarafından seviliyor!</p>
        </div>
      </div>
      <div className="image-container">
        <img src={`${import.meta.env.BASE_URL}assets/herocvimage.webp`} alt="cv template photo" />
        <a href="" className="imglink_1">
          <div className="text-content">
            <h4>Tahaberk Soysal</h4>
            <p>Front-end Geliştirici</p>
            <img src={`${import.meta.env.BASE_URL}assets/fivestars.png`} />
          </div>
          <div className="img-content">
            <img src={`${import.meta.env.BASE_URL}assets/profileletter.png`} />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
