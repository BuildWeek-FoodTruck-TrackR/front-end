import { createStore, applyMiddleware } from "redux";
import rootReducer from '../../reducers';
import thunk from 'redux-thunk';

const initialState = {
  truckList: [
    {
      id: 1,
      favDinerId: [1, 3],
      imageOfTruck: "https://abc.com/a.jpg",
      cuisineType: "Mexican",
      customerRatings: [
        {
          diner: 2,
          rate: 4
        }
      ],
      menu: [
        {
          name: "Burritos",
          desc: "A burrito is a dish in Mexican and Tex-Mex cuisine consisting of a flour tortilla and filled with savory ingredients.",
          photo: "https://xyz.com/x.jpg",
          price: 5.99,
          rating: [
            {
              diner: 1,
              rating: 5
            }
          ]
        },
        {
          name: "Taco",
          desc: "A burrito is a dish in Mexican and Tex-Mex cuisine consisting of a flour tortilla and filled with savory ingredients.",
          photo: "https://xyz.com/x.jpg",
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

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));