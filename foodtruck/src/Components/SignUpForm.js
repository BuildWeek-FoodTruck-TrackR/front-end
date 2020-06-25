import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import "./LoginStyles.css";
import { FormContainer, Form, FormLinks, Button } from "../styled.js";


const SignUpForm = () => {

    const [formData, setFormData] = useState({
        username: "",
        password:"",
        verifiedPassword:"",
    });

    const [errors, setErrors] = useState({
		username: "",
        password: "",
        verifiedPassword:""
	  });

   
    const schema= yup.object().shape({
        username: yup.string().required('Username is required').min(2, 'At least 2 characters'),
        password: yup.string().required('Password is required').min(10, 'At least 10 characters'),
        verifiedPassword: yup.string()
           .oneOf([yup.ref('password'), null], 'Passwords must match')
      });

      const submit = () =>{
        schema.validate(formData).then(()=>{
            //NOTE!! change api to what ever is needed 
            axios.post('https://foodtrucktrackrr.herokuapp.com/auth/operator/register', formData).then((res)=>{
                console.log('this is your data', res.data)
                setFormData({
                    username: "",
                    password: "",
                    verifiedPassword:""
                  });
                })
                .catch(err => console.log(err));
            
        })
    }

    const validateChange = e => {
		yup
		  .reach(schema, e.target.name)
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

    const [buttonDisabled, setButtonDisabled] = useState(true);

	  
	  useEffect(() => {
		schema.isValid(formData).then(valid => {
		  setButtonDisabled(!valid);
		});
	  }, [formData]);



	 
	  const handleChange = e => {
		e.persist();
		validateChange(e);
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	  };

    return (
        <FormContainer>
            <Form onSubmit = {(e)=>{
                e.preventDefault()
                submit()
            }} >
                <h1>Sign Up</h1>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="signUpUsername" value={formData.username} onChange={handleChange} placeholder="Please Create a Username" />
                {errors.username.length > 0 ? <p className="errors">{errors.username}</p> : null}

                <label htmlFor="password">Password</label>   
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Please Create a Password" />
                {errors.password.length > 0 ? <p className="errors">{errors.password}</p> : null}

                <label htmlFor="verifiedPassword">Verify Password</label>
                <input type="password" name="verifiedPassword" id="verifiedPassword" value={formData.verifiedPassword} onChange={handleChange} placeholder="Please Verify Your Password" />
                {errors.verifiedPassword > 0 ? <p className="errors">{errors.verifiedPassword}</p> : null}

                <Button disabled={buttonDisabled} type="submit">Create Account</Button>
                <FormLinks>
					<a href="/login">Already a Member?</a>
				</FormLinks>
            </Form>
        </FormContainer>
    )
}

export default SignUpForm;