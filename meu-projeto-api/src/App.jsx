import React, { useState, useEffect} from "react";
import ListCars from './components/Principal';
import{ getCars } from './../api/GoCars'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ccc;
  padding: 10px;
  `;

function App() {
  const[cars, setCars] = useState([]);

  useEffect( () => {
    setCars(getCars)
  },[])

  return (
    <Principal>
      <h1>Carros em estoque</h1>
      <ListCars>
        {
          cars.map(cars => {
            return ( <ListCars
              key={cars.url}
              img={cars.image}
              title={cars.title}
              url={cars.url}
              price={cars.price} 
              /> )
          })
        }
      </ListCars>
    </Principal>
  )
}

export default App

/* <div>
      <h1>Carros do estoque</h1>

        <div>
            <p>Opala Diplomata</p>
            <img src="https://motortudo.com/wp-content/uploads/2020/04/Opala-Diplomata-82-Motor-Tudo-14.jpg" alt="" />
            <p>6000,20</p>
            <a href="https://motortudo.com/wp-content/uploads/"></a>
        </div>

        <div>
            <p>Porsche 911</p>
            <img src="https://www.revistafullpower.com.br/wp-content/uploads/2017/11/Porsche-911-GT2-Auction-6.jpg" alt="" />
            <p>10000,00</p>
            <a href="https://www.webmotors.com.br/carros/estoque/porsche/911/de.1995"></a>
        </div>
    </div> */

    // <Post
    //       img="https://motortudo.com/wp-content/uploads/2020/04/Opala-Diplomata-82-Motor-Tudo-14.jpg"
    //       url="https://motortudo.com/wp-content/uploads/"
    //       title="Opala diplomata"
    //       price="R$ 60000,00"
    //     />
    //     <Post
    //       img="https://www.revistafullpower.com.br/wp-content/uploads/2017/11/Porsche-911-GT2-Auction-6.jpg"
    //       url="https://www.webmotors.com.br/carros/estoque/porsche/911/de.1995"
    //       title="Porsche 911"
    //       price="100000,00"        
    //       />