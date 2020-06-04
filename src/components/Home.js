import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Tabs } from "antd";
import Question from "./Question";
const { TabPane } = Tabs;
class Home extends Component {
  render() {
    return (
      <Row>
        <Col span={12} offset={6}>
          <Tabs
            defaultActiveKey="1"
            type="card"
            size={"large"}
            style={{ alignItems: "center", marginTop: "20px" }}
          >
            <TabPane
              tab="Unanswered Questions"
              key="1"
              style={{ backgroundColor: "red" }}
            >
              {this.props.unansweredQuestionIds.map((id) => (
                <Question id={id} key={id} />
              ))}
            </TabPane>
            <TabPane tab="Answered Questions" key="2">
              {this.props.answeredQuestionIds.map((id) => (
                <Question id={id} key={id} />
              ))}
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const answeredQuestionIds = Object.keys(users[authedUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestionIds = Object.keys(questions)
    .filter((q) => !answeredQuestionIds.includes(q))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    answeredQuestionIds,
    unansweredQuestionIds,
  };
}

export default connect(mapStateToProps)(Home);
