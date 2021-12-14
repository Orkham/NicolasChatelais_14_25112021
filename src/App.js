import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddEmployee } from './pages/AddEmployee.js'
import { EmployeeList } from './pages/EmployeeList.js'
import { createStore } from 'redux'
import { reducer } from './reducers/reducer.js'
import { Provider } from 'react-redux'

export const store = createStore(reducer)

//console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AddEmployee />} />
          <Route exact path="/list" element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
