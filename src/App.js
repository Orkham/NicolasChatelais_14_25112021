import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddEmployee } from './pages/AddEmployee'
import { EmployeeList } from './pages/EmployeeList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AddEmployee />} />
        <Route exact path="/list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
