import styles from './Testimonials.module.scss';

function Testimonials() {

  return (
    <section className={styles.testimonials}>
      <div>
        <h3>Binlerce Kişi Bizi Tercih Etti</h3>
      </div >
      <div className={styles.carouselContainer}>
        <ul>
          <li>
            <p>HazırCV kariyerimi değiştirdi. Sıkışıp kaldığım, ilerleme imkanı olmayan bir fast food işindeydim ve kendi hazırladığım özgeçmişi kullanıyordum. HazırCV’yi Reddit’te keşfettim. Diğer “ücretsiz” araçlar gibi özgeçmişinizi elinizde tutmak yerine, HazırCV gerçekten işe yarayan bir hizmet sundu. HazırCV sayesinde FedEx Ground ve The Source’ta iş buldum.</p>
            <div>
              <div>
                <h4>Kerem Yılmaz</h4>
                <p>İnsan Kaynakları & Pazarlama</p>
              </div>
              <img src={`${import.meta.env.BASE_URL}assets/reddit.svg`} alt="reddit logo" />
            </div>
          </li>
          <li>
            <p>Bu araç harika. Kullanımı kolay ve özgeçmişinizi tam istediğiniz gibi özelleştirmenize olanak tanıyor [...]</p>
            <div>
              <div>
                <h4>@ZFYildiz</h4>
                <p>Yazılım Geliştirici</p>
              </div>
              <img src={`${import.meta.env.BASE_URL}assets/pletter.svg`} alt="profile logo" />
            </div>
          </li>
          <li>
            <p>Kullanımı çok kolay ve CV hazırlarken gerçekten keyif alıyorum. Gelecek için küçük bir iyileştirme önerisi: “profil” gibi bazı bölümler tüm sayfa genişliğini kaplayabilir. Yine de, şu ana kadar harika bir iş çıkarmışsınız!</p>
            <div>
              <h4>Fatih Gümüş</h4>
              <p>Mutlu Kullanıcı</p>
            </div>
          </li>
          <li>
            <p>Genel olarak, ücretsiz bir CV hazırlama aracı arıyorsanız, bunun üzerine tanımıyoruz.</p>
            <div>
              <h4>Consumers Advocate</h4>
              <p>www.consumersadvocate.org</p>
            </div>
          </li>
          <li>
            <p>Kullanımı çok kolay. Harika bir araç; her güncellemeyle daha da iyiye gidiyorlar. 2 yılı aşkın süredir kullanıyorum.</p>
            <div>
              <div>
                <h4>Utku Çağlar Yazıcı</h4>
                <p>Pazarlama</p>
              </div>
              <img src={`${import.meta.env.BASE_URL}assets/pletter.svg`} alt="profile logo" />
            </div>
          </li>
          <li>
            <p>Sitenizi çok seviyorum!!! Dürüst çalışmaya devam edin, insanlar dolandırıcı olmayan bir CV hazırlama aracına ihtiyaç duyuyor.</p>
            <div>
              <h4>Baran Erdenay</h4>
            </div>
          </li>
          <li>
            <p>Yıllardır böyle bir şeyi bekliyordum ve bu ürüne harcanan çabayı gerçekten takdir ediyorum. Profesyonel tasarım ve biçimlendirme kurallarını herkes için ulaşılabilir ve basit hale getirmişsiniz — bununla gurur duymalısınız. [...] Tanıdığım herkese HazırCV'den bahsettim. Bravo!</p>
            <div>
              <h4>Tahir Aksoy</h4>
            </div>
          </li>
        </ul>
      </div>
    </section >
  )
}

export default Testimonials
