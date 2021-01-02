// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  student: {}
};

// Reducer
export default function StudentEditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.GET_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.CREATE_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.UPDATE_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
     // END REDUCERS
    
    case types.RESET_STUDENT:
      state = initialState;
      return state;
    default:
      return state;
  }
}