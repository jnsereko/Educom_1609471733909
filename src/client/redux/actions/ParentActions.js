import actionsFunction from "./generated/ParentActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ParentApi from "../../api/ParentApi";
 
 actionsFunction.loadParentList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ParentApi
     .getParentList()
     .then(list => {
       dispatch(actionsFunction.loadParentSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
