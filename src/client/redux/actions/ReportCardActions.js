import actionsFunction from "./generated/ReportCardActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ReportCardApi from "../../api/ReportCardApi";
 
 actionsFunction.loadReportCardList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ReportCardApi
     .getReportCardList()
     .then(list => {
       dispatch(actionsFunction.loadReportCardSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
