import actionsFunction from "./generated/SubjectActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import SubjectApi from "../../api/SubjectApi";
 
 actionsFunction.loadSubjectList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return SubjectApi
     .getSubjectList()
     .then(list => {
       dispatch(actionsFunction.loadSubjectSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
