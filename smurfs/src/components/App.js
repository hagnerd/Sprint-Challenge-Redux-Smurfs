import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import HomePage from "../pages/home";
import NewSmurfPage from "../pages/new";
import SmurfDetailPage from "../pages/smurf-detail-page";
import EditSmurfPage from "../pages/edit";
import Navigation from "./navigation";

import { fetchSmurfs } from "../actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <>
        <Navigation />
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/new" component={NewSmurfPage} />
          <Route exact path="/:id/edit" component={EditSmurfPage} />
          <Route exact path="/:id/" component={SmurfDetailPage} />
        </div>
      </>
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
