import { Title } from "../common/Title_Styled";
import styled from 'styled-components'

const StyledComp = styled.footer`
  text-align: center;
  padding: 50px 20px;
  margin: 40px 0 0;
  background-color: #f0f0f0;
`;

export const Footer = () => {
  return (
    <StyledComp className='footer'>
      <Title as="h6">
        <i>Ecommerce created during Wizeline’s Academy React Bootcamp</i>
      </Title>{" "}
    </StyledComp>
  );
};
