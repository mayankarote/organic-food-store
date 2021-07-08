import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import "../App.css";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, price, title, inCart } = value.detailProduct;

          return (
            <div id="modal">
              {/* title */}
              <div className="row text-center">
                <div className="col-10 mx-auto my-5">
                  <h3 className="text-black" style={{ marginBottom: 50 }}>
                    {title}
                  </h3>
                  {/* image */}
                  <div className="col-md-6">
                    <img
                      src={img}
                      className="img-fluid imgg"
                      alt=""
                      style={{
                        marginLeft: 130,
                        marginBottom: 40,
                        borderColor: "grey",
                      }}
                    />
                  </div>

                  {/* price */}
                  <h4 className="text-black" style={{ marginBottom: 80 }}>
                    price : <span>$</span>
                    {price}
                  </h4>
                  {/* Button */}
                  <Link to="/">
                    <ButtonContainer>back</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </ButtonContainer>
                  {/* buttons */}
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
