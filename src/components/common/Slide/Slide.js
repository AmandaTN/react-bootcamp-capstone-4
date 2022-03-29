/* eslint-disable max-len */

export function Slide({slideIndex, index, imgSrc, imgId, imgAlt, imgStyle}) {
  return (
          <div
            style={imgStyle}
            id={imgId}
            className={`${
              slideIndex === (index + 1) ? "slide active-anim" : "slide"
            }`}
          >
            <img
              alt={imgAlt}
              src={imgSrc}
            />
          </div>
        );
}