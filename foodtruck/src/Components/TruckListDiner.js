import React from 'react';

import TruckCardDiner from './TruckCardDiner';

export default function TruckListDiner(props) {
  return <>
    {props.trucks.map(truck => <div key={truck.id}><TruckCardDiner truck={truck} /></div>)}
  </>
}