/*eslint no-unused-vars: off */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DatePicker from 'react-date-picker'
import SelectComponent from '../components/Select'
import { usStatesOptions } from '../assets/SelectOptions/usStatesList'
import { departementsOptions } from '../assets/SelectOptions/departmentsList'
import { useDispatch } from 'react-redux'
import { store } from '../App'
import ModalComponent from '../components/Modal'
import { checkForm, getLastDatas } from '../services/formVallidation'
import ReactDOM, { createPortal } from 'react-dom'

const StyledForm = styled.div`
  * {
    font-family: 'Montserrat';
  }

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  label {
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.4rem;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .address {
    margin-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input[type='submit'] {
    margin-top: 1rem;
  }
`

function formatDate(date) {
  const options = { formatMatcher: 'basic' }
  const result = date.toLocaleDateString(undefined, options)
  return result
}

export function AddEmployee() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [usState, setUSState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')

  const [modalOn, setModalOn] = useState(false)

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    usState,
    zipCode,
    department,
  })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* const isDatasChecked = checkForm(formData)
    if (isDatasChecked === undefined) {
      console.log('employé créé')
      dispatch({ type: 'SAVE_DATA', payload: formData })
      return ReactDOM.createPortal(
        <ModalComponent />,
        document.getElementById('bis')
      )
    } */
    setModalOn(true)
    console.log('ouverture modale')
    //return <ModalComponent />
  }

  return (
    <StyledForm>
      <div>
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form
          action="#"
          id="create-employee"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="first-name">First Name</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            type="text"
            id="first-name"
            value={formData.firstName}
            name="firstName"
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={formData.lastName}
            name="lastName"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            onChange={(birthDate) => {
              setBirthDate(birthDate)
              setFormData({ ...formData, birthDate: formatDate(birthDate) })
            }}
            value={birthDate}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            onChange={(startDate) => {
              setStartDate(startDate)
              setFormData({ ...formData, startDate: formatDate(startDate) })
            }}
            value={startDate}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />

            <SelectComponent
              options={usStatesOptions}
              name="State"
              handleChange={(e) => {
                setUSState(e.value)
                setFormData({ ...formData, usState: e.value })
              }}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              value={formData.zipCode}
              onChange={(e) => {
                setFormData({ ...formData, zipCode: e.target.value })
              }}
            />
          </fieldset>

          <SelectComponent
            options={departementsOptions}
            name="Department"
            handleChange={(e) => {
              setDepartment(e.value)
              setFormData({ ...formData, department: e.value })
            }}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
      {modalOn && <ModalComponent />}
    </StyledForm>
  )
}
