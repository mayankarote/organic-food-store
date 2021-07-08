import React, { Component } from "react";
import "../App.css";
import ab from "../assets/ab.jpg";
import visionmission from "../assets/visionmission.jpg";
import philosophy from "../assets/philosophy.jpg";
import ourspeciality from "../assets/ourspeciality.jpg";
import styled from "styled-components";
import Title from "./Title";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeWrapper className="py-5">
          <div>
            <Title title="About Us" />
            <h3
              className="text-black text-center"
              style={{ marginTop: 70, color: "green" }}
            >
              Our Journey Into The World Of Organics
            </h3>
            <hr className="hr" />
            <div className="row">
              <div className="" style={{ marginTop: 80 }}>
                <div className="banner-color pd">
                  <div className="" style={{ textAlign: "center" }}>
                    <img src={ab} alt="Image" className="img1" />
                    <p style={{ padding: 50 }}>
                      Situated in Mumbai (only 40 Kms away from India Gate), we
                      are an exclusive private labelling company with immense
                      knowledge and experience in manufacturing, quality
                      controls and innovative designing. Our rich experience
                      helps us in ensuring that the products brought to you are
                      100% chemical free. From procuring 100% genuine and
                      certified products from farmers to packaging, we carry out
                      every task carefully and organically
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container ">
              <div className="title-head">
                <h2
                  className="text-black  text-center"
                  style={{ paddingTop: 100, color: "green" }}
                >
                  A Legacy of Nutrition Health
                </h2>
                <hr className="hr" />
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <img src={visionmission} className="img1" alt="" />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="inside-single">
                    <h4 className="title">Vision</h4>
                    <div className="description">
                      <p style={{ textAlign: "justify" }}>
                        To help people live a better, healthier, and wholesome
                        life by providing them with 100% certified, authentic
                        organic food.
                      </p>
                    </div>
                    <br />
                    <h4 className="title">Mision</h4>
                    <div className="description">
                      <p style={{ textAlign: "justify" }}>
                        To educate and enlighten the general strata about the
                        positive effects of adopting an organic lifestyle.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container ">
              <div
                className="title-head"
                style={{ paddingTop: 100, color: "green" }}
              >
                <h2 className="text-black text-center">Values We Live By</h2>
                <hr className="hr" />
              </div>

              <div className="row about-us-card-wrap">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <img src={philosophy} className="img2" alt="philosophy" />
                  <div className="content pd">
                    <h3 className="widget-title">Our Philosophy</h3>

                    <p style={{ textAlign: "justify" }}>
                      In order to enable easy availability of pure and organic
                      food products, we, at Vedant Organics, extend our support
                      and assistance to those who share our vision of growing
                      sustainably with nature. We believe that long-lasting
                      growth is unimaginable without preserving the nature. Our
                      goal is to spread health and wellness while maintaining
                      ecological balance through a constant supply of quality
                      assured products.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <img
                    src={ourspeciality}
                    className="img2"
                    alt="ourspeciality"
                  />
                  <div className="content pd">
                    <h3 className="widget-title">Our Speciality</h3>
                    <p style={{ textAlign: "justify" }}>
                      {" "}
                      We offer “Private Labelling” services wherein we provide
                      your organisation with organically grown products
                      cultivated under our surveillance. From farming to
                      packaging, we perform every function with utmost care and
                      as per our principles of authenticity and purity. We also
                      develop need-based processed organic food. We help you
                      achieve your goal of providing organic products at
                      competitive cost and zero hassle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HomeWrapper>
      </React.Fragment>
    );
  }
}
//  const HomeWrapper = styled.section``;

export const HomeWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    top: 50px;
    width: 100%;
    padding: 50px;
    bottom: 350px;
    margin-top: 100px;
    position: relative;
    display: flex;
    flex: 1 1 auto;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  h5 {
    color: green;
  }
`;
