// Necesitamos cambiar el class a function

// antes la class se veia asi:

/*


import React, { Component } from 'react';

import Equipo from './Equipo';

import Arg from "../img/arg.svg";
import Usa from "../img/usa.svg";

class Tablero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0,
      visitante: 0
    }
  }
  */


/*
  incLocalUno = () => {
    this.setState({
      local: this.state.local + 1
    })
  }

  incLocalDos = () => {
    this.setState({
      local: this.state.local + 2
    })
  }

  incLocalTres = () => {
    this.setState({
      local: this.state.local + 3
    })
  }

  decLocalUno = () => {
    this.setState({
      local: this.state.local - 1
    })
  }

  decLocalDos = () => {
    this.setState({
      local: this.state.local - 2
    })
  }

  decLocalTres = () => {
    this.setState({
      local: this.state.local - 3
    })
  }

  incVisitaUno = () => {
    this.setState({
      visitante: this.state.visitante + 1
    })
  }

  incVisitaDos = () => {
    this.setState({
      visitante: this.state.visitante + 2
    })
  }

  incVisitaTres = () => {
    this.setState({
      visitante: this.state.visitante + 3
    })
  }

  decVisitaUno = () => {
    this.setState({
      visitante: this.state.visitante - 1
    })
  }

  decVisitaDos = () => {
    this.setState({
      visitante: this.state.visitante - 2
    })
  }

  decVisitaTres = () => {
    this.setState({
      visitante: this.state.visitante - 3
    })
  }

  reiniciar = () => {
    this.setState({
      local: 0,
      visitante: 0
    })
  }

  render () {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div className='tablero_grupo'>
          <div className='contenedor_local'>
  }
            <Equipo title="Local: " contador={ this.state.local } bandera={ Arg } />

            <button className='btn_inc' onClick={ this.incLocalUno }>+ 1</button>
            <button className='btn_inc' onClick={ this.incLocalDos }>+ 2</button>
            <button className='btn_inc' onClick={ this.incLocalTres }>+ 3</button>
            <button className='btn_dec' onClick={ this.decLocalUno}>- 1</button>
            <button className='btn_dec' onClick={ this.decLocalDos}>- 2</button>
            <button className='btn_dec' onClick={ this.decLocalTres}>- 3</button>
          </div>
          <div className='contenedor_visitante'>
          }
            <Equipo title="Visitante: " contador={ this.state.visitante } bandera={ Usa } />

            <button className='btn_inc' onClick={ this.incVisitaUno}>+ 1</button>
            <button className='btn_inc' onClick={ this.incVisitaDos}>+ 2</button>
            <button className='btn_inc' onClick={ this.incVisitaTres}>+ 3</button>
            <button className='btn_dec' onClick={ this.decVisitaUno}>- 1</button>
            <button className='btn_dec' onClick={ this.decVisitaDos}>- 2</button>
            <button className='btn_dec' onClick={ this.decVisitaTres}>- 3</button>

          </div>
        </div>
        <button onClick={ this.reiniciar }>Reiniciar tablero</button>
      </>
    )
  }
}

export default Tablero;

*/

import React, { useState } from 'react';
import Equipo from './Equipo';
import Arg from "../img/arg.svg";
import Usa from "../img/usa.svg";

const Tablero = (props) => {
  const [local, setLocal] = useState(0);
  const [visitante, setVisitante] = useState(0);

  const incLocal = (value) => {
    setLocal(local + value);
  }

  const decLocal = (value) => {
    setLocal(local - value);
  }

  const incVisita = (value) => {
    setVisitante(visitante + value);
  }

  const decVisita = (value) => {
    setVisitante(visitante - value);
  }

  const reiniciar = () => {
    setLocal(0);
    setVisitante(0);
  }

  return (
    <>
      <h4>{props.children}</h4>
      <div className='tablero_grupo'>
        <div className='contenedor_local'>
          {/* Inyección de componente */}
          <Equipo title="Local: " contador={local} bandera={Arg} />

          <button className='btn_inc' onClick={() => incLocal(1)}>+ 1</button>
          <button className='btn_inc' onClick={() => incLocal(2)}>+ 2</button>
          <button className='btn_inc' onClick={() => incLocal(3)}>+ 3</button>
          <button className='btn_dec' onClick={() => decLocal(1)}>- 1</button>
          <button className='btn_dec' onClick={() => decLocal(2)}>- 2</button>
          <button className='btn_dec' onClick={() => decLocal(3)}>- 3</button>
        </div>
        <div className='contenedor_visitante'>
          {/* Inyección de componente */}
          <Equipo title="Visitante: " contador={visitante} bandera={Usa} />

          <button className='btn_inc' onClick={() => incVisita(1)}>+ 1</button>
          <button className='btn_inc' onClick={() => incVisita(2)}>+ 2</button>
          <button className='btn_inc' onClick={() => incVisita(3)}>+ 3</button>
          <button className='btn_dec' onClick={() => decVisita(1)}>- 1</button>
          <button className='btn_dec' onClick={() => decVisita(2)}>- 2</button>
          <button className='btn_dec' onClick={() => decVisita(3)}>- 3</button>

        </div>
      </div>
      <button onClick={reiniciar}>Reiniciar tablero</button>
    </>
  );
};

export default Tablero;
