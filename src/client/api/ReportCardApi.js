import ReportCardApiGenerated from "./generated/ReportCardApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ReportCardApi extends ReportCardApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get ReportCard List
  static getReportCardList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/reportcards")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ReportCardApi;