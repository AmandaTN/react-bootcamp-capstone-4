//import { useCategories } from '../../../utils/hooks/useCategories';
import { categoriesData } from "../../../mocks/product-categories";
import { Title } from "../../common/Title_Styled";
import styled from "styled-components";

const StyledComp = styled.div`
  text-align: center;
`;

export function Categories() {
  const categories = categoriesData.results;

  return (
    <StyledComp className="categories-container">
      <Title as="h3">Our Categories</Title>
      <div className="row">
        <div className="col-md-offset-1 xs-hide sm-hide md-show">
          <></>
        </div>
        {categories.map((category, i) => {
          const imgSrc = category.data.main_image.url;

          return (
            <div className="col-xs-6 col-sm-6 col-md-2" key={i}>
              <div className="category-container">
                <img alt={category.data.main_image.alt} src={imgSrc} />
                <Title as="h5">{category.data.name}</Title>
              </div>
            </div>
          );
        })}
      </div>
    </StyledComp>
  );
}
