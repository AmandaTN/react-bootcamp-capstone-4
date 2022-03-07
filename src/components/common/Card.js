import { Title } from "./Title_Styled";

export function Card({ Image, title, subtitle = "", children }) {
  return (
    <div className="card-box">
      {!!Image && Image}
      <Title as="h5">{title}</Title>
      {!!subtitle && <Title as="h6">{subtitle}</Title>}
      <hr />
      <div className="text-container">{children}</div>
    </div>
  );
}
