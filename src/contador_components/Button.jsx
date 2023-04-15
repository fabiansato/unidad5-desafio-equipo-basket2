import React from 'react'

export const Button = ({ text, tipoBotonSum, handleClick }) => {
  return (
    <button
      className={ tipoBotonSum ? 'btn-incrementar' : 'btn-decrementar' }
      onClick={ handleClick }
    >{ text }</button>
  )
}
