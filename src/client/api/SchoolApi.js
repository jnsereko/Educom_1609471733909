import SchoolApiGenerated from "./generated/SchoolApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class SchoolApi extends SchoolApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get School List
  static getSchoolList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/schools")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default SchoolApi;