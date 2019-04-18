import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { vars } from "../_stylingVariables";

const HomepageWrapper = styled.div`
  height: 100%;
  background: linear-gradient(to right bottom, #fff 0%, #fff 17%, #c0c2c4 100%);
  .text {
    display: inline-flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    max-width: 80%;
    h1 {
      font-size: 8vw;
    }
    h4 {
      font-size: 2.3vw;
      max-width: 60%;
    }
    p {
      font-size: 1.3vw;
      max-width: 60%;
    }
  }
  .main-graphic {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
  }
`;

const Homepage = () => {
  return (
    <div className="section">
      <HomepageWrapper>
        <div className="text">
          <h1>Work Reimagined</h1>
          <h4>
            Digital Workplace Transformation in <strong>6</strong> Steps
          </h4>
          <p>
            Business leaders are realizing digital transformation isn’t just
            about technology—it’s about people, even as emerging technologies
            like artificial intelligence and machine learning change how
            companies operate.
          </p>
          <div className="cta">
            <div>Start Your Journey</div>
          </div>
        </div>

        <div className="main-graphic">
          <img
            src="https://d885pvmm0z6oe.cloudfront.net/hubs/servicenow_102298/src/img/main-image-1.svg"
            alt="main-graphic"
          />
        </div>
      </HomepageWrapper>
    </div>
  );
};

export default Homepage;
