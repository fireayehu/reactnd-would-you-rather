import React from "react";
import { connect } from "react-redux";
import { Row, Col, Avatar, List, Typography, Space, Badge } from "antd";

const { Text } = Typography;
const Leaderboard = (props) => (
  <Row>
    <Col span={12} offset={6} style={{ marginTop: 100 }}>
      {props.leaderboardData ? (
        <List
          dataSource={props.leaderboardData}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    alt={item.name + " profile picture"}
                    src={item.avatarURL}
                  />
                }
                title={item.name}
                description={
                  <Space direction="vertical">
                    <Text>Answered Question : {item.answeredQuestions}</Text>
                    <Text>Created Question : {item.createdQuestions}</Text>
                  </Space>
                }
              />
              <div>
                <Badge
                  className="site-badge-count-109"
                  count={item.answeredQuestions + item.createdQuestions}
                  style={{ backgroundColor: "#52c41a" }}
                />
              </div>
            </List.Item>
          )}
        ></List>
      ) : (
        <div>No Data</div>
      )}
    </Col>
  </Row>
);

function mapStateToProps({ authedUser, users, questions }) {
  const leaderboardData = Object.keys(users)
    .map((user) => ({
      id: user,
      name: users[user].name,
      avatarURL: users[user].avatarURL,
      answeredQuestions: Object.keys(users[user].answers).length,
      createdQuestions: Object.keys(questions).filter(
        (q) => questions[q].author === user
      ).length,
    }))
    .sort(
      (a, b) =>
        b.answeredQuestions +
        b.createdQuestions -
        (a.answeredQuestions + a.createdQuestions)
    );

  return {
    authedUser,
    leaderboardData,
  };
}

export default connect(mapStateToProps)(Leaderboard);
