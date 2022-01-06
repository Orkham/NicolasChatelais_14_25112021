import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//import MaterialTable from '@material-table/core'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions'
import 'react-data-table-component-extensions/dist/index.css'

const StyledList = styled.div`
  * {
    font-family: 'Montserrat';
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
/*
export function EmployeeList() {
  const listFromStore = useSelector((state) => state.datas)

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
*/

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
/*
const data = [
  {
    firstName: 'John',
    lastName: 'McLane',
    birthDate: '19/03/1955',
    startDate: '21/09/1988',
    street: 'rue John McTiernan',
    city: 'New York',
    usState: 'New York',
    zipCode: '10001',
    department: 'Legal',
    id: Math.random(),
  },
  {
    firstName: 'Martin',
    lastName: 'Riggs',
    birthDate: '03/01/1956',
    startDate: '05/08/1987',
    street: 'rue Richard Donner',
    city: 'Los Angeles',
    usState: 'California',
    zipCode: '90002',
    department: 'Human Resources',
    id: Math.random(),
  },
  {
    firstName: 'Mitch',
    lastName: 'Buchannon',
    birthDate: '02/05/1972',
    startDate: '26/05/2017',
    street: 'rue Seth Gordon',
    city: 'Malibu',
    usState: 'California',
    zipCode: '90263',
    department: 'Marketing',
    id: Math.random(),
  },
  {
    firstName: 'Willy',
    lastName: 'Wonka',
    birthDate: '09/06/1963',
    startDate: '23/04/2005',
    street: 'rue Tim Burton',
    city: 'Chicago',
    usState: 'Illinois',
    zipCode: '60176',
    department: 'Engineering',
    id: Math.random(),
  },
]
*/
export function EmployeeList() {
  const listFromStore = useSelector((state) => state.datas)
  console.log(listFromStore)

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
