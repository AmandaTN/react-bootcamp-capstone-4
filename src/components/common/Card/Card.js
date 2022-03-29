import Title from "../Title";

export function Card({ Image, title: {name, as}, subtitle = "", className, children }) {
  return (
    <div className={`${className} card-box`}>
      {Image}
      <Title as={as}>{name}</Title>
      {subtitle && <Title as="h6">{subtitle}</Title>}
      <hr />
      <div className="text-container">{children}</div>
    </div>
  );
}
