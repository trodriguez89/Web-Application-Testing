import React, {useState} from 'react';
import Scoreboard from "./components/Scoreboard";
import Buttons from "./components/Buttons";


import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setballs] = useState(0);

  return (
    <div className="App">
      <h2>Baseball!</h2>
      <Scoreboard strikes={strikes} balls={balls}/>
      <Buttons strikes={strikes} balls={balls}/>
    </div>
  );
}

export default App;
