// Necesitamos cambiar el class a function

// antes la class se veia asi:

/*

import { Component } from "react";

class Equipo extends Component {
  render() {
    return (
      <div className="tablero_cabecera">
        <h3>{ this.props.title }</h3>
        <h3>{ this.props.contador }</h3>

        <img className='img_sel' src={ this.props.bandera } alt="" />
      </div>
    )
  }
}

export default Equipo;

*/

import React from "react";

function Equipo(props) {
  return (
    <div className="tablero_cabecera">
      <h3>{props.title}</h3>
      <h3>{props.contador}</h3>
      <img className='img_sel' src={props.bandera} alt="" />
    </div>
  )
}

export default Equipo;