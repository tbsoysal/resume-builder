import styles from './Testimonials.module.scss';
import { TestimonialsCarousel } from './TestimonialsCarousel';

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div>
        <h3>Binlerce Kişi Bizi Tercih Etti</h3>
      </div >
      <TestimonialsCarousel />
    </section >
  )
}

export default Testimonials
