/* eslint-disable max-len */
import { featuredData } from "../../../mocks/featured-products";

import { Card } from "../../common/Card";
import { Image } from "../../common/Image";
import { Title } from "../../common/Title_Styled";

export function FeaturedProducts() {
  const featuredProducts = featuredData.results;

  return (
    <div className="feature-products-container">
      <Title as="h3">Featured Products</Title>
      <div className="row">
        {featuredProducts.map((product, i) => {
          const productData = product.data;
          const productImg = productData.images[0].image;
          return (
            <div key={i} className="col-xs-6 col-sm-4 col-md-3">
              <Card
                Image={<Image src={productImg.url} alt={productImg.alt} />}
                title={productData.name}
              >
                <span className="price">
                  <b>$</b>${productData.price}
                </span>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
