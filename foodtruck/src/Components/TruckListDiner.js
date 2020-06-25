import React from 'react';

import TruckCardDiner from './TruckCardDiner';

export default function TruckListDiner(props) {
  return <>
    {
      props.trucks.map(truck => <TruckCardDiner truck={truck} />)
    }
  </>
}