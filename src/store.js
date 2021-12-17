import { createStore } from 'redux'


// state
const initialState = {
  test: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return (state.test = 'ok')

    default:
      return state
  }
}

const store = createStore(reducer)
console.log(store.getState())
