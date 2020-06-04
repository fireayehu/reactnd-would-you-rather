import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Row, Col } from "antd";
const QuestionDetails = (props) => (
  <Row>
    <Col
      span={12}
      offset={6}
      style={{ alignItems: "center", marginTop: "20px" }}
    >
      <Question id={props.match.params.id} detailed />
    </Col>
  </Row>
);

export default connect()(QuestionDetails);
