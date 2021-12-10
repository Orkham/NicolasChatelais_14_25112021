import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MaterialTable from '@material-table/core'
import { useSelector } from 'react-redux'

const StyledList = styled.div`
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
    margin-bottom: 10px;
  }

  .address {
    margin-top: 10px;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
`

export function EmployeeList() {
  const listFromStore = useSelector((state) => state.datas)
  console.log(listFromStore)

  return (
    <StyledList id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link to="/">Form</Link>
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
        data={listFromStore}
        title="Employees List"
      />
    </StyledList>
  )
}
