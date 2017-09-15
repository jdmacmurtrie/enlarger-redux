import { CLEAR_FORM, SUBMIT_FORM } from '../actions/form'

let initialState = {
  enteredItem: '',
  itemList: {}
}

const form = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return Object.assign({}, state, {
        itemList: action.formPayload
      })
    case CLEAR_FORM:
      return Object.assign({}, state, {
        enteredItem: state.initialState.enteredItem
      })
    default:
      return state;
  }
}

export default form
