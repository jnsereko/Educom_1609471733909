import AttendanceApiGenerated from "./generated/AttendanceApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AttendanceApi extends AttendanceApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Attendance List
  static getAttendanceList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/attendances")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AttendanceApi;