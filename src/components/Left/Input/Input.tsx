import React from 'react'
import './Input.css';

type InputProps = {
    type: string,
    placeholder: string,
    name: string
}

function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor={props.name}>{props.placeholder}</label>
      <input id={props.name} name={props.name} type={props.type} placeholder={props.placeholder} className="input" />
    </div>
  )
}

export default Input