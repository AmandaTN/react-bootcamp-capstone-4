import { categoriesData } from "../../../../mocks/product-categories";
import Title from "../../../common/Title";
import { Styled } from "./Styled.js";

export function Sidebar({ handleChange, activeFilters }) {
  const categories = categoriesData.results;

  return (
    <Styled className="categories-sidebar col-xs-12 col-sm-3 col-md-2">
      <Title as="h5">Categories</Title>
      <form>
        <ul>
          {categories.map((category, i) => {
            const {
              data: { name },
              id,
              slugs,
            } = category;

            return (
              <li key={id} className={`category-elem ${activeFilters[id] && 'checked'}`}>
                <input
                  type="checkbox"
                  id={id}
                  name={id}
                  value={name}
                  checked={activeFilters[id]}
                  onChange={handleChange}
                />
                <label>
                  <span className="category-name">{name}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </form>
    </Styled>
  );
}
