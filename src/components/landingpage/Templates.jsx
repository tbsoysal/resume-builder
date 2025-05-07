import { useEffect, useRef, useState } from "react";
import "/src/styles/landingpage/templates.scss";

function Templates() {
  const sourceRef = useRef(null);
  const [alignAmount, setAlignAmount] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const elementRef = useRef(null);
  const currIndexRef = useRef(1);

  const alignCarousel = () => {
    // Get the amount to the left side
    if (sourceRef.current) {
      const rect = sourceRef.current.getBoundingClientRect();
      // Change align amount
      setAlignAmount(rect.left);
    }
  }


  useEffect(() => {
    alignCarousel();
    window.addEventListener('resize', () => {
      alignCarousel();
    });

    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setImageWidth(rect.width);
    }
    const scrollTo = () => {
      let amount;
      if (currIndexRef.current > 5) {
        currIndexRef.current = 0;
        amount = 0;
      } else {
        amount = currIndexRef.current * (imageWidth + 24);
      }
      setAlignAmount(-amount);
      currIndexRef.current = currIndexRef.current + 1;
    }

    const interval = setInterval(() => {
      scrollTo()
    }, 2000);

    return () => {
      window.removeEventListener('resize', alignCarousel);
      clearInterval(interval);
    }
  }, [setImageWidth, imageWidth]);

  return (
    <section className="templates">
      <div className="textcontent" ref={sourceRef}>
        <h2>Ücretsiz CV Şablonları</h2>
        <p>Formatla uğraşmayı bırakın — modern ve ATS-uyumlu (Başvuru Takip Sistemi) şablonlarımız sayesinde her kariyer seviyesinde öne çıkan, profesyonel bir özgeçmiş hazırlayın.</p>
      </div>
      <div className="carousel">
        <ul style={{ transform: `translateX(${alignAmount}px)` }}>
          <li><a href="#"><img ref={elementRef} src="https://prod.flowcvassets.com/resume-templates/wk78myowij2vvh1gy8l-s/960.jpeg" alt="" /></a></li>
          <li><a href="#"><img ref={elementRef} src="https://prod.flowcvassets.com/resume-templates/gs_qryrzly3kldmqhxqsb/960.jpeg" alt="" /></a></li>
          <li><a href="#"><img ref={elementRef} src="https://prod.flowcvassets.com/resume-templates/pgcuzlm0skbwabfnppg3b/960.jpeg" alt="" /></a></li>
          <li><a href="#"><img ref={elementRef} src="https://prod.flowcvassets.com/resume-templates/yrf-1jligslm-ta_zmyji/960.jpeg" alt="" /></a></li>
          <li><a href="#"><img ref={elementRef} src="https://prod.flowcvassets.com/resume-templates/cjy7ca_q8xpaocheef8v1/960.jpeg" alt="" /></a></li>
          <li><a href="#"><img ref={elementRef} src="https://prod.flowcvassets.com/resume-templates/_xarkap79m3qjwh4w8ztg/960.jpeg" alt="" /></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Templates
