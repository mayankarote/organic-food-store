import React, { Component } from "react";
import "../App.css";
import { ButtonContainer } from "./Button";
import Title from "./Title";
import { Link } from "react-router-dom";

export default class Register extends Component {
  documentData;
  constructor(props) {
    super(props);
    this.onChnageName = this.onChnageName.bind(this);
    this.onChnagePass = this.onChnagePass.bind(this);
    this.onChnageMobile = this.onChnageMobile.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      name: "",
      password: "",
      mobile: "",
    };
  }

  onChnageName = (e) => {
    this.setState({ name: e.target.value });
  };
  onChnagePass = (e) => {
    this.setState({ password: e.target.value });
  };
  onChnageMobile = (e) => {
    this.setState({ mobile: e.target.value });
  };

  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      mobile: "",
    });
  }

  // React Life Cycle
  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem("userInfo"));

    if (localStorage.getItem("userInfo")) {
      this.setState({
        name: this.documentData.name,
        password: this.documentData.password,
        mobile: this.documentData.mobile,
      });
    } else {
      this.setState({
        name: "",
        password: "",
        mobile: "",
      });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("userInfo", JSON.stringify(nextState));
  }

  render() {
    return (
      <section>
        <Title title="Register" />

        <form
          onSubmit={this.handleFormSubmit}
          action="#"
          method="post"
          class=" Container form clearfix"
        >
          <div className="row">
            <input
              type="text"
              id="fname"
              name="fname"
              class="input"
              placeholder="User Name"
              value={this.state.name}
              onChange={this.onChnageName}
            />
          </div>
          <div className="row">
            <input
              id="pass"
              name="message"
              class="input"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChnagePass}
            />
          </div>
          <div className="row">
            <input
              id="num"
              name="message"
              class="input"
              placeholder="Mobile No"
              maxLength={10}
              value={this.state.mobile}
              onChange={this.onChnageMobile}
            />
          </div>
          <div>
            <Link to="/login" className="ml-auto">
              <ButtonContainer style={{ margin: 20, marginLeft: 30 }}>
                Register
              </ButtonContainer>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}
