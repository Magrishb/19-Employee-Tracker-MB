import React, { Component } from "react";
import DaTable from "./DaTable";
import Nav from "./Nav";

export default class DaArea extends Component {
    state = {
      users: [{}],
      order: "descend",
      filteredUsers: [{}]
    }
    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" }
      ]
    
      
    }
};