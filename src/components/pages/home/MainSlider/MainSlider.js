/* eslint-disable max-len */
import { bannersData } from "../../../../mocks/featured-banners-data";
import { useEffect, useState } from "react";

//Components
import BtnSlider from "../../../common/BtnSlider";
import Slide from "../../../common/Slide";

const banners = bannersData.results;

export function MainSlider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    const newIndex = slideIndex !== banners.length ? slideIndex + 1 : 1;
    setSlideIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = slideIndex !== 1 ? slideIndex - 1 : banners.length;
    setSlideIndex(newIndex);
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        const newIndex = slideIndex !== banners.length ? slideIndex + 1 : 1;
        setSlideIndex(newIndex);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="main-slider-container">
      <div
        className="slider-images-container"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {banners.map((image, i) => {
          const imgSrc = image.data.main_image.url;
          const imgStyle = {
            backgroundImage: `url( ${imgSrc})`,
          };

          return (
            <Slide
              key={image.id}
              slideIndex={slideIndex}
              index={i}
              imgSrc={imgSrc}
              imgId={image.id}
              imgAlt={image.data.main_image.alt}
              imgStyle={imgStyle}
            />
          );
        })}
      </div>

      <div className="slider-buttons-container">
        <BtnSlider direction={"prev"} moveSlide={prevSlide} />
        <BtnSlider direction={"next"} moveSlide={nextSlide} />
      </div>

      <div className="slider-dots-container">
        {Array.from({ length: banners.length }).map((item, i) => (
          <div
            key={i}
            onClick={() => moveDot(i + 1)}
            className={slideIndex === i + 1 ? "dot active" : "dot"}
          >
            {" "}
          </div>
        ))}
      </div>
    </div>
  );
}
