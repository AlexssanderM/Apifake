import React, { useState, useEffect } from "react";
import ListCars from './components/ListCars';
import {styled} from 'styled-components'
import api from './services/api';

const Principal = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainerCars = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ccc;
  padding: 10px;
  `;

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const url = '/cars';

    api.get(url) //all
      .then((response) => {
        // console.log(response)
        setCars(response.data)
      })

  }, [])

  return (
    <Principal>
      <h1>Carros em estoque</h1>
      <ListContainerCars>
        {
          cars.map(cars => {
            return (<ListCars
              key={cars.url}
              cars={cars}
            />)
          })
        }
      </ListContainerCars>
    </Principal>
  )
}

export default App

