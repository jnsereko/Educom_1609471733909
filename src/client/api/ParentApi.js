import ParentApiGenerated from "./generated/ParentApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ParentApi extends ParentApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Parent List
  static getParentList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/parents")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ParentApi;