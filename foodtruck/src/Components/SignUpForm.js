import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import "./LoginStyles.css";
import { FormContainer, Form, FormLinks, Button } from "../styled.js";


const SignUpForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password:'',
        verifiedPassword:'',
    });

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
        // console.log(formData)
    };

    const schema= yup.object().shape({
        username: yup.string().required().min(2),
        password: yup.string().required('Password is required').min(8),
        verifiedPassword: yup.string()
           .oneOf([yup.ref('password'), null], 'Passwords must match')
      });

      const submit = () =>{
        schema.validate(formData).then(()=>{
            //NOTE!! change api to what ever is needed 
            axios.post('https://reqres.in/api/users', formData).then((res)=>{
                console.log('this is your data', res.data)
            })
        })
    }

    return (
        <FormContainer>
            <Form onSubmit = {(e)=>{
                e.preventDefault()
                submit()
            }} >
                <h1>Sign Up</h1>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="signUpUsername" value={formData.username} onChange={handleChange} placeholder="Please Create a Username" />
                
                <label htmlFor="password">Password</label>   
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Please Create a Password" />

                <label htmlFor="verifiedPassword">Verify Password</label>
                <input type="password" name="verifiedPassword" id="verifiedPassword" value={formData.verifiedPassword} onChange={handleChange} placeholder="Please Verify Your Password" />
                
                <Button type="submit">Create Account</Button>
                <FormLinks>
					<a href="../App.js">Already a Member?</a>
				</FormLinks>
            </Form>
        </FormContainer>
    )
}

export default SignUpForm;