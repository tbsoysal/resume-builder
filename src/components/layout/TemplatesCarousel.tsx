import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from './Templates.module.scss';
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

export function TemplatesCarousel() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true }, [Autoplay({ stopOnInteraction: false, delay: 2000 })]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {[
          "wk78myowij2vvh1gy8l-s",
          "gs_qryrzly3kldmqhxqsb",
          "pgcuzlm0skbwabfnppg3b",
          "yrf-1jligslm-ta_zmyji",
          "cjy7ca_q8xpaocheef8v1",
          "_xarkap79m3qjwh4w8ztg"
        ].map((url, index) => (
          <div className={styles.embla__slide}>
            <Link to='/create'>
              <img
                src={`https://prod.flowcvassets.com/resume-templates/${url}/960.jpeg`}
                alt={`Cv template ${index + 1}`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}