import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col, Card, Select, Avatar, Button } from "antd";

import { setAuthedUser } from "../actions/authedUser";

const { Option } = Select;
class Signin extends Component {
  state = {
    selectedUser: "",
  };

  handleUserSelect = (value) => {
    this.setState(() => ({
      selectedUser: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.selectedUser));
  };

  render() {
    const { users } = this.props;

    return (
      <Row>
        <Col span={12} offset={6} style={{ marginTop: 100 }}>
          <Card
            title="Welcome To Would You Rather App"
            bordered={true}
            style={{ width: "50%", margin: "auto", textAlign: "center" }}
          >
            <img
              alt="react-redux-logo"
              src={require("../assets/redux.Default")}
              style={{ width: "100px", height: "100px" }}
            />
            <h3
              style={{
                color: "green",
                fontSize: "25px",
                fontWeight: "bold",
                marginTop: "60px",
              }}
            >
              Sign In
            </h3>
            <Select
              value={this.state.selectedUser}
              style={{ width: "100%" }}
              onChange={this.handleUserSelect}
              placeholder="Select User"
            >
              {users &&
                Object.keys(users).map((user) => (
                  <Option key={user} value={user}>
                    <Avatar
                      alt={users[user].name + " profile picture"}
                      src={users[user].avatarURL}
                      style={{ marginRight: "5px" }}
                      size={20}
                    />
                    {users[user].name}
                  </Option>
                ))}
            </Select>
            <Button
              onClick={this.handleSubmit}
              disabled={!this.state.selectedUser}
              style={{
                backgroundColor: "green",
                width: "100%",
                marginTop: "5px",
                color: "white",
                borderWidth: "0px",
              }}
            >
              Sign In
            </Button>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Signin);
