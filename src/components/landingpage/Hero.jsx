import "../../styles/landingpage/hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="text-container">
        <h1>Profesyonel Bir CV Oluşturmak Artık Çok Kolay!</h1>
        <p>Kullanımı kolay arayüzümüz ve özenle hazırlanmış şablonlarımız sayesinde dakikalar içinde profesyonel bir CV oluşturabilirsin. 🚀</p>
        <Link className="button primary__button" to="/templates"><img src="../../../public/assets/arrow.svg" alt="arrow" />CV Oluşturmaya Başla! ✨</Link>
      </div>
      <div className="image-container">
        <img src="../../../public/assets/herocvimage.webp" alt="cv template photo" />
      </div>
    </section>
  )
}

export default Hero
