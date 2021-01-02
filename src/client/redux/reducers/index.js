import { combineReducers } from "redux";

// START IMPORT REDUCERS
import ClassEditReducer from "./ClassEditReducer";
import ClassListReducer from "./ClassListReducer";
import HomeReducer from "./HomeReducer";
import StudentEditReducer from "./StudentEditReducer";
import StudentListReducer from "./StudentListReducer";
import SubjectEditReducer from "./SubjectEditReducer";
import SubjectListReducer from "./SubjectListReducer";
import TeacherEditReducer from "./TeacherEditReducer";
import TeacherListReducer from "./TeacherListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	ClassEditReducer,
	ClassListReducer,
	HomeReducer,
	StudentEditReducer,
	StudentListReducer,
	SubjectEditReducer,
	SubjectListReducer,
	TeacherEditReducer,
	TeacherListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
