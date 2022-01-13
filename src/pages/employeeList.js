import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions'
import 'react-data-table-component-extensions/dist/index.css'

const StyledList = styled.div`
  * {
    font-family: arial;
  }
  .data-table-extensions-filter {
    display: flex;
    align-items: center;
    float: right;
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

const columns = [
  {
    name: 'First Name',
    selector: (row) => row.firstName,
    sortable: true,
    filterable: true,
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: 'Department',
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: 'Date of Birth',
    selector: (row) => row.birthDate,
    sortable: true,
  },
  {
    name: 'Street',
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: 'City',
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: (row) => row.usState,
    sortable: true,
  },
  {
    name: 'Zip Code',
    selector: (row) => row.zipCode,
    sortable: true,
  },
]

export function EmployeeList() {
  const listFromStore = useSelector((state) => state.datas)

  return (
    <StyledList>
      <h1>Current Employees</h1>
      <Link to="/">Form</Link>
      <DataTableExtensions
        data={listFromStore}
        columns={columns}
        export={false}
        print={false}
      >
        <DataTable pagination responsive />
      </DataTableExtensions>
    </StyledList>
  )
}
