import Title from "../../common/Title";
import SearchBar from "../../common/SearchBar";
import Icon from "../../common/Icon";
import {Styled} from './Styled'

export const Header = () => {
  return (
    <Styled className="header">
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
            <a href="#" target="_blank" role="link">
              <Icon iconName="BiCartAlt"/>
            </a>
          </div>
        </div>
      </div>
    </Styled>
  );
};
