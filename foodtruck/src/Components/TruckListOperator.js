import React from 'react';

import TruckCardOperator from './TruckCardOperator';

export default function TruckListOperator(props) {
  return <>
    {props.trucks.map(truck => <div key={truck.id}><TruckCardOperator truck={truck} /></div>)}
  </>
}