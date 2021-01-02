import actionsFunction from "./generated/AttendanceActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AttendanceApi from "../../api/AttendanceApi";
 
 actionsFunction.loadAttendanceList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AttendanceApi
     .getAttendanceList()
     .then(list => {
       dispatch(actionsFunction.loadAttendanceSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
