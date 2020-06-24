import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
	background-color: white;
	align-items: center;
	justify-content: center;
	background-color: #21D4FD;
	background-image: linear-gradient(50deg, #21D4FD 0%, #B721FF 100%);
  	height: 100vh;
`;

export const Form = styled.form`
    min-width: 250px;
  	max-width: 400px;
	border-radius: 24px;
	padding: 15px;
	background-color: white;
    box-shadow: 10px 20px 40px black;
    h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-top: 35px;
    }
    label {
        display: block;
        width: 30%;
        margin-left: 25px;
        margin-top: 20px;
        font-size: 1.3em;
    }
    input {
        outline: none;
        margin: 0;
        width: 80%;
        border: none;
        border-radius: 24px;
        font-size: 1rem;
        background-color: gainsboro;
        padding: 15px;
        &:focus {
            border: 2px #21D4FD solid;
        }
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
    &:hover {
        opacity: 0.8;
    }
`;

export const FormLinks = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    a {	
	background-color: white;
	border-radius: 24px;
	font-weight: 400;
	color: black;
	line-height: 12px;
	flex: 1;
	text-align: center;
	padding: 10px;
	text-decoration: none;
    transition: 0.25s;
    }
    &:hover {
        opacity: 0.7;
    }
    a:first-of-type {
	margin-right: 5px;
}
`;