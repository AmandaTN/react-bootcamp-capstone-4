import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

export function BtnSlider({ direction, moveSlide }) {
  return <button onClick={moveSlide} className={`btn-slider btn-slider-${direction}`}>
            {(direction === 'next') ? <BiChevronRight /> : <BiChevronLeft />}
        </button>;
}
