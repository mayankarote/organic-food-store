import React, { Component } from "react";
import { storeInfo, detailInfo } from "./data";
const HomeContext = React.createContext();

class HomeProvider extends Component {
  state = {
    products: [],
    detailInfo: detailInfo,
  };
  componentDidMount() {
    this.setInfos();
  }

  setInfos = () => {
    let products = [];
    storeInfo.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.checkCartItems);
  };

  getItem = id => {
    const products = this.state.products.find(item => item.id === id);
    return products;
  };
  handleDetail = id => {
    const products = this.getItem(id);
    this.setState(() => {
      return { detailInfo: products };
    });
  };

  render() {
    return (
      <HomeContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail
        }}
      >
        {this.props.children}
      </HomeContext.Provider>
    );
  }
}
const HomeConsumer = HomeContext.Consumer;

export { HomeProvider, HomeConsumer };
