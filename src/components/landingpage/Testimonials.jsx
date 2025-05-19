import "../../styles/landingpage/testimonials.scss";

function Testimonials() {
  return (
    <section className="testimonials">
      <div>
        <h3>Binlerce Kişi Bizi Tercih Etti</h3>
        <div className="controlls">
          <a className="passive"><svg className="passive" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" aria-label="Arrow Left"><path fill="currentColor" fill-rule="evenodd" d="M9.145 32.552L31.772 9.925l3.771 3.771-16.19 16.19h33.942v5.333H19.353l16.19 16.19-3.771 3.77L9.145 32.553z" clip-rule="evenodd"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" ><path fill="currentColor" fill-rule="evenodd" d="M54.853 31.449L32.227 54.076l-3.771-3.771 16.19-16.19H10.702v-5.333h33.942l-16.19-16.19 3.771-3.77 22.627 22.627z" clip-rule="evenodd"></path></svg></a>
        </div>
      </div>
      <ul>
        <li>
          <p>HazırCV kariyerimi değiştirdi. Sıkışıp kaldığım, ilerleme imkanı olmayan bir fast food işindeydim ve kendi hazırladığım özgeçmişi kullanıyordum. HazırCV’yi Reddit’te keşfettim. Diğer “ücretsiz” araçlar gibi özgeçmişinizi elinizde tutmak yerine, HazırCV gerçekten işe yarayan bir hizmet sundu. HazırCV sayesinde FedEx Ground ve The Source’ta iş buldum.</p>
          <div>
            <div>
              <h4>Kerem Yılmaz</h4>
              <p>İnsan Kaynakları & Pazarlama</p>
            </div>
            <img src="/public/assets/reddit.svg" alt="reddit logo" />
          </div>
        </li>
        <li>
          <p>Bu araç harika. Kullanımı kolay ve özgeçmişinizi tam istediğiniz gibi özelleştirmenize olanak tanıyor [...]</p>
          <div>
            <div>
              <h4>@ZFYildiz</h4>
              <p>Yazılım Geliştirici</p>
            </div>
            <img src="/public/assets/pletter.svg" alt="profile logo" />
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
            <img src="/public/assets/pletter.svg" alt="profile logo" />
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
    </section>
  )
}

export default Testimonials
