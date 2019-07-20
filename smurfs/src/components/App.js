import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import HomePage from "../pages/home";
import NewSmurfPage from "../pages/new";

import { fetchSmurfs } from "../actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new" component={NewSmurfPage} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchSmurfs
};

export default connect(
  null,
  mapDispatchToProps
)(App);
