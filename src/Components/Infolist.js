import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Information = (props) => (
  <tr>
    <td>{props.information.name}</td>
    <td>{props.information.address}</td>
    <td>{props.information.phone}</td>
    <td>{props.information.email}</td>
    <td>
      <Link to={"/edit/" + props.information._id}><button className="btn btn-sm btn-warning">
        Edit
        </button></Link> |{" "}
      
      <a
        href="#"
        onClick={() => {
          props.deleteinfo(props.information._id);
        }}
      ><button className="btn btn-sm btn-danger">
        Delete
        </button>
      </a>
     
    </td>
  </tr>
);

export default class Infolist extends Component {
  constructor(props) {
    super(props);

    this.deleteinfo = this.deleteinfo.bind(this);

    this.state = { informations: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/information/")
      .then((response) => {
        this.setState({ informations: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteinfo(id) {
    axios.delete("http://localhost:5000/information/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      information: this.state.informations.filter((el) => el._id !== id),
    });

    window.location = '/';
  }

  infolist() {
    return this.state.informations.map((currentInformation) => {
      return (
        <Information
          information={currentInformation}
          deleteinfo={this.deleteinfo}
          key={currentInformation._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>All Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.infolist()}</tbody>
        </table>
      </div>
    );
  }
}
