// state
const initialState = {
  test: '',
  datas: [],
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return { test: 'ok' }
    case 'SAVE_DATA':
      return { ...state, datas: 'new datas' }
    default:
      return state
  }
}
