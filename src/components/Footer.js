import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { vars } from "../_stylingVariables";
import ScrollToBegin from "./ScrollToBegin";
import ScrollForMore from "./ScrollForMore";
import InsightsAndSolution from "./InsightsAndSolution";

const FooterWrapper = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Footer = props => {
  let content = "<p>ryan</p>";
  switch (props.pageType) {
    case "homepage":
      content = "<p>ryan</p>";
      break;
    default:
  }
  return (
    <FooterWrapper>
      <ScrollToBegin />
      <ScrollForMore />
      <InsightsAndSolution />
    </FooterWrapper>
  );
};

export default Footer;
