// state
const initialState = {
  datas: [
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
  ],
  //datas: [],
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_DATA':
      return { datas: [...state.datas, action.payload] }
    default:
      return state
  }
}
