import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { Typography, Avatar, Button, PageHeader } from "antd";

const { Text } = Typography;
class Navbar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };
  render() {
    const { authedUser, authedUserAvatar } = this.props;
    return (
      <PageHeader
        className="site-page-header-responsive"
        title="WYR"
        subTitle="Would You Rather"
        extra={[
          <NavLink key="6" to="/" exact activeClassName="active">
            Home
          </NavLink>,
          <NavLink key="5" to="/add" exact activeClassName="active">
            New Question
          </NavLink>,
          <NavLink key="4" to="/leaderboard" exact activeClassName="active">
            Leader Board
          </NavLink>,
          <Text key="3">Hello, {authedUser}</Text>,
          <Avatar
            key="2"
            alt={authedUser + " profile picture"}
            src={authedUserAvatar}
          />,
          <Button key="1" onClick={this.handleLogout}>
            Logout
          </Button>,
        ]}
      ></PageHeader>
    );
  }
}

export default connect()(Navbar);
