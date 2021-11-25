import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

export function EmployeeList() {
  return (
    <StyledList id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link to="/">Home</Link>
    </StyledList>
  )
}
