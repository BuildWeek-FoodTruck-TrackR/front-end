import React from 'react';

// import redux components
import { connect } from 'react-redux';
import { VisiblePages } from '../state/actions/visibility';

// import shared components
import OperatorNavbar from './_shared/OperatorNavbar';
import OperatorFooter from './_shared/OperatorFooter';

// import components
import TruckList from './TruckList';
import AddTruck from './AddTruck';
import DeleteTruck from './DeleteTruck';
import EditTruck from './EditTruck';

const mapStateToProps = state => ({
  visiblePage: state.trucks.visiblePage,
  operator_id: state.operator.operator_id
})

const Operators = (props) => {
  return <>
    <OperatorNavbar id={props.operator_id} />
    {props.visiblePage === VisiblePages.TRUCK_OWNED && <TruckList />}
    {props.visiblePage === VisiblePages.ADD_TRUCK && <AddTruck />}
    {props.visiblePage === VisiblePages.DELETE_TRUCK && <DeleteTruck />}
    {props.visiblePage === VisiblePages.EDIT_TRUCK && <EditTruck />}
    <OperatorFooter />
  </>
}

export default connect(mapStateToProps)(Operators);