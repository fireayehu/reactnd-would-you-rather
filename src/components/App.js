import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Login from "./Login";

import { handleInitialData } from "../actions/shared";

import "../App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return <Login />;
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    signedIn: authedUser !== null,
    authedUserName: authedUser ? users[authedUser].name : "",
    authedUserAvatar: authedUser ? users[authedUser].avatarURL : "",
  };
}

export default connect(mapStateToProps)(App);
