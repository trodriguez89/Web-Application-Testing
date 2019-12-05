import React, {useState} from 'react';
import Scoreboard from "./components/Scoreboard";
import Buttons from "./components/Buttons";
import styled from "styled-components";


import './App.css';

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
    <div>
      <h2>Baseball!</h2>
      <Scoreboard strikes={strikes} balls={balls}/>
      <Buttons strikes={strikes} balls={balls} strike={strike} ball={ball} foul={foul} hit={hit}/>
    </div>
  );
}

export default App;
