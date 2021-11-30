// state
const initialState = {
  datas: [
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
  ],
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_DATA':
      return { datas: [...state.datas, action.payload] }
    default:
      return state
  }
}
