import initialState from './initialState'

export default function currentUserReducer(state=initialState, action) {
  switch (action.type) {
    case 'ASSIGN_USERNAME':
      sessionStorage.setItem('currentUser', action.payload)
      return action.payload;
    default:
      return sessionStorage.currentUser || state;
  }
}
