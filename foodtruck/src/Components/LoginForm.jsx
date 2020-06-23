import React from "react"
import { FormContainer, Form, Button } from "../styled.js"


const LoginForm = () => {

    // Rigo working on login page
    return (
        <FormContainer>
			<Form>
				<h1>Login</h1>
				<label htmlFor="username">Username</label>
					<input type="text" name="username" placeholder="Username" />
	
				<br/>
				<label htmlFor="username">Password</label>
				<input type="password" name="password" placeholder="Password" />
				<Button>Please Log in</Button>
				<div class="links">
					<a href="#">Forgot Password</a>
					<a href="#">Sign Up</a>
				</div>
			</Form>
		</FormContainer>
    )
}

export default LoginForm;