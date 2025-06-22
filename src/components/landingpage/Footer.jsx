import "/src/styles/landingpage/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="flexContainer">
          <img src="/public/assets/hazircv-logo-transparan.svg" alt="logo" />
          <span>HazırCV</span>
        </div>
        <p className="description">HazırCV, modern web teknolojileri kullanılarak geliştirilmiş bir projedir. React.js ile tasarlanıp kodlanan bu platform, kullanıcı dostu bir deneyim sunmayı hedeflemektedir. Tüm tasarım ve yazılım süreçleri, Web Developer olarak çalışan Tahaberk Soysal tarafından yürütülmüştür. Kullanıcıların hızlı, şık ve etkili özgeçmişler oluşturabilmeleri için özenle hazırlanmıştır.</p>
        <p className="shareText">HazırCV'yi arkadaşlarınız ile paylaşın:
          <ul>
            <li><a href=""><i class="fa-solid fa-envelope"></i></a></li>
            <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href=""><i class="fa-brands fa-square-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-square-x-twitter"></i></a></li>
          </ul>
        </p>
        <p className="infoText">© 2025 HazırCV – Tasarım ve geliştirme: Tahaberk Soysal</p>
      </div>
    </footer>
  )
}

export default Footer
