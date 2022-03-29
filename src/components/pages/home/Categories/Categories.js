import { useCategories } from "../../../../utils/hooks/useCategories"
import Title from "../../../common/Title";
import { Styled } from "./Styled";

export function Categories() {
  const { data : {results : categoriesData}} = useCategories();

  return (
    <Styled className="categories-container">
      <Title as="h3">Our Categories</Title>
      <div className="row">
        <div className="col-md-offset-1 xs-hide sm-hide md-show">
          <></>
        </div>
        {categoriesData?.map((category, i) => {
          const {
            name, main_image: { alt, url: imgSrc },
          } = category.data;

          return (
            <div className="col-xs-6 col-sm-6 col-md-2" key={category.id}>
              <div className="category-container">
                <img alt={alt} src={imgSrc} />
                <Title as="h5">{name}</Title>
              </div>
            </div>
          );
        })}
      </div>
    </Styled>
  );
}
