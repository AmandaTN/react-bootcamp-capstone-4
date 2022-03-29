//TODO Fix component to set state correctly

export function SliderDot({ numElments, slideIndex, moveDot }) {
  return Array.from({ length: numElments }).map((i) => (
    <div
      key={i}
      onClick={this.moveDot(i + 1)}
      className={slideIndex === i + 1 ? "dot active" : "dot"}
    >
      {" "}
    </div>
  ));
}
