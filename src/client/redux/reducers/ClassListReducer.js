// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ClassListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CLASS_SUCCESS:
      return { ...state, class: action.payload };
    case types.LIST_CLASS_SUCCESS:
      return { ...state, listClass: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}