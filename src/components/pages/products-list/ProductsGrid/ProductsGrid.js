/* eslint-disable max-len */
import { productsData } from "../../../../mocks/products";
import { categoriesData } from "../../../../mocks/product-categories";
import { Styled } from "./Styled";

import Card from "../../../common/Card";
import Image from "../../../common/Image";
import Title from "../../../common/Title";

export function ProductsGrid({ activeFilters }) {
  let activeList = [];
  for (let filter in activeFilters) {
    console.log(filter);
    if (activeFilters[filter]) {
      activeList.push(filter);
    }
  }

  const categories =
    (Object.keys(activeFilters).length === 0 &&
    activeFilters.constructor === Object) || activeList.length === 0
      ? categoriesData.results.map((category) => category.id)
      : activeList;

  const allProducts = productsData.results;

  const products = () => {
    let result = [];

    categories.map((filter) => {
      return allProducts
        .filter((product) => product.data.category.id === filter)
        .forEach((product) => result.push(product));
    });

    return result;
  };

  return (
    <Styled className="feature-products-container col-xs-12 col-sm-9 col-md-10">
      <Title as="h3">Products</Title>

      <div className="row">
        {products().map((product, i) => {
          const {
            data: {
              mainimage: { url, alt },
              name,
              price,
              sku,
              category: { slug, id },
            },
          } = product;

          let categoryName = "";

          categoriesData.results.forEach((category) => {
            if (category.id === id) {
              categoryName = category.data.name;
            }
          });

          return (
            <div key={sku} className="col-xs-6 col-sm-4 col-md-3">
              <Card
                className="product-card"
                Image={<Image src={url} alt={alt} />}
                title={{ name: name, as: "h6" }}
              >
                Category: {categoryName} <br />
                <span className="price">
                  <b>$</b>
                  {price}
                </span>
              </Card>
            </div>
          );
        })}
      </div>
    </Styled>
  );
}
