import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col, Card, Form, Input, Button } from "antd";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    toHome: false,
  };

  handleSubmit = (values) => {
    const { optionOne, optionTwo } = values;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      toHome: true,
    }));
  };

  render() {
    const { toHome } = this.state;

    if (toHome) return <Redirect to="/" />;

    return (
      <Row>
        <Col span={12} offset={6} style={{ marginTop: 100 }}>
          <Card
            title="Create New Question"
            bordered={true}
            style={{ width: "50%", margin: "auto", textAlign: "center" }}
          >
            <p>Complete the questions</p>
            <h3
              style={{
                color: "green",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Would you rather
            </h3>
            <Form
              name="normal_login"
              className="login-form"
              onFinish={this.handleSubmit}
            >
              <Form.Item
                name="optionOne"
                rules={[
                  { required: true, message: "Please input option one!" },
                ]}
              >
                <Input placeholder="Option One" />
              </Form.Item>
              <Form.Item
                name="optionTwo"
                rules={[
                  { required: true, message: "Please input option two!" },
                ]}
              >
                <Input placeholder="Option Two" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{
                    backgroundColor: "green",
                    width: "100%",
                  }}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
      // <div className="component-container">
      //     <Typography variant="title" gutterBottom>
      //         Would you rather?
      //     </Typography>
      //     <form onSubmit={this.handleSubmit} className='form-container'>
      //         <TextField
      //             type="text"
      //             label="Option One"
      //             defaultValue={optionOne}
      //             onChange={(e) => this.handleChange('optionOne',e)}
      //             margin="normal"
      //             fullWidth
      //             autoFocus
      //         />
      //         <TextField
      //             type="text"
      //             label="Option Two"
      //             defaultValue={optionTwo}
      //             onChange={(e) => this.handleChange('optionTwo',e)}
      //             margin="normal"
      //             fullWidth
      //         />
      //         <Button variant="contained" color="primary"
      //             type="submit"
      //             disabled={!optionOne || !optionTwo}
      //         >
      //             Add Question
      //         </Button>
      //     </form>
      // </div>
    );
  }
}

export default connect()(NewQuestion);
