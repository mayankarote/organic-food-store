import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "../Cart/CartColumns";
import CartList from "../Cart/CartList";
import CartTotals from "../Cart/CartTotals";
import { ProductConsumer } from "../../context";
import EmptyCart from "../Cart/EmptyCart";

export default class Login extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
