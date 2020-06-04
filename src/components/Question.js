import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Avatar,
  Typography,
  Space,
  Layout,
  Progress,
  Radio,
  Button,
} from "antd";
import { handleAddQuestionAnswer } from "../actions/questions";
import NotFound from "./NotFound";

const { Text } = Typography;
const { Content } = Layout;
class Question extends Component {
  state = {
    selected: "",
  };

  handleOptionSelect = (e) => {
    this.setState(() => ({
      selected: e.target.value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selected } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleAddQuestionAnswer(id, selected));
  };
  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };
    const { question, author, authedUserDetails, id, detailed } = this.props;
    if (!question) {
      return <NotFound />;
    }
    return (
      <Card
        title={
          detailed && authedUserDetails.answers[question.id]
            ? `Asked by ${author.name}`
            : `${author.name} asks:`
        }
        style={{ width: "370px" }}
      >
        <Row style={{ width: "370px" }}>
          <Col span={4} style={{ borderRightWidth: "2px" }}>
            <Col>
              <Avatar
                alt={author.name + " profile picture"}
                src={author.avatarURL}
              />
            </Col>
          </Col>
          <Col span={12}>
            {!detailed ? (
              <Space direction="vertical">
                <Text type="primary">Would you rather</Text>
                <Text type="secondary">
                  {question.optionOne.text} or {question.optionTwo.text}
                </Text>
                <Link to={`/questions/${id}`}>View Poll</Link>
              </Space>
            ) : authedUserDetails.answers[question.id] ? (
              <Layout style={{ backgroundColor: "white" }}>
                <Content style={{ backgroundColor: "white" }}>
                  <Text>Results:</Text>
                </Content>
                <Content
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "5px",
                    alignItems: "center",
                    margin: "5px 0px",
                    backgroundColor:
                      question[authedUserDetails.answers[question.id]].text ===
                      question.optionOne.text
                        ? "#90ee90"
                        : "",
                  }}
                >
                  <Space direction="vertical">
                    <Text>{question.optionOne.text}</Text>
                    <Progress
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                      percent={Math.round(
                        (question.optionOne.votes.length /
                          (question.optionOne.votes.length +
                            question.optionTwo.votes.length)) *
                          100,
                        4
                      )}
                    />
                    <Text>
                      {question.optionOne.votes.length} out of{" "}
                      {question.optionOne.votes.length +
                        question.optionTwo.votes.length}{" "}
                      votes
                    </Text>
                  </Space>
                </Content>
                <Content
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "5px",
                    alignItems: "center",
                    backgroundColor:
                      question[authedUserDetails.answers[question.id]].text ===
                      question.optionTwo.text
                        ? "#90ee90"
                        : "",
                  }}
                >
                  <Space direction="vertical">
                    <Text>{question.optionTwo.text}</Text>
                    <Progress
                      strokeColor={{
                        "0%": "#108ee9",
                        "100%": "#87d068",
                      }}
                      percent={Math.round(
                        (question.optionTwo.votes.length /
                          (question.optionOne.votes.length +
                            question.optionTwo.votes.length)) *
                          100,
                        4
                      )}
                    />
                    <Text>
                      {question.optionTwo.votes.length} out of{" "}
                      {question.optionOne.votes.length +
                        question.optionTwo.votes.length}{" "}
                      votes
                    </Text>
                  </Space>
                </Content>
              </Layout>
            ) : (
              <Space direction="vertical">
                <Text type="primary">Would you rather</Text>
                <Radio.Group
                  onChange={this.handleOptionSelect}
                  value={this.state.selected}
                >
                  <Radio style={radioStyle} value="optionOne">
                    {question.optionOne.text}
                  </Radio>
                  <Radio style={radioStyle} value="optionTwo">
                    {question.optionTwo.text}
                  </Radio>
                </Radio.Group>
                <Button
                  onClick={this.handleSubmit}
                  disabled={!this.state.selected}
                  style={{
                    backgroundColor: "green",
                    width: "100%",
                    marginTop: "5px",
                    color: "white",
                    borderWidth: "0px",
                  }}
                >
                  Submit
                </Button>
              </Space>
            )}
          </Col>
        </Row>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : "";
  const authedUserDetails = users[authedUser];

  return {
    question,
    author,
    authedUserDetails,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
