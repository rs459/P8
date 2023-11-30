import { useRef, useState } from "react";

export default function Carousel({ pictures }: { pictures: string[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const myRef = useRef<HTMLImageElement>(null);

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
    <>
      <p>
        <span aria-atomic="true" aria-live="assertive">
          {currentSlide + 1}
        </span>{" "}
        / {pictures.length}
      </p>
      <button onClick={goToPrevSlide}>Previous</button>
      <img
        tabIndex={-1}
        ref={myRef}
        height="100"
        src={pictures[currentSlide]}
        alt=""
      />
      <button onClick={goToNextSlide}>Next</button>
    </>
  );
}
