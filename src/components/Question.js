import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { vars } from "../_stylingVariables";
import { createMarkup } from "../functions/createMarkup";

const QuestionWrapper = styled.div`
  height: 100%;
  .row {
    height: 100%;
    &.text-right {
      display: flex;
      flex-direction: row-reverse;
    }
    .image-col {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 90%;
        margin: 0 auto;
        display: block;
      }
    }
    .text {
      text-align: left;
      .top-text {
        padding: 20px 0 0 60px;
        h1 {
          font-size: 2.43vw;
          color: ${vars.darkGreen};
          span {
            color: ${vars.lightGreen};
          }
        }
        p {
          color: ${vars.darkGrey};
          font-size: 1.3vw;
          margin-top: 1vw;
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

  generateParagraphs = textArray => {};
  render() {
    const {
      title,
      calloutStat,
      calloutText,
      text,
      textSide,
      imageUrl
    } = this.props.data;
    const { count } = this.props;
    const calloutClass = `callout-box ${textSide}`;
    const rowClass = `text-${textSide}`;
    return (
      <QuestionWrapper>
        <Row className={rowClass}>
          <Col md={7} className="text">
            <div className="top-text">
              <h1>
                <span>{count + 1}.</span> {title}
              </h1>
              <div dangerouslySetInnerHTML={createMarkup(text)} />
            </div>

            <div className={calloutClass}>
              <div>
                <h4>{calloutStat}</h4>
                <p>{calloutText}</p>
              </div>
            </div>
          </Col>
          <Col md={5} className="image-col">
            <img src={imageUrl} />
          </Col>
        </Row>
      </QuestionWrapper>
    );
  }
}

export default Question;
