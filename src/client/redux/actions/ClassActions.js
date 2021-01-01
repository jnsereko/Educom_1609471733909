import actionsFunction from "./generated/ClassActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ClassApi from "../../api/ClassApi";
 
 actionsFunction.loadClassList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ClassApi
     .getClassList()
     .then(list => {
       dispatch(actionsFunction.loadClassSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
