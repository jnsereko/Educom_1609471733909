// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function StudentListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.DELETE_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}