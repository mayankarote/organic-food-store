import React, { Component, useState, useEffect  } from "react";
import "../App.css";
import { ButtonContainer } from "./Button";
import Title from "./Title";
import { Link } from "react-router-dom"; 
import Register from "./Register";
import axios from "axios";

const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "http://blogservice.herokuapp.com/api/login",
      user
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  // if there's a user show the message below
  if (user) {
    return (
      <div>
        {user.name} is loggged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }
	return (
		<section>
			<Title title="Login" />
               
			<form onSubmit={handleSubmit} method="post" class=" Container form clearfix">
				<div className="row">
					<input type="text" value={username} placeholder="Enter Username" onChange={({ target }) => setUsername(target.value)} class="input" />
				</div>
				<div className="row">
					<input type="password" value={password} placeholder="enter a password"
						onChange={({ target }) => setPassword(target.value)} class="input" />
				</div>
				<div>
					<Link to="/home" className="ml-auto">
						<ButtonContainer style={{ margin: 20, marginRight: 30 }}>Login</ButtonContainer>
					</Link>
					<Link to="/register" component={{ Register }} className="ml-auto">
						<ButtonContainer style={{ margin: 20, marginLeft: 30 }}>Register</ButtonContainer>
					</Link>
				</div>
				
				
			</form>
		</section>
	);
}

export default Login;
