import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";  
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import "../App.css"

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <ProductWrapper className="py-5">
          <Title title="Healthy eating for a strong heart beating" />
           <div className="container">
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

export const ProductWrapper = styled.section``;
