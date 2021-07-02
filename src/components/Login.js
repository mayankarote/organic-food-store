import React, { Component } from "react";
import "../App.css";
import { ButtonContainer } from "./Button";
import Title from "./Title";
import { Link } from "react-router-dom";
import Register from "./Register";

export default class Home extends Component {
  render() {
    return (
      <section>
        <Title title="Login" />

        <form method="post" class=" Container form clearfix">
          <div className="row">
            <input type="text" placeholder="Enter Username" class="input" />
          </div>
          <div className="row">
            <input type="password" placeholder="enter password" class="input" />
          </div>
          <div>
            <Link to="/home" className="ml-auto">
              <ButtonContainer style={{ margin: 20, marginRight: 40 }}>
                Login
              </ButtonContainer>
            </Link>
            <Link to="/register" component={{ Register }} className="ml-auto">
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
// export default Login;
