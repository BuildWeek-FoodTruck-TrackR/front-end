import React from "react"
import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
	background-color: white;
	align-items: center;
	justify-content: center;
	background-color: #21D4FD;
	background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  	height: 100vh;
`;

export const Form = styled.form`
    min-width: 250px;
  	max-width: 400px;
	border-radius: 24px;
	padding: 15px;
	background-color: white;
    box-shadow: 10px 20px 20px black;
    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-top: 35px;
    }
    label {
        display: block;
        width: 30%;
        margin-left: 60px;
        margin-top: 20px;
    }
    input {
        outline: none;
        margin: 0;
    }
`;



export const Button = styled.button`
    background-color:  #E0E0E0;
	background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
	width: 100%;
	color: white;
  	border: none;
	margin-top: 35px;
  	cursor: pointer;
	padding: 10px;
  	font-family: 'Raleway', sans-seriff;
  	font-size: 1.3rem;
	font-weight: bold;
	border-radius: 24px;
	transition: 0.25s;
`
