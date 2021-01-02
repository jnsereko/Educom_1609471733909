import actionsFunction from "./generated/SchoolActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import SchoolApi from "../../api/SchoolApi";
 
 actionsFunction.loadSchoolList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return SchoolApi
     .getSchoolList()
     .then(list => {
       dispatch(actionsFunction.loadSchoolSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
