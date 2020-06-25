import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "./LoginStyles.css"
import { FormContainer, Form, FormLinks, Button } from "../styled.js"
import { Link } from 'react-router-dom';



const formSchema = yup.object().shape({
	name: yup.string().min(8, 'must have 8 or more characters').required("Name is a required field."),
	password: yup.string()
	  .required("Must add password")
	  .min(3, '10 or more characters')
  });

 //LOGIN FORM  
const LoginForm = () => {
	const [post, setPost] = useState([]);

	const [formState, setFormState] = useState({
		name: "",
		password: "",
	  });

	  // state for our errors
	  const [errors, setErrors] = useState({
		name: "",
		password: ""
	  });


	//ON SUBMIT FOR FORM 
	const formSubmit = e => {
		e.preventDefault();
		axios
		  .post("https://reqres.in/api/users", formState)
		  .then(res => {
			setPost(res.data); //  use this state to display data on page instead of seeing it on the server
	
			// form is reset if submit is successful 
			setFormState({
			  name: "",
			  password: ""
			});
		  })
		  .catch(err => console.log(err.response));
	  };

	
	  //validate for errors
	  const validateChange = e => {
		// reach into schema to validate each key:value pair
		yup
		  .reach(formSchema, e.target.name)
		  .validate(e.target.value)
		  .then(valid => {
			setErrors({
			  ...errors,
			  [e.target.name]: ""
			});
		  })
		  .catch(err => {
			setErrors({
			  ...errors,
			  [e.target.name]: err.errors[0]
			});
		  });
	  };

	  //display button true if name and password are true
	  const [buttonDisabled, setButtonDisabled] = useState(true);

	  //Will turn after page has loaded and form is validated 
	  useEffect(() => {
		formSchema.isValid(formState).then(valid => {
		  setButtonDisabled(!valid);
		});
	  }, [formState]);



	  //INPUT CHANGE for input tags, add it to ONCHANGE event for both inputs
	  const inputChange = e => {
		  //synthetic event to use after form validation
		e.persist();
		//validate change for errors added here
		validateChange(e);
		setFormState({
			...formState,
			[e.target.name]: e.target.value
		});
	  };

    // Rigo working on login page
    return (
		
        <FormContainer>
			<Form onSubmit={formSubmit}>
				<h1>Login</h1>
				<label htmlFor="name">Username</label>
				<input type="text" name="name" id="name" value={formState.name} onChange={inputChange} placeholder="Please Enter a Username" />
				{errors.name.length > 0 ? <p className="errors">{errors.name}</p> : null}
	
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="username" value={formState.password} onChange={inputChange} placeholder="Please Enter a Password" />
				{errors.password.length > 0 ? <p className="errors">{errors.password}</p> : null}


				{/* button to submit form, will only display if inputs are true  */}
				<Button disabled={buttonDisabled}>Please Log in</Button>

				<FormLinks>
					<a href="#">Forgot Password</a>
					<Link to="/signup">Sign up</Link>
				</FormLinks>
			</Form>
			{/* displaying our post request data */}
			<pre>{JSON.stringify(post, null, 2)}</pre>
		</FormContainer>
    )
}

export default LoginForm;