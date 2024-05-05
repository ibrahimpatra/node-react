import React, { Component } from "react";
import axios from "axios";

export default class Editinfo extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      address: "",
      phone: "",
      email: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          address: response.data.address,
          phone: response.data.phone,
          email: response.data.email,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangephone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const information = {
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
    };

    console.log(information);

    axios
      .post(
        "http://localhost:5000/information/update/" +
          this.props.match.params.id,
        information
      )
      .then((res) => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Your Information</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeaddress}
            />
          </div>
          <div className="form-group">
            <label>Phone Number : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangephone}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
