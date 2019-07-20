import React from "react";
import PropTypes from "prop-types";

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
      <>
        {this.props.error && <p style={{ color: "red" }}>{this.props.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            name="age"
            type="number"
            min="0"
            value={age}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="height">Height:</label>
          <input
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
            <button type="submit">{this.props.submitText}</button>
          )}
        </form>
      </>
    );
  }
}
