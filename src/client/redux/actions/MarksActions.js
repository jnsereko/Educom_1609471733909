import actionsFunction from "./generated/MarksActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import MarksApi from "../../api/MarksApi";
 
 actionsFunction.loadMarksList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return MarksApi
     .getMarksList()
     .then(list => {
       dispatch(actionsFunction.loadMarksSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
