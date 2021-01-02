import AddressApiGenerated from "./generated/AddressApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AddressApi extends AddressApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Address List
  static getAddressList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/addresss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AddressApi;