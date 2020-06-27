import React from 'react';

// import hooks
import { useForm } from '../hooks/useForm';
import { useHistory, Redirect }  from 'react-router-dom';

// import dependency components
import * as Yup from "yup";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import redux components
import { connect } from 'react-redux';
import { postLogin } from '../state/_shared/middleware/api';
import { FetchOperatorLoginType } from '../state/actions/operatorLogin';

// set login validation schema
const formSchema = Yup.object().shape({
  username: Yup
    .string()
    .required("Please provide your username."),
  password: Yup
    .string()
    .required("Please provide your password.")
});

// set form state
const formState = {
  username: "",
  password: ""
};

// redux states to be mapped to CustomerList component.
const mapStateToProps = (state) => ({
  operator: state.operator
})

const OperatorSignup = (props) => {

  const history = useHistory();

  // set custom form hook
  const [
    formData,
    errors, 
    handleChanges, 
    buttonDisabled
  ] = useForm(formState, formState, formSchema);

  // Form submit function
  const formSubmit = e => {
    e.preventDefault();
    props.postLogin(formData, FetchOperatorLoginType, 'auth/operator/register');
  }

  const onInputChange = e => {
    e.persist();

    // initiate value
    let value = null;

    // if checkbox set value to be checked otherwise set value to input value
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    handleChanges(e.target.id, value)
  }

  return <>
    {localStorage.getItem('token') && 
      <Redirect to={
        history.location.state !== undefined 
          ? history.location.state.pathname 
          : '/operators' } 
      />
    }
    <Form onSubmit={formSubmit} className="mt-5">
      <FormGroup>
        <Label for="username">Username (*)</Label>
        <Input 
          type="text" 
          name="username" 
          id="username"
          value={formData.username}
          onChange={onInputChange}
        />
        {errors.username.length > 0 
          ?
            <FormText color="danger">
              {errors.username}
            </FormText>
          :
            null
        } 
      </FormGroup>
      <FormGroup>
        <Label for="password">Password (*)</Label>
        <Input 
          type="password" 
          name="password" 
          id="password"
          value={formData.password}
          onChange={onInputChange}
        />
        {errors.password.length > 0 
          ?
            <FormText color="danger">
              {errors.password}
            </FormText>
          :
            null
        } 
      </FormGroup>

      <Button className="mt-4" color={buttonDisabled ? "secondary" : "primary"}>Sign Up</Button>
    </Form>
  </>
}

export default connect(mapStateToProps, { postLogin })(OperatorSignup);