import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from './Testimonials.module.scss';
import Autoplay from "embla-carousel-autoplay";

export function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay({ stopOnInteraction: false })]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <p>HazırCV kariyerimi değiştirdi. Sıkışıp kaldığım, ilerleme imkanı olmayan bir fast food işindeydim ve kendi hazırladığım özgeçmişi kullanıyordum. HazırCV’yi Reddit’te keşfettim. Diğer “ücretsiz” araçlar gibi özgeçmişinizi elinizde tutmak yerine, HazırCV gerçekten işe yarayan bir hizmet sundu. HazırCV sayesinde FedEx Ground ve The Source’ta iş buldum.</p>
          <div>
            <div>
              <h4>Kerem Yılmaz</h4>
              <p>İnsan Kaynakları & Pazarlama</p>
            </div>
            <img src={`${import.meta.env.BASE_URL}assets/reddit.svg`} alt="reddit logo" />
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>Bu araç harika. Kullanımı kolay ve özgeçmişinizi tam istediğiniz gibi özelleştirmenize olanak tanıyor [...]</p>
          <div>
            <div>
              <h4>@ZFYildiz</h4>
              <p>Yazılım Geliştirici</p>
            </div>
            <img src={`${import.meta.env.BASE_URL}assets/pletter.svg`} alt="profile logo" />
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>Kullanımı çok kolay ve CV hazırlarken gerçekten keyif alıyorum. Gelecek için küçük bir iyileştirme önerisi: “profil” gibi bazı bölümler tüm sayfa genişliğini kaplayabilir. Yine de, şu ana kadar harika bir iş çıkarmışsınız!</p>
          <div>
            <h4>Fatih Gümüş</h4>
            <p>Mutlu Kullanıcı</p>
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>Genel olarak, ücretsiz bir CV hazırlama aracı arıyorsanız, bunun üzerine tanımıyoruz.</p>
          <div>
            <h4>Tüketici Savunucusu</h4>
            <p>consumersadvocate.org</p>
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>Kullanımı çok kolay. Harika bir araç; her güncellemeyle daha da iyiye gidiyorlar. 2 yılı aşkın süredir kullanıyorum.</p>
          <div>
            <div>
              <h4>Utku Çağlar Yazıcı</h4>
              <p>Pazarlama</p>
            </div>
            <img src={`${import.meta.env.BASE_URL}assets/pletter.svg`} alt="profile logo" />
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>Sitenizi çok seviyorum!!! Dürüst çalışmaya devam edin, insanlar dolandırıcı olmayan bir CV hazırlama aracına ihtiyaç duyuyor.</p>
          <div>
            <h4>Baran Erdenay</h4>
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>Yıllardır böyle bir şeyi bekliyordum ve bu ürüne harcanan çabayı gerçekten takdir ediyorum. Profesyonel tasarım ve biçimlendirme kurallarını herkes için ulaşılabilir ve basit hale getirmişsiniz — bununla gurur duymalısınız. [...] Tanıdığım herkese HazırCV'den bahsettim. Bravo!</p>
          <div>
            <h4>Tahir Aksoy</h4>
          </div>
        </div>
      </div>
    </div >
  );
}
