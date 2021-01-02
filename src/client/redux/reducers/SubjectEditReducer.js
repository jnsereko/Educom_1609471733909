// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  subject: {}
};

// Reducer
export default function SubjectEditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.GET_SUBJECT_SUCCESS:
      return { ...state, subject: action.payload };
    case types.UPDATE_SUBJECT_SUCCESS:
      return { ...state, subject: action.payload };
    case types.CREATE_SUBJECT_SUCCESS:
      return { ...state, subject: action.payload };
    case types.FINDBYCLASSSUBJECT_CLASS_SUCCESS:
      return { ...state, listClass: action.payload };
    case types.FINDBYSUBJECTID_TEACHER_SUCCESS:
      return { ...state, listTeacher: action.payload };
     // END REDUCERS
    
    case types.RESET_SUBJECT:
      state = initialState;
      return state;
    default:
      return state;
  }
}