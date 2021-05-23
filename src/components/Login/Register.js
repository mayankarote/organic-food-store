import React, { Component } from "react";
import "../../App.css";
import { ButtonContainer } from "../Button";
import Title from "../Title";
import { Link } from "react-router-dom"; 

export default class Register extends Component {
  render() {
    return (
		<section>
			 <Title title="Register" />
               
            <form action="#" method="post" class=" Container form clearfix">
					<div className="row">
						<input type="text" id="fname" name="fname" class="input" placeholder="User Name"/>
					</div>
					<div className="row">
						<input id="pass" name="message" class="input" placeholder="Password"/>
                </div>
                <div className="row">
						<input id="num" name="message" class="input" placeholder="Mobile No"/>
				</div>
				<div>
					<Link to="/home" className="ml-auto">
						<ButtonContainer style={{ margin: 20, marginLeft: 30 }}>Register</ButtonContainer>
					</Link>	
				</div>
				
				
				</form>
      </section>
    );
  }
}
