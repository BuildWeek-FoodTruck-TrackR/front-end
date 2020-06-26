import React from 'react';
import styled from "styled-components"


//main card containing each truck info
const Card = styled.div`
    background: white;
    padding: 10px;
    width: 21%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    box-shadow: 5px 10px 30px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all 1s;
    }
`;

const DescriptionContainer = styled.div`
    width: 100%;
    margin: 0;
`;

function TruckCardDiner({ data }) {
console.log(data, 'this is my data props for trucks', data.truckList)

    return (
        <Card key={data.truckList.id}> 
        {/* data.id, imageOfTruck,cuisineType can be used here for the fake api link on my truckList component */}
            <img src={data.truckList[0].imageOfTruck} alt="food truck"/>
            <DescriptionContainer>
        
                <h5>Cuisine: {data.truckList[0].cuisineType} </h5>
    
            </DescriptionContainer>
        </Card>
    )
   
}

export default TruckCardDiner;
