import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MaterialTable from '@material-table/core'

const StyledList = styled.div`
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

const data = [
  {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '01/01/2000',
    startDate: '01/01/2020',
    street: 'rue du Passé',
    city: 'Paris',
    usState: 'Alabama',
    zipCode: '1234',
    department: 'engineering',
    id: Math.random(),
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '01/01/2000',
    startDate: '01/01/2020',
    street: 'rue du Passé',
    city: 'Paris',
    usState: 'Alabama',
    zipCode: '1234',
    department: 'engineering',
    id: Math.random(),
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '01/01/2000',
    startDate: '01/01/2020',
    street: 'rue du Passé',
    city: 'Paris',
    usState: 'Alabama',
    zipCode: '1234',
    department: 'engineering',
    id: Math.random(),
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '01/01/2000',
    startDate: '01/01/2020',
    street: 'rue du Passé',
    city: 'Paris',
    usState: 'Alabama',
    zipCode: '1234',
    department: 'engineering',
    id: Math.random(),
  },
  {
    firstName: 'Johne',
    lastName: 'Doe',
    birthDate: '01/01/2000',
    startDate: '01/01/2020',
    street: 'rue du Passé',
    city: 'Paris',
    usState: 'Alabama',
    zipCode: '1234',
    department: 'engineering',
    id: Math.random(),
  },
]

export function EmployeeList() {
  return (
    <StyledList id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link to="/">Home</Link>
      <MaterialTable
        columns={[
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Start Date', field: 'startDate' },
          { title: 'Department', field: 'department' },
          { title: 'Date of Birth', field: 'birthDate' },
          { title: 'Street', field: 'street' },
          { title: 'City', field: 'city' },
          { title: 'State', field: 'usState' },
          { title: 'Zip Code', field: 'zipCode' },
        ]}
        data={data}
      />
    </StyledList>
  )
}
