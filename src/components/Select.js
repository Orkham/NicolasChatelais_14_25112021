import React from 'react'
import Select from 'react-select'

export default function SelectComponent(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.name}>State</label>
      <Select
        options={props.options}
        name={props.name}
        id={props.name}
        onChange={props.handleChange}
        //onChange={(e) => console.log(e.value)}
      />
    </React.Fragment>
  )
}
