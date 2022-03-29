/* eslint-disable max-len */
import { featuredData } from "../../../../mocks/featured-products";
import { Styled } from './Styled'

import Card from "../../../common/Card";
import Image from "../../../common/Image";
import Title from "../../../common/Title";
import Button from "../../../common/Button";

export function FeaturedProducts({activeProducts}) {
  const featuredProducts = featuredData.results;

  return (
    <Styled className="feature-products-container container">
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
                title={{name: name, as: 'h5'}}
              >
                <span className="price">
                  <b>$</b>{price}
                </span>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="view-products">
      <Button onClick={activeProducts}>
          View all proucts
        </Button>
      </div>
    </Styled>
  );
}
