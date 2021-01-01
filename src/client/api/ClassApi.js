import ClassApiGenerated from "./generated/ClassApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ClassApi extends ClassApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Class List
  static getClassList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/classs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ClassApi;