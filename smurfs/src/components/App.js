import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/home";
import NewSmurfPage from "../pages/new";
import SmurfDetailPage from "../pages/smurf-detail-page";
import EditSmurfPage from "../pages/edit";
import Navigation from "./navigation";

import { fetchSmurfs } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="bg-gray-200 min-h-screen h-full">
        <Navigation />
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/new" component={NewSmurfPage} />
            <Route exact path="/:id/edit" component={EditSmurfPage} />
            <Route exact path="/:id/" component={SmurfDetailPage} />
          </Switch>
        </div>
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
