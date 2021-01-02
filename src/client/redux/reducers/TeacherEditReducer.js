// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  teacher: {}
};

// Reducer
export default function TeacherEditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.UPDATE_TEACHER_SUCCESS:
      return { ...state, teacher: action.payload };
    case types.CREATE_TEACHER_SUCCESS:
      return { ...state, teacher: action.payload };
    case types.GET_TEACHER_SUCCESS:
      return { ...state, teacher: action.payload };
    case types.LIST_SUBJECT_SUCCESS:
      return { ...state, listSubject: action.payload };
     // END REDUCERS
    
    case types.RESET_TEACHER:
      state = initialState;
      return state;
    default:
      return state;
  }
}