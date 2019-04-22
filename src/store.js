import {createStore} from 'redux'

let initialState = {
  name: '',
  category: '',
  authorFirst: '',
  authorLast: '',
  ingredients: '',
  instructions: ''
}

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_FIRST = 'UPDATE_FIRST'
export const UPDATE_LAST = 'UPDATE_LAST'
export const INGREDIENTS = 'INGREDIENTS'
export const INSTRUCTIONS = 'INSTRUCTIONS'

reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return { ...state, category: action.payload};
    case UPDATE_NAME:
      return { ...state, name: action.name}
    case UPDATE_FIRST:
      return { ...state, authorFirst: action.authorFirst};
    case UPDATE_LAST:
      return { ...state, authorLast: action.authorLast}
    case INGREDIENTS:
      return { ...state, ingredients: action.ingredients}
    case INSTRUCTIONS:
      return { ...state, instructions: action.instructions}
    default: 
      return state
  }
}

export default createStore(reducer)