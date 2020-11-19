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
      componentDidMount() {
        API.getUsers().then(results => {
          this.setState({
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }
      render() {
        return (
          <>
            <Nav handleSearchChange={this.handleSearchChange} />
            <div className="data-area">
              <DaTable
                headings={this.headings}
                users={this.state.filteredUsers}
                handleSort={this.handleSort}
              />
            </div>
          </>
        );
        }};
