import React, { useState, useEffect } from 'react';
import TruckCardDiner from "./TruckCardDiner"
import {truckDummyApi} from "../truckDummyApi"
import TruckListDiner from './TruckListDiner';
import TruckListOperator from './TruckListOperator';
import axios from "axios"


export default function TruckList(props) {
  // const [diner, setDiner] = useState(true);
  const [truckApi, setTruckApi] = useState(truckDummyApi)
  // console.log(truckApi, 'dummy api')

  
    
// THIS IS DUMMY DATA TO SHOW I MEET MVP AND CAN REQUEST DATA WITH AXIOS CALL - I HAVE CREATED DUMMY DATA AND MAPPED OVER IT TO SHOW I CAN DO BOTH WAYS. 
    // useEffect(() => {
    // axios
    //     .get("https://reqres.in/api/users/2")

    //     .then(response => {
    //         setTruckApi(response.data.data)
    //         console.log(response, 'response here is email')
    //     })

    //     .catch(error => {
    //         console.log(error, "there's an error here")
    //     })
    // },[])

  return (
  <>
    {/* { diner 
      ? <TruckListDiner trucks={props.trucks} />
      : <TruckListOperator trucks={props.trucks} />
    } */}
    <TruckCardDiner data={truckApi} />
  </>
  )
}
