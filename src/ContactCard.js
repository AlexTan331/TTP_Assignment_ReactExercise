import React, { Component } from "react";
import propTypes from "prop-types";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Contact Name</th>
              <th>{this.props.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mobile Phone Number</td>
              <td>{this.props.mobileNumber}</td>
            </tr>
            <tr>
              <td>Work Phone Number</td>
              <td>{this.props.workNumber}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{this.props.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: propTypes.string.isRequired,
  mobileNumber: propTypes.string.isRequired,
  workNumber: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
};

export default ContactCard;
