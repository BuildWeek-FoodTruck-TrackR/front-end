import React, { useState } from "react"
import axios from "axios"
import * as yup from "yup"


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
        <div>
            <h2>Sign Up!</h2>
            <form onSubmit = {(e)=>{
                e.preventDefault()
                submit()
            }} >
                <label>
                    Create Username
                    <br/>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <br/>
                <br/>
                <label>
                    Create Password
                    <br/>
                    <input type="text" name="password" value={formData.password} onChange={handleChange} />
                </label>
                <br/>
                <br/>
                <label>
                    Verify Password
                    <br/>
                    <input type="text" name="verifiedPassword" value={formData.verifiedPassword} onChange={handleChange} />
                </label>
                <br/>
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm;