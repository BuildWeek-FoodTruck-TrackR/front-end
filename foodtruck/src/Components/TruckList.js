import React, { useState } from 'react';

import TruckListDiner from './TruckListDiner';
import TruckListOperator from './TruckListOperator';

export default function TruckList(props) {
  const [diner, setDiner] = useState(true);

  return <>
    { diner 
      ? <TruckListDiner props={props} />
      : <TruckListOperator props={props} />
    }
  </>
}