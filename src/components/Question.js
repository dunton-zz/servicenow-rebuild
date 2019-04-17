import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { vars } from "../_stylingVariables";

const QuestionWrapper = styled.div`
  height: 100%;
  .row {
    height: 100%;

    .text {
      h1 {
        font-size: 2.43vw;
        color: ${vars.darkGreen};
        span {
          color: ${vars.lightGreen};
        }
      }
      .callout-box {
        background: #293e40;
        width: 40%;
        bottom: 100px;
        &.left {
          position: absolute;
          left: 0;
        }
        &.right {
          position: absolute;
          right: 0;
        }
        div {
          width: 80%;
          display: block;
          margin: 0 auto;
          h4 {
            color: #fff;
            font-size: 7vw;
            margin: 0;
          }
          p {
            font-size: 1.3vw;
            color: ${vars.grey};
            margin: 0;
          }
        }
      }
    }
  }
`;

class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, calloutStat, calloutText, text, textSide } = this.props.data;
    const { count } = this.props;
    const calloutClass = `callout-box ${textSide}`;
    return (
      <QuestionWrapper>
        <Row>
          <Col md={7} className="text">
            <h1>
              <span>{count + 1}.</span> {title}
            </h1>
            {text}
            <div className={calloutClass}>
              <div>
                <h4>{calloutStat}</h4>
                <p>{calloutText}</p>
              </div>
            </div>
          </Col>
          <Col md={5} className="text">
            <h1>
              {count + 1}. {title}
            </h1>
            {text}
            <div className={calloutClass}>
              <div>
                <h4>{calloutStat}</h4>
                <p>{calloutText}</p>
              </div>
            </div>
          </Col>
        </Row>
      </QuestionWrapper>
    );
  }
}

export default Question;
