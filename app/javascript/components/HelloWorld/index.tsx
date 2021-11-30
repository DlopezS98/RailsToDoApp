import React, { ChangeEvent } from "react";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap"
import Styles from "./helloworld.module.scss";
class HelloWorld extends React.Component<IProps, IState> {

  public state: IState = {
    message: "Hello World"
  }

  constructor(props: IProps){
    super(props);
  }

  handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    this.setState({ message: target.value })
  }

  render () {
    const { message } = this.state;
    return (
      <Row className = "mt-3">
        <Col>
          <Row>
            <Col sm = {7} className = "mx-auto">
                <Form.Control 
                  size = "sm" 
                  type = "text" 
                  placeholder = "Hello World..."
                  value = { message }
                  onChange = { this.handleInputValue }
                />
            </Col>
          </Row>
          <Row>
            <Col sm = {7} className = { `${Styles["axis-xy-center"]} mx-auto` }>
              <div className = { Styles.terminal }>
                <pre>{ `> ${message}` }<span>_</span></pre>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

interface IProps {
  greeting?: String;
}

interface IState {
  message: string;
}

export default HelloWorld
