import './App.css';
import { Form } from "./components/Form/Form";
import shortid from 'shortid';
import React, {useState} from 'react';
import { Clock } from './components/Clock/Clock';

function App() {
  const [clocks, setClocks] = useState([]);

  const handleFormSubmit = (form) => {
    let newO = {
      id: shortid.generate(),
      name: form.name,
      zone: form.zone,
    };
    setClocks((prevClocks) => [...prevClocks, newO]);
  }
  
  const handleRemove = (l) => {
    setClocks((prevClocks) => prevClocks.filter((o) => o.id !== l.id));
  };
  // const r = () => {
  //   return 'afsfdsf'
  // }
  return (
    <div className="App-container">
      <Form onAdd={handleFormSubmit} />
      <div className="App-clocks-container">
        {clocks.map((clock) => {
          return (
            <Clock
              key={clock.id}
              // id={clock.id}
              name={clock.name}
              result={clock.zone}
              click={() => handleRemove(clock)}
              zone={clock.zone}
            />
          );
        })}
      </div>
    </div>
  );

}

export default App;
