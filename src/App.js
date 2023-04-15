import { useState } from 'react';

import { Button } from './contador_components/Button';
import { Counter } from './contador_components/Counter';
import './App.css';
import Logo from './img/eLearning-fondo-transparente.png';

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='utn-logo'
          src={ Logo }
          alt="Logo de e-Learning" />
      </div>
      <div className='main-container'>
        <h1>Contador con componente de Función:</h1>
        <Counter quantity={ counter } />
        <Button
          text='Incrementar'
          tipoBotonSum={ true }
          handleClick={ increment }
        />
        <Button
          text='Decrementar'
          tipoBotonSum={ false }
          handleClick={ decrement }
        />
      </div>
    </div>
  );
}

export default App;



