import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { vars } from "../_stylingVariables";
import { createMarkup } from "../functions/createMarkup";

const QuestionWrapper = styled.div`
  background: linear-gradient(to right bottom, #fff 0%, #fff 17%, #c0c2c4 100%);
  height: calc(100vh - 60px);
  margin-top: 60px;
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
        max-width: 95%;
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
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        &.right {
          position: absolute;
          right: 0;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
        div {
          width: 80%;
          display: block;
          margin: 10px auto;
          h4 {
            color: #fff;
            font-size: 7vw;
            margin: 0;

            .percent {
              color: #81b5a1;
              font-weight: 100;
              vertical-align: top;
              font-size: 4vw;
            }

            .dollar {
              vertical-align: top;
              font-size: 4vw;
            }
            .milli {
              font-size: 5vw;
              margin-top: 1vw;
              color: ${vars.lightGreen};
            }
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
                <h4 dangerouslySetInnerHTML={createMarkup(calloutStat)} />
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
