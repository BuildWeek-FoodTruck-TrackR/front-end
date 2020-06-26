import React, { useState } from 'react';
import TruckCardDiner from "./TruckCardDiner"

import TruckListDiner from './TruckListDiner';
import TruckListOperator from './TruckListOperator';

const initialState = {
  user: {
    id: 1,
    role: "diner"
  },
  truckList: [
    {
      id: 1,
      favDinerId: [1, 3],
      imageOfTruck: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/franchising/Flickr-Todd-Lappin-Curry-Up-Now-food-truck-r.jpg",
      cuisineType: "Mexican",
      customerRatings: [
        {
          diner: 2,
          rate: 4
        }
      ],
      menu: [
        {
          name: "Bean and Rice Burrito",
          desc: "A burrito is a dish in Mexican and Tex-Mex cuisine consisting of a flour tortilla and filled with savory ingredients.",
          photo: "https://www.thespruceeats.com/thmb/rK6RVn_uJqbvJhih3UF2BvOywV0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegetarian-bean-and-rice-burrito-recipe-3378550-9_preview-5b2417e1ff1b780037a58cda.jpeg",
          price: 5.99,
          rating: [
            {
              diner: 1,
              rating: 5
            }
          ]
        },
        {
          name: "Ground Beef Taco",
          desc: "A burrito is a dish in Mexican and Tex-Mex cuisine consisting of a flour tortilla and filled with savory ingredients.",
          photo: "https://tacos10.com/wp-content/uploads/2018/12/Tortillas-para-tacos-mexicanos.jpg",
          price: 4.99,
          rating: [
            {
              diner: 1,
              rating: 4
            }
          ]
        }
      ],
      location: {
        lat: 33.7262641, 
        lon: -117.9391235,
        departureTime: "2020-04-15T01:17:20.836+00:00"
      }
    }
  ]
}

export default function TruckList(props) {
  const [diner, setDiner] = useState(true);
  const [truckApi, setTruckApi] = useState(initialState)
  console.log(truckApi, 'api aiden created')

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