import styles from './Benefits.module.scss';

function Benefits() {
  return (
    <section className={styles.benefits}>
      <h3>İhtiyacınız olan her şey, basit hale getirildi</h3>
      <p>Gizli ücret yok, filigran yok, sürpriz yok. Verileriniz güvende kalır, ilk özgeçmişiniz sonsuza kadar ücretsizdir ve istediğiniz zaman oluşturabilir, düzenleyebilir ve indirebilirsiniz.</p>

      <ul>
        <li>
          <div className={styles.imageContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Gift" ><path fill="currentColor" d="M18.5 8.5h-.844c.219-.375.344-.781.344-1.25 0-1.5-1.25-2.75-2.75-2.75-1.313 0-2.156.688-3.219 2.156C10.937 5.188 10.094 4.5 8.812 4.5a2.754 2.754 0 00-2.75 2.75c0 .469.094.875.313 1.25H5.5A1.5 1.5 0 004 10v4c0 .281.219.5.5.5H5v3.375c0 .906.719 1.625 1.625 1.625h10.719c.906 0 1.656-.719 1.656-1.625V14.5h.5c.25 0 .5-.219.5-.5v-4c0-.813-.688-1.5-1.5-1.5zM11.25 18H6.625a.134.134 0 01-.125-.125V14.5H10V13H5.5v-3h5.75v8zM8.781 8.5c-.687 0-1.25-.531-1.25-1.25 0-.688.563-1.25 1.25-1.25.688 0 1.188.25 2.656 2.406l.063.094H8.781zm3.813-.094C14.063 6.25 14.563 6 15.25 6c.688 0 1.25.563 1.25 1.25 0 .719-.563 1.25-1.25 1.25h-2.719l.063-.094zM18.5 13H14v1.5h3.5v3.375c0 .063-.063.125-.156.125H12.75v-8h5.75v3z"></path></svg>
          </div>
          <h4>Sonsuza kadar ücretsiz</h4>
          <p>İlk özgeçmişiniz her zaman ücretsiz kalır. Şart yok, gizli ücret yok, filigran yok. İhtiyacınız olduğunda yüksek kaliteli PDF olarak indirebilirsiniz.</p>
        </li>
        <li>
          <div className={styles.imageContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Database" ><path fill="currentColor" d="M12 5.5c3.031 0 5.5.875 5.5 1.938v.156C17.5 8.656 15.031 9.5 12 9.5c-3.063 0-5.5-.844-5.5-1.906v-.157C6.5 6.375 8.938 5.5 12 5.5zm5.5 4.25v.813c0 1.062-2.469 1.937-5.5 1.937-3.063 0-5.5-.875-5.5-1.938V9.75C7.656 10.594 9.844 11 12 11c2.125 0 4.313-.406 5.5-1.25zm0 3v.813c0 1.062-2.469 1.937-5.5 1.937-3.063 0-5.5-.875-5.5-1.938v-.812C7.656 13.594 9.844 14 12 14c2.125 0 4.313-.406 5.5-1.25zm0 3v.844c0 1.062-2.469 1.906-5.5 1.906-3.063 0-5.5-.844-5.5-1.906v-.844C7.656 16.594 9.844 17 12 17c2.125 0 4.313-.406 5.5-1.25zM12 4c-2.719 0-7 .75-7 3.438v9.156C5 19.28 9.281 20 12 20c2.688 0 7-.719 7-3.406V7.437C19 4.75 14.687 4 12 4z"></path></svg>
          </div>
          <h4>Verileriniz güvende</h4>
          <p>Verilerinizi asla satmıyoruz. Nokta. GDPR uyumluyuz ve verilerinizi istediğiniz zaman silebilirsiniz. Verileriniz, sizin kontrolünüzde.</p>
        </li>
        <li>
          <div className={styles.imageContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Multiple Languages" ><path fill="currentColor" d="M7 10.375h-.031s-.125.656-.219 1.031l-.344 1.188h1.157l-.313-1.188c-.125-.375-.25-1.031-.25-1.031zM21.25 7H2.75a.74.74 0 00-.75.75v8.5c0 .438.313.75.75.75h18.5a.74.74 0 00.75-.75v-8.5a.76.76 0 00-.75-.75zM9.281 15h-.719c-.156 0-.312-.094-.343-.25l-.313-1H6.031l-.281 1c-.031.156-.188.25-.344.25h-.718c-.25 0-.438-.25-.344-.469l1.781-5.25c.063-.156.188-.281.344-.281H7.5c.156 0 .281.125.344.281l1.781 5.25c.094.219-.094.469-.344.469zm11.469.75H12v-7.5h8.75v7.5zm-7.125-4.625h3.438c-.188.406-.47.813-.813 1.219l-.563-.75c-.093-.156-.312-.219-.5-.125l-.437.281c-.188.094-.219.344-.094.531.188.281.438.625.719.938-.281.25-.594.469-.906.656-.156.125-.219.344-.125.5l.25.438c.125.187.344.25.531.124.406-.218.781-.53 1.125-.812.344.281.688.563 1.094.813.187.124.406.062.531-.126l.25-.437c.094-.156.031-.375-.125-.5a7.733 7.733 0 01-.844-.656.68.68 0 00.125-.156c.532-.626.938-1.282 1.157-1.938h.437a.38.38 0 00.375-.375v-.5a.403.403 0 00-.375-.375h-2v-.5A.403.403 0 0016.5 9H16a.38.38 0 00-.375.375v.5h-2a.38.38 0 00-.375.375v.5c0 .219.156.375.375.375z"></path></svg>
          </div>
          <h4>Çok dilli destek</h4>
          <p>İngilizce’den İspanyolca’ya, Çince’ye veya başka bir dile kadar FlowCV sizinle. Tüm içeriği tercih ettiğiniz dile göre özelleştirebilirsiniz.</p>
        </li>
        <li>
          <div className={styles.imageContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Copy" ><path fill="currentColor" d="M18.531 6.063l-1.593-1.594C16.655 4.187 16.28 4 15.874 4H10.5A1.5 1.5 0 009 5.5V7H6.5A1.5 1.5 0 005 8.5v10c0 .844.656 1.5 1.5 1.5h7a1.5 1.5 0 001.5-1.5V17h2.5a1.5 1.5 0 001.5-1.5V7.125c0-.406-.188-.781-.469-1.063zM13.313 18.5H6.686c-.125 0-.187-.063-.187-.188V8.688c0-.093.063-.187.188-.187H9v7c0 .844.656 1.5 1.5 1.5h3v1.313c0 .125-.094.187-.188.187zm4-3h-6.625c-.126 0-.188-.063-.188-.188V5.688c0-.094.063-.188.188-.188H14v2.75c0 .438.313.75.75.75h2.75v6.313c0 .124-.094.187-.188.187zm.187-8h-2v-2h.281c.063 0 .094.031.125.063l1.531 1.53c.032.032.063.063.063.126V7.5z"></path></svg>
          </div>
          <h4>Birden fazla özgeçmiş</h4>
          <p>Özgeçmişinizi kopyalayın, farklı işler, bölgeler veya diller için kolayca uyarlayın. Tek tip özgeçmişler artık geçmişte kaldı.</p>
        </li>
        <li>
          <div className={styles.imageContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Hand point right" ><path fill="currentColor" d="M17.375 8.313h-2.688c.063-.22.063-.47.063-.688 0-1.5-1.094-2.625-2.875-2.625-1.406 0-1.781 1.531-2.344 2.469-.25.406-.531.75-.812 1.062h-.031c-.47.531-.72.719-.938.719h-.063C7.5 9.125 7.25 9 7 9H5c-.563 0-1 .406-1 .906v7.219c0 .5.438.875 1 .875h2c.25 0 .5-.094.688-.25h.062c.906 0 2.094 1.25 3.969 1.25h.687c1.938 0 3.094-1.188 3.125-2.844.375-.531.563-1.25.5-1.937.094-.219.188-.469.25-.719h1.094c1.438 0 2.625-1.156 2.625-2.594 0-1.406-1.219-2.594-2.625-2.594zm0 3.687h-2.844c.406.469.469 1.344-.156 1.938.375.593.063 1.406-.406 1.656.219 1.219-.313 1.906-1.563 1.906h-.656c-1.438 0-2.438-1.094-3.75-1.219V10.75c.781-.094 1.313-.656 1.844-1.25.344-.375.656-.781.937-1.219.469-.75.844-1.781 1.094-1.781.75 0 1.375.281 1.375 1.125 0 1.094-.813 1.656-.813 2.188h4.938c.594 0 1.125.53 1.125 1.093 0 .594-.531 1.094-1.125 1.094zM6.75 16a.74.74 0 01-.75.75.722.722 0 01-.75-.75.74.74 0 01.75-.75.76.76 0 01.75.75z"></path></svg>
          </div>
          <h4>Uzman tavsiyeleri elinizin altında</h4>
          <p>Yazarken faydalı ipuçları alın. Ayrıca, başarılarınızı mükemmel şekilde ifade etmenizi sağlayacak eylem kelimeleri listemizden yararlanın.</p>
        </li>
        <li>
          <div className={styles.imageContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Smile Emoji" ><path fill="currentColor" d="M12 4.25A7.749 7.749 0 004.25 12 7.749 7.749 0 0012 19.75 7.749 7.749 0 0019.75 12 7.749 7.749 0 0012 4.25zm0 14A6.228 6.228 0 015.75 12 6.248 6.248 0 0112 5.75c3.438 0 6.25 2.813 6.25 6.25A6.248 6.248 0 0112 18.25zM9.5 11.5c.531 0 1-.438 1-1 0-.531-.469-1-1-1-.563 0-1 .469-1 1 0 .563.438 1 1 1zm5 0c.531 0 1-.438 1-1 0-.531-.469-1-1-1-.563 0-1 .469-1 1 0 .563.438 1 1 1zm.125 2.281A3.432 3.432 0 0112 15c-1.031 0-2-.438-2.625-1.219a.78.78 0 00-1.063-.094c-.312.25-.374.75-.093 1.063.937 1.125 2.312 1.75 3.781 1.75a4.868 4.868 0 003.75-1.75c.281-.313.25-.813-.094-1.063-.312-.25-.781-.218-1.031.094z"></path></svg>
          </div>
          <h4>ATS uyumlu özgeçmiş</h4>
          <p>Birçok işveren, özgeçmişlerde anahtar kelimeleri tarayan sistemler kullanır. FlowCV ile oluşturduğunuz PDF, bu sistemler tarafından kolayca okunabilir.</p>
        </li>
      </ul>

    </section>
  )
}

export default Benefits
