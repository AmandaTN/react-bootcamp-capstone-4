/* eslint-disable max-len */
import { useProducts } from "../../../../utils/hooks/useProducts";
import { useCategories } from "../../../../utils/hooks/useCategories"
import { Styled } from "./Styled";

import Card from "../../../common/Card";
import Image from "../../../common/Image";
import Title from "../../../common/Title";
import { useState, useEffect } from "react";

export function ProductsGrid({ activeFilters }) {
  const { data : productsData, isLoading : productsIsLoading } = useProducts();
  const { data : {results : categoriesData}} = useCategories();

  console.log(categoriesData)

  const [products, setProducts] = useState(productsData.results);

  useEffect(() => {
    const allProducts = productsData.results;
    const activeList = Object.entries(activeFilters)
      .filter(([name, checked]) => checked)
      .map(([name]) => name);
    const categories =
      activeList.length === 0
        ? categoriesData?.map((category) => category.id)
        : activeList;

    const filteredProducts = allProducts?.filter((product) =>
      categories?.includes(product.data.category.id)
    );

    setProducts(filteredProducts);
  }, [productsData, activeFilters]);

  if (productsIsLoading) {
    return (
      <Styled className="feature-products-container col-xs-12 col-sm-9 col-md-10">
        <Title as="h3">Products</Title>

        <h3>Loading...</h3>
      </Styled>
    );
  }

  return (
    <Styled className="feature-products-container col-xs-12 col-sm-9 col-md-10">
      <Title as="h3">Products</Title>

      <div className="row">
        {products?.map((product, i) => {
          const {
            data: {
              mainimage: { url, alt },
              name,
              price,
              sku,
              category: { id },
            },
          } = product;

          const {data: {name: categoryName} } = categoriesData?.find(
            category => category.id === id
          )

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
