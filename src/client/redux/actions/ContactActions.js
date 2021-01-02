import actionsFunction from "./generated/ContactActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ContactApi from "../../api/ContactApi";
 
 actionsFunction.loadContactList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ContactApi
     .getContactList()
     .then(list => {
       dispatch(actionsFunction.loadContactSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
