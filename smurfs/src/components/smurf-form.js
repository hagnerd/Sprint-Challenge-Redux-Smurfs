import React from "react";
import PropTypes from "prop-types";

import Input from "./input";

export default class SmurfForm extends React.Component {
  state = {
    name: this.props.name,
    age: Number(this.props.age),
    height: this.props.height
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    name: "",
    age: 0,
    height: "",
    submitText: "Create a Smurf"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
  };

  render() {
    const { name, age, height } = this.state;

    return (
      <div className="w-1/2 mx-auto">
        {this.props.error && (
          <p className="text-red-400 text-xl font-semibold">
            {this.props.error}
          </p>
        )}
        <form
          className="flex flex-col my-8 w-full mx-auto items-center bg-white rounded-lg shadow-lg p-8"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Name:</label>
          <Input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="age">Age:</label>
          <Input
            id="age"
            name="age"
            type="number"
            min="0"
            value={age}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="height">Height:</label>
          <Input
            id="height"
            name="height"
            type="text"
            value={height}
            onChange={this.handleChange}
          />
          <br />
          {this.props.submitting ? (
            <p>Submitting Smurf...</p>
          ) : (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              type="submit"
            >
              {this.props.submitText}
            </button>
          )}
        </form>
      </div>
    );
  }
}
