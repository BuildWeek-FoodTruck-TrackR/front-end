import React from 'react';

// import hooks
import { useForm } from '../../hooks/useForm';

// import dependency components
import * as Yup from "yup";

// import custom components
import TruckForm from './TruckForm';
import { formState } from './formState';

// import redux components, actions, web API middleware
import { connect } from 'react-redux';
import { PostTruck } from '../../state/actions/crudActions';
import { BASE_API_URL, postData } from '../../../state/_shared/middleware/api';

// set schema for client-side validation
const formSchema = Yup.object().shape({
  imageOfTruck: Yup
    .string()
    .url("Must be a valid URL address"),
  cuisineType: Yup
    .string()
    .required("Cuisine type is required.")
});

const AddTruck = props => {

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
    props.postData(BASE_API_URL + '/user/trucks', formData, PostTruck);
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
    <TruckForm />
  </>
}

export default connect(null, { postData })(AddTruck);