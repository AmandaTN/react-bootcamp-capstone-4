import { Title } from "../common/Title_Styled";
import { SearchBar } from "../common/SearchBar";
import { Icon } from "../common/Icon";
import styled, { css } from "styled-components";

const StyledHeader = styled.div`
  align-items: center;
  padding: 15px 20px;

  .row {
    align-items: center;
  }

  .shoppig-cart-container a {
    color: black;
  }

  .shoppig-cart-container svg {
    width: 30px;
    height: 30px
  }
`;

export const Header = () => {
  return (
    <StyledHeader className="header">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8">
          <div className="store-name-container">
            <Title as="h4">Pietra</Title>
          </div>
        </div>
        <div className="col-xs-8 col-sm-8 col-md-3">
          <SearchBar placeholder="Search">
            <Icon iconName="BiSearchAlt2" />
          </SearchBar>
        </div>
        <div className="col-xs-4 col-sm-4col-md-1">
          <div className="shoppig-cart-container">
            <a href="#">
              <Icon iconName="BiCartAlt" />
            </a>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
