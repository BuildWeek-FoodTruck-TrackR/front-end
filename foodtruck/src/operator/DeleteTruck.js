import React from 'react';

// import dependency components
import { Button, Form, Card, CardBody, CardText } from 'reactstrap';

// import redux components
import { connect } from 'react-redux';
import { deleteData } from '../state/_shared/middleware/api';
import { RemoveTruck } from '../state/actions/crudActions';
import { VisiblePages, setPage } from '../state/actions/visibility';

// import components
import Header from './_shared/Header';

const mapStateToProps = (state) => ({
  visiblePage: state.trucks.visiblePage,
  operator_id: state.operator.operator_id,
  activeTruck: state.trucks.activeTruck
})

const activePage = page => dispatch => {
  dispatch(setPage(page))
}

const DeleteTruck = (props) => {

  // Form submit function
  const formSubmit = e => {
    e.preventDefault();
    props.deleteData(`operators/${props.operator_id}/trucks/${props.activeTruck}`, RemoveTruck);
  }

  return <>
    <Header title={props.visiblePage} />
    <div className="m-5">
      <Card>
        <CardBody>
          <Form onSubmit={formSubmit} className="mb-3">
            <CardText>Your are about to delete Truck number {props.activeTruck}.</CardText>
            <Button 
              className="mt-4 btn-custom mr-4" 
              color="primary"
              onClick={formSubmit}
            >
              Delete
            </Button>
            <Button 
              className="mt-4 btn-custom" 
              color="primary"
              onClick={e => {
                e.preventDefault();
                props.activePage({ name: VisiblePages.TRUCK_OWNED, truckId: "" })
              }}
            >
              Cancel
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  </>
}

export default connect(mapStateToProps, { deleteData, activePage })(DeleteTruck);