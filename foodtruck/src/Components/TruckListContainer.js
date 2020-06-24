import React from 'react';

// import redux components, actions, web API middleware.
import { connect } from 'react-redux';
import TruckList from './TruckList';

// redux states to be mapped to TruckList component.
const mapStateToProps = (state) => ({
  trucks: state.truckList
});

const TruckListContainer = props => {
  return <>
    <TruckList trucks={props.trucks} />
  </>
}

export default connect(mapStateToProps)(TruckListContainer);