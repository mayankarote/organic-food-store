import React, { Component } from "react";
import "../App.css"
import ab from "../assets/ab.jpg";
import img1 from "../assets/img2.jpg";
import styled from "styled-components";
import { HomeConsumer } from "../context1";

export default class Home extends Component {
  
  render() {
    return (
      <React.Fragment>
        <HomeWrapper className="py-5">
          <div className="">
            <div className="">
              <HomeConsumer>
                {value => {
                  return (
                    <div>
                      <img src={img1} className="img1"/>
                      <div className="row">
                        <div className="decorate">
                          <h3 style={{fontSize: 50}}>Eat Organic is not a trend,
                              <p> it's return to tradition</p></h3>
                        </div>
                      </div>
                        
                    <div className="container">
                       <div className="row">
                        <div className="" style={{marginTop: 150}}>
                          <h2 className="text-center" id="3"> About Us</h2>
                            <div className="banner-color pd">
                              <div className="" style={{ textAlign: "center" }}>
                                <img src={ab} alt="Image" style={{ width: 950, height: 300 }} />
                                <p>Situated in Mumbai (only 40 Kms away from India Gate), we are an exclusive private labelling company with immense knowledge and experience in manufacturing, quality controls and innovative designing. Our rich experience helps us in ensuring that the products brought to you are 100% chemical free. From procuring 100% genuine and certified products from farmers to packaging, we carry out every task carefully and organically</p>
                              </div>
                            </div>
                          </div>
                      </div>

                    <div className="row">
                      <div className="" style={{marginTop: 150}}>
                          <h2 className="text-center" id="3"> Work Process?</h2>
                       {/* Banner */}
                        <div className="banner-color pd">
                          <div className="row">
                            <div className="col-md-3" >
                              <div className="inside text-center bgColor">
                                  {/* <img src="icon/wp-1.png" className="img1" style={{width: 60}}/> */}
                                <h5>SORTING </h5>
                                <p>We begin with sorting products from the material procured through 100% organic farms.</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="inside text-center bgColor">
                                {/* <img src="./icon/wp-2.png" style={{ width: 60 }}/> */}
                                <h5>CLEANING  </h5>
                                  <p className="pd">Furthermore, we clean the sorted material to ensure that our products are of supreme quality.</p>
                                  <br></br>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="inside text-center bgColor">
                                  {/* <img src="./icon/wp-3.png" style={{width: 60}}/> */}
                                <h5>DESTONING  </h5>
                                <p>The next step is to remove stones and other unnecessary materials from grains and cereals.</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="inside text-center bgColor">
                                  {/* <img src="./icon/wp-4.png" style={{width: 60}}/> */}
                                <h5>ROASTING</h5>
                                <p >The products are then roasted to enhance the aromas and are infused with beneficial nutrients.</p>
                              </div>
                            </div>
                          </div>
                          <div className="row pd">
                          <div className="col-md-3">
                              <div className="inside text-center bgColor">
                                  {/* <img src="./icon/wp-5.png" style={{width: 60}}/> */}
                                <h5>GRINDING  </h5>
                                <p > In this step products are grounded and blended to bring out their fine quality &amp; flavours. </p>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="inside text-center bgColor">
                                  {/* <img src="./icon/wp-6.png" style={{width: 60}}/> */}
                                <h5>LABELLING</h5>
                                <p >After the stages of quality check, products are then labelled as per their categories and brand.</p>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="inside text-center bgColor ">
                                  {/* <img src="./icon/wp-7.png" style={{width: 60}}/> */}
                                <h5>PACKAGING</h5>
                                <p >They are carefully packaged so that their oils and aroma remain intact, then they're dispatched.</p>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="inside text-center bgColor" >
                                {/* <img src="icon/wp-8.png" style={{ width: 60 }}/> */}
                                <h5>SHIPPING </h5>
                                <p > After the packaging and last checks, finally, they’re shipped to their final destination.</p>
                              </div>
                          </div>
                        </div>	
                      </div>
                    </div>
                        </div>
                        </div>  
                </div>
                  );
                }}
              </HomeConsumer>
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
  h5{
    color: green;
  }
`;


