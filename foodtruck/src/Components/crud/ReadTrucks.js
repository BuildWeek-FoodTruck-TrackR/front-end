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
import { getData } from '../../state/_shared/middleware/api';
import { GetAllTrucks } from '../../state/actions/crudActions';

const mapStateToProps = state => ({
  operator_id: state.operator.operator_id,
  truckOwned: state.trucks.truckOwned
})

const ReadTrucks = (props) => {

  useEffect(() => {
    props.getData(`operators/${props.operator_id}/trucks`, '', GetAllTrucks)  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>
    { props.truckOwned.length > 0 &&
      props.truckOwned.map(truck => 
        <div key={truck.id}>
          <Card>
            <CardBody>
              <CardTitle>{truck.name}</CardTitle>
              <CardSubtitle>{`${truck.cuisine_type} Cousine`}</CardSubtitle>
            </CardBody>
              <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Link to="#" className="mr-4">Edit</Link>
              <Link to={`/operators/${props.operator_id}/trucks/${truck.id}`}>Remove</Link>
            </CardBody>
          </Card>
        </div> 
      )
    }
  </>
} 

export default connect(mapStateToProps, { getData })(ReadTrucks)