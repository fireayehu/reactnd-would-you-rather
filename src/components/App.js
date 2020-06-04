import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Login from "./Login";
import Home from "./Home";
import QuestionDetails from "./QuestionDetails";
import NewQuestion from "./NewQuestion";
import NavBar from "./NavBar";
import LeaderBoard from "./LeaderBoard";

import { handleInitialData } from "../actions/shared";

import "../App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          {this.props.signedIn && (
            <NavBar
              authedUser={this.props.authedUserName}
              authedUserAvatar={this.props.authedUserAvatar}
            />
          )}
          {!this.props.signedIn ? (
            <Login />
          ) : (
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/questions/:id" component={QuestionDetails} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />
            </div>
          )}
        </>
      </Router>
    );
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
