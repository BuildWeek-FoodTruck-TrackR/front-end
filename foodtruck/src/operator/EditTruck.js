import React from 'react';

// import hooks
import { useForm } from '../hooks/useForm';

// import dependency components
import * as Yup from "yup";
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';

// import redux components
import { connect } from 'react-redux';
import { putData } from '../state/_shared/middleware/api';
import { UpdateTruck } from '../state/actions/crudActions';
import { VisiblePages, setPage } from '../state/actions/visibility';

// import components
import Header from './_shared/Header';

// set login validation schema
const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .required("Truck name is required."),
  image_URL: Yup
    .string()
    .required("Image URL is required."),
  cuisine_type: Yup
    .string()
    .required("Cuisine type is required."),
  current_location: Yup
    .string()
    .required("Current location is required."),
  open_time: Yup
    .string()
    .required("Open time is required.")
});

const mapStateToProps = (state) => ({
  visiblePage: state.trucks.visiblePage,
  operator_id: state.operator.operator_id,
  truckOwned: state.trucks.truckOwned,
  activeTruck: state.trucks.activeTruck
})

const activePage = page => dispatch => {
  dispatch(setPage(page))
}

const EditTruck = (props) => {

  const truckState = props.truckOwned.filter(truck => truck.id === props.activeTruck)[0];

  // set form state
  const formState = {
    operator_id: props.operator_id,
    name: truckState.name,
    image_URL: truckState.image_URL,
    cuisine_type: truckState.cuisine_type,
    current_location: truckState.current_location,
    open_time: truckState.open_time
  };

  const errorState = {
    name: "",
    image_URL: "",
    cuisine_type: "",
    current_location: "",
    open_time: ""
  }

  // set custom form hook
  const [
    formData,
    errors, 
    handleChanges, 
    buttonDisabled
  ] = useForm(formState, errorState, formSchema);

  // Form submit function
  const formSubmit = e => {
    e.preventDefault();
    props.putData(`operators/${props.operator_id}/trucks/${props.activeTruck}`, formData, UpdateTruck);
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

  const link = {
    href: '/',
    truckId: "",
    text: VisiblePages.TRUCK_OWNED
  }

  return <>
    <Header title={props.visiblePage} activePage={props.activePage} link={link} />
    <div className="m-5">
      <Card>
        <CardBody>
          <Form onSubmit={formSubmit} className="mb-3">
            <FormGroup>
              <Label for="name">Truck Name (*)</Label>
              <Input 
                type="text" 
                name="name" 
                id="name"
                value={formData.name}
                onChange={onInputChange}
              />
              {errors.name.length > 0 
                ?
                  <FormText color="danger">
                    {errors.name}
                  </FormText>
                :
                  null
              } 
            </FormGroup>
            <FormGroup>
              <Label for="image_URL">Image URL (*)</Label>
              <Input 
                type="text" 
                name="image_URL" 
                id="image_URL"
                value={formData.image_URL}
                onChange={onInputChange}
              />
              {errors.image_URL.length > 0 
                ?
                  <FormText color="danger">
                    {errors.image_URL}
                  </FormText>
                :
                  null
              } 
            </FormGroup>
            <FormGroup>
              <Label for="cuisine_type">Cuisine Type (*)</Label>
              <Input 
                type="text" 
                name="cuisine_type" 
                id="cuisine_type"
                value={formData.cuisine_type}
                onChange={onInputChange}
              />
              {errors.cuisine_type.length > 0 
                ?
                  <FormText color="danger">
                    {errors.cuisine_type}
                  </FormText>
                :
                  null
              } 
            </FormGroup>
            <FormGroup>
              <Label for="current_location">Current Location (*)</Label>
              <Input 
                type="text" 
                name="current_location" 
                id="current_location"
                value={formData.current_location}
                onChange={onInputChange}
              />
              {errors.current_location.length > 0 
                ?
                  <FormText color="danger">
                    {errors.current_location}
                  </FormText>
                :
                  null
              } 
            </FormGroup>

            <FormGroup>
              <Label for="open_time">Open time (*)</Label>
              <Input 
                type="text" 
                name="open_time" 
                id="open_time"
                value={formData.open_time}
                onChange={onInputChange}
              />
              {errors.open_time.length > 0 
                ?
                  <FormText color="danger">
                    {errors.open_time}
                  </FormText>
                :
                  null
              } 
            </FormGroup>

            <Button className="mt-4 btn-custom" color={buttonDisabled ? "secondary" : "primary"}>Update Truck</Button>
          </Form>
        </CardBody>
      </Card>
      
    </div>
  </>
}

export default connect(mapStateToProps, { putData, activePage })(EditTruck);