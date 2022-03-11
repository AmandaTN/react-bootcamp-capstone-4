/* eslint-disable max-len */
import { featuredData } from "../../../../mocks/featured-products";
import styled from "styled-components";

import Card from "../../../common/Card";
import Image from "../../../common/Image";
import Title from "../../../common/Title";

const StyledComp = styled.div`
  .product-card h5 {
    min-height: 55px;
  }
`;

export function FeaturedProducts() {
  const featuredProducts = featuredData.results;

  return (
    <StyledComp className="feature-products-container container">
      <Title as="h3">Featured Products</Title>
      <div className="row">
        {featuredProducts.map((product, i) => {
          const {
            data: { images, name, price, sku },
          } = product;
          const {
            image: { url, alt },
          } = images[0];
          return (
            <div key={sku} className="col-xs-6 col-sm-4 col-md-3">
              <Card
                className="product-card"
                Image={<Image src={url} alt={alt} />}
                title={name}
              >
                <span className="price">
                  <b>$</b>${price}
                </span>
              </Card>
            </div>
          );
        })}
      </div>
    </StyledComp>
  );
}
