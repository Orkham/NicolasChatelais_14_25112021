import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddEmployee } from './pages/AddEmployee'
import { EmployeeList } from './pages/EmployeeList'
import { createStore } from 'redux'
import { reducer } from './reducers/reducer'

const store = createStore(reducer)

console.log(store.getState())

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
