import SubjectApiGenerated from "./generated/SubjectApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class SubjectApi extends SubjectApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Subject List
  static getSubjectList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/subjects")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default SubjectApi;