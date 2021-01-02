import actionsFunction from "./generated/AddressActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AddressApi from "../../api/AddressApi";
 
 actionsFunction.loadAddressList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AddressApi
     .getAddressList()
     .then(list => {
       dispatch(actionsFunction.loadAddressSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
