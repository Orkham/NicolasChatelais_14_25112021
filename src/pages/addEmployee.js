/*eslint no-unused-vars: off */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DatePicker from 'react-date-picker'

const StyledForm = styled.div`
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
    margin-bottom: 10px;
  }

  .address {
    margin-top: 10px;
  }
`

export function AddEmployee() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())

  const [formData, setFormData] = useState({
    firstName,
    lastName,
    birthDate,
    startDate,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <StyledForm>
      <div>
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
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
              setFormData({ ...formData, birthDate: birthDate })
            }}
            value={birthDate}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            onChange={(startDate) => {
              setStartDate(startDate)
              setFormData({ ...formData, startDate: startDate })
            }}
            value={startDate}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>

        <button onClick={handleSubmit}>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </StyledForm>
  )
}
