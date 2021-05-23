import React, { Component } from "react";
import styled from "styled-components";

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Contact Us</Heading>
				<FooterLink href="#">Dhule, Maharashtra, India</FooterLink>
				<FooterLink href="#">+91 #########</FooterLink>
				<FooterLink href="#">######@gmail.com</FooterLink>
		</Column>
		<Column></Column>

		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
	</Row>
		</Container>
			<Heading  style={{ marginTop: 50 ,marginLeft: 500}}>Copyright © 2021 MSP Organics. Powered by MSP</Heading>
	</Box>
);
};
export default Footer;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
