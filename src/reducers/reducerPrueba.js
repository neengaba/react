
import { combineReducers } from 'redux'

export const ReducerPruebas = (state = {
  isLoading: null,
  message: null,
  typeMessage: null
}, action) => {
  switch(action.type) {
    case 0:
      return { ...state, isLoading: action.isLoading, message: action.message, typeMessage: action.typeMessage };
    default:
      return state;
  }
}