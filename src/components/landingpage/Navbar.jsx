import "../../styles/landingpage/navbar.scss";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <Link to="/" className="logo-container">
        <img src={`${import.meta.env.BASE_URL}assets/hazircv-logo-transparan.svg`} alt="hazir cv logo" />
        <h2>hazır<span>cv</span></h2>
      </Link>
      <ul className="navigation-container">
        <li><Link className="button secondary__button" to="/templates">Şablonlar</Link></li>
        <li><Link className="button primary__button" to="/create">CV Oluştur</Link></li>
      </ul>
    </header>
  )
}

export default Navbar
