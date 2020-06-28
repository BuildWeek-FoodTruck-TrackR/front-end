import React from 'react';

// import hooks
import { useEffect } from 'react';

// import routes
import { Link } from 'react-router-dom';

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

// import redux components
import { connect } from 'react-redux';
import { getData } from '../state/_shared/middleware/api';
import { GetAllTrucks } from '../state/actions/crudActions';
import { VisiblePages, setPage } from '../state/actions/visibility';

// import components
import Header from './_shared/Header';

const mapStateToProps = state => ({
  visiblePage: state.trucks.visiblePage,
  operator_id: state.operator.operator_id,
  truckOwned: state.trucks.truckOwned
})

const activePage = page => dispatch => {
  dispatch(setPage(page))
}

const TruckList = (props) => {

  useEffect(() => {
    props.getData(`operators/${props.operator_id}/trucks`, '', GetAllTrucks)  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const link = {
    href: '/',
    truckId: "",
    text: VisiblePages.ADD_TRUCK
  }

  return <>
    <Header title={props.visiblePage} activePage={props.activePage} link={link}/>
    { props.truckOwned.length > 0 &&
      props.truckOwned.map(truck => 
        <div key={truck.id} className="m-5">
          <Card>
            <CardBody>
              <CardText><span className="font-weight-bold">{truck.name}</span></CardText>
              <CardText>{`${truck.cuisine_type} Cousine`}</CardText>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <CardText>{truck.image_URL}</CardText>
              <Link to="#" className="mr-4" onClick={e => {
                e.preventDefault();
                props.activePage({ name: VisiblePages.EDIT_TRUCK, truckId: truck.id })
              }}>Edit</Link>
              <Link to="#" onClick={e => {
                e.preventDefault();
                props.activePage({ name: VisiblePages.DELETE_TRUCK, truckId: truck.id })
              }}>Remove</Link>
            </CardBody>
          </Card>
        </div> 
      )
    }
  </>
} 

export default connect(mapStateToProps, { getData, activePage })(TruckList)