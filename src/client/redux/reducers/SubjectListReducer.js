// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function SubjectListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_SUBJECT_SUCCESS:
      return { ...state, listSubject: action.payload };
    case types.DELETE_SUBJECT_SUCCESS:
      return { ...state, subject: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}