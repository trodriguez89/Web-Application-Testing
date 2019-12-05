import React, {useState} from 'react';
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import styled from "styled-components";
import Baseball from "./images/BaseballCorrectSize.png";

const MainContainer = styled.div`
  text-align: center;
  height: 90vh;
  
`

const Container = styled.div`
  border: 1px solid black;
  width: 900px;
  height: 80vh;
  margin: 0 auto;
  background-color: white;
`

const PicContainer = styled.div`
  border-top: 2px solid red;
  height: 90vh;
  background-image: url(${Baseball});
  background-repeat: repeat;
  display: flex;
  align-items: center;
`
const H2Style = styled.h2`
  font-size: 40px;
  font-family: 'Indie Flower', cursive;
  margin: 0;
  padding: 5px 0;
  background-color: green;
  color: white;
`

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strike = () => {
    if (strikes === 2 ) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const ball = () => {
    if (balls === 3) {
      setStrikes(0)
      setBalls(0)
    } else {
      setBalls(balls + 1)
    }
  }

  const foul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const hit = () => {
    setStrikes(0);
    setBalls(0)
  }


  return (
    <MainContainer>
      <H2Style>Plaaaaaay Ball!</H2Style>
      <PicContainer>
      <Container>
      <Display strikes={strikes} balls={balls}/>
      <Dashboard strikes={strikes} balls={balls} strike={strike} ball={ball} foul={foul} hit={hit}/>
      </Container>
      </PicContainer>
    </MainContainer>
  );
}

export default App;
