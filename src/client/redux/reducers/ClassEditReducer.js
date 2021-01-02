// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  class: {}
};

// Reducer
export default function ClassEditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_SUBJECT_SUCCESS:
      return { ...state, listSubject: action.payload };
    case types.UPDATE_CLASS_SUCCESS:
      return { ...state, class: action.payload };
    case types.CREATE_CLASS_SUCCESS:
      return { ...state, class: action.payload };
    case types.GET_CLASS_SUCCESS:
      return { ...state, class: action.payload };
     // END REDUCERS
    
    case types.RESET_CLASS:
      state = initialState;
      return state;
    default:
      return state;
  }
}