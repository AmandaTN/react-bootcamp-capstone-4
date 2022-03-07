/* eslint-disable max-len */

export function Slider({slideIndex, index, imgSrc, imgId, imgAlt, imgStyle, gridSlider}) {
  return (
          <div
            style={imgStyle}
            id={imgId}
            className={`${
              slideIndex === (gridSlider ? (index+1) : index + 1) ? "slide active-anim" : "slide"
            }`}
          >
            <img
              alt={imgAlt}
              src={imgSrc}
            />
          </div>
        );
}