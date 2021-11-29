import React from 'react'
import Select from 'react-select'

export default function SelectComponent(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.name}>{props.name}</label>
      <Select
        options={props.options}
        name={props.name}
        id={props.name}
        onChange={props.handleChange}
      />
    </React.Fragment>
  )
}
