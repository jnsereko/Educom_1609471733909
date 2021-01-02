import actionsFunction from "./generated/TeacherActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TeacherApi from "../../api/TeacherApi";
 
 actionsFunction.loadTeacherList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TeacherApi
     .getTeacherList()
     .then(list => {
       dispatch(actionsFunction.loadTeacherSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
