import React from 'react';

// import dependency components
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const TruckForm = props => {
  return <>
    <Form>
      <FormGroup>
        <Label for="imageOfTruck">Image URL</Label>
        <Input type="text" name="image" id="imageOfTruck" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="imageOfTruck">Cuisine Type</Label>
        <Input type="text" name="cuisine" id="cuisineType" placeholder="with a placeholder" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  </>
}

export default TruckForm;