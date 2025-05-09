import { useEffect, useRef, useState } from "react";
import "/src/styles/landingpage/templates.scss";

const GAP_BETWEEN_IMAGES = 24;
const SCROLL_INTERVAL = 4000;

function Templates() {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const currentIndex = useRef(1);
  const lastImageRef = useRef(null);

  const [carouselOffset, setCarouselOffset] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const updateCarouselOffset = () => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setCarouselOffset(rect.left);
  };

  let offset = 0;
  const scrollCarousel = () => {

    if (isLastImageVisible()) {
      currentIndex.current = 0;
      setCarouselOffset(0);
      return;
    }

    offset = currentIndex.current * (imageWidth + GAP_BETWEEN_IMAGES);
    setCarouselOffset(-offset);

    currentIndex.current += 1;
  };

  const isLastImageVisible = () => {
    if (!lastImageRef.current) return false;

    const carousel = document.querySelector('.carousel');
    const lastRect = lastImageRef.current.getBoundingClientRect();
    const carouselRect = carousel.getBoundingClientRect();

    return lastRect.right <= carouselRect.right;
  }

  useEffect(() => {
    updateCarouselOffset();

    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setImageWidth(rect.width);
    }

    const intervalId = setInterval(scrollCarousel, SCROLL_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageWidth]);

  return (
    <section className="templates">
      <div className="textcontent" ref={headerRef}>
        <h2>Ücretsiz CV Şablonları</h2>
        <p>
          Formatla uğraşmayı bırakın — modern ve ATS-uyumlu (Başvuru Takip
          Sistemi) şablonlarımız sayesinde her kariyer seviyesinde öne çıkan,
          profesyonel bir özgeçmiş hazırlayın.
        </p>
      </div>

      <div className="carousel">
        <ul style={{ transform: `translateX(${carouselOffset}px)` }}>
          {[
            "wk78myowij2vvh1gy8l-s",
            "gs_qryrzly3kldmqhxqsb",
            "pgcuzlm0skbwabfnppg3b",
            "yrf-1jligslm-ta_zmyji",
            "cjy7ca_q8xpaocheef8v1",
            "_xarkap79m3qjwh4w8ztg",
          ].map((id, index) => (
            <li key={index}>
              <a href="#">
                <img
                  ref={index === 5 ? lastImageRef : index === 0 ? imageRef : null}
                  src={`https://prod.flowcvassets.com/resume-templates/${id}/960.jpeg`}
                  alt={`CV Template ${index + 1}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div class="pointbuttons">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Templates;
