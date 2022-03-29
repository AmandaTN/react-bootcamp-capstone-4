import { className } from "postcss-selector-parser";
import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${(props) => {
    switch (props.as || className) {
      case "h1":
        return css`
          font-size: 8em;
          margin: 0.75em 0;
        `;
      case "h2":
        return css`
          font-size: 6em;
          margin: 0.7em 0;
        `;

      case "h3":
        return css`
          font-size: 3.5em;
          margin: 0.65em 0;
        `;

      case "h4":
        return css`
          font-size: 2em;
          margin: 0.6em 0;
        `;

      case "h5":
        return css`
          font-size: 1.5em;
          margin: 0.5em 0;
        `;

      case "h6":
        return css`
          font-size: 1.2em;
          margin: 0.4em 0;
        `;
      default:
        return css`
          font-size: 4em;
          margin: 0.65em 0;
        `;
    }
  }}

`;
