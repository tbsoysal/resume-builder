import "/src/styles/landingpage/howitworks.scss";

function Howitworks() {
  return (
    <section className="howitworks">
      <h2>HazırCV nasıl çalışır?</h2>
      <ul>
        <li>
          <img src="https://assets.flowcvassets.com/resume-landing/step1-content-1000.webp" alt="" />
          <div className="text-content">
            <h3>1. İçeriğini Kolayca Ekle</h3>
            <p>Özgeçmişini oluştur — her adımda sana rehberlik ediyoruz, böylece profesyonel ve etkileyici bir sonuç elde edersin</p>
          </div>
        </li>
        <li>
          <img src="https://assets.flowcvassets.com/resume-landing/step2-design-1000.webp" alt="" />
          <div className="text-content">
            <h3>2. Tasarımını Zahmetsizce Yap</h3>
            <p>50'den fazla şablon arasından seç, stiline ve kariyerine uygun şekilde her detayı özelleştir.</p>
          </div>
        </li>
        <li>
          <img src="https://assets.flowcvassets.com/resume-landing/step3-download-1000.webp" alt="" />
          <div className="text-content">
            <h3>3. İndir ve Paylaş</h3>
            <p>Özgeçmişini PDF olarak indir veya sana özel bağlantı ile online olarak paylaş.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Howitworks
