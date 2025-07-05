import { useState } from "react";
import styles from "./Faq.module.scss";

function Faq() {
  const faqData = [
    { question: 'HazırCV Nedir?', answer: "HazırCV , kullanıcıların profesyonel özgeçmişler oluşturmasına ve profesyonel erişimlerini genişletmelerine yardımcı olmak için özelleştirilebilir şablonlar sağlayan bir özgeçmiş oluşturucusudur." },
    { question: 'HazırCV Gerçekten ücretsiz mi?', answer: "Evet, HazırCV, ilk özgeçmişinizin tüm tasarım özellikleri dahil olmak üzere sonsuza kadar ücretsiz kaldığı, gizli ücret veya filigran olmadan ücretsiz bir özgeçmiş oluşturucu sunar." },
    { question: 'HazırCV verilerinizin güvenliğini nasıl sağlıyor?', answer: "HazırCV, GDPR (Genel Veri Koruma Tüzüğü) ile uyumludur, yani veri koruma düzenlemelerine uyarız ve kullanıcı verilerini satmamayı taahhüt ederiz. Kullanıcılar istedikleri zaman verilerini silme seçeneğine sahiptir." }
  ]

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.faq}>
      <h3>Sıkça Sorulan Sorular</h3>
      <ul>
        {faqData.map((item, index) => (
          <AccordionItem key={index} question={item.question} answer={item.answer} isOpen={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} />
        ))}
      </ul>
    </section>
  )
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <li>
      <a className={styles.tab} onClick={onClick}>
        <p className={styles.question}>{question}</p>
        <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
      </a>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </li>
  )
}

export default Faq
