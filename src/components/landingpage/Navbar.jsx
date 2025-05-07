import { useEffect, useState } from "react";
import "../../styles/landingpage/navbar.scss";
import { Link } from "react-router-dom"

function Navbar() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200;
      let maxOpacity = window.innerWidth > 520 ? 1 : 0.7;
      const newOpacity = Math.min(scrollY / maxScroll, maxOpacity);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}>
      <Link to="/" className="logo-container">
        <img src={`${import.meta.env.BASE_URL}assets/hazircv-logo-transparan.svg`} alt="hazir cv logo" />
        <h2>hazır<span>cv</span></h2>
      </Link>
      <ul className="navigation-container">
        <li><Link className="button secondary__button" to="/templates">Şablonlar</Link></li>
        <li><Link className="button primary__button" to="/create">CV Oluştur</Link></li>
      </ul>
    </header >
  )
}
export default Navbar

