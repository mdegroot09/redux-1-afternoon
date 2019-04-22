import {createStore} from 'redux'

let initialState = {}

reducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}

export default createStore(reducer)