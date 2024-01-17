import { useRef, useState } from "react";
import s from "./Carousel.module.scss";

export default function Carousel({ pictures }: { pictures: string[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const myRef = useRef<HTMLImageElement>(null);

  if (pictures.length === 1) {
    return (
      <div className={s.carousel}>
        <img src={pictures[0]} alt="" />
      </div>
    );
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );

    myRef.current?.focus();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );

    myRef.current?.focus();
  };

  return (
    <div className={s.carousel}>
      <p className={s.currentIndicator}>
        <span aria-atomic="true" aria-live="assertive">
          {currentSlide + 1}
        </span>{" "}
        / {pictures.length}
      </p>
      <button className={s.previous} onClick={goToPrevSlide}>
        <span className={s.buttonText}>Previous</span>
        <span className={s.previousIcon}></span>
      </button>
      <img tabIndex={-1} ref={myRef} src={pictures[currentSlide]} alt="" />
      <button className={s.next} onClick={goToNextSlide}>
        <span className={s.buttonText}>Next</span>
        <span className={s.nextIcon}></span>
      </button>
    </div>
  );
}
