import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Question from "./Question";
import { data } from "../data";
import { produceSections } from "../functions/produceSections";
import { Container } from "react-bootstrap";

const Fullpage = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <Container fluid>
          <ReactFullpage.Wrapper>{produceSections(data)}</ReactFullpage.Wrapper>
        </Container>
      );
    }}
  />
);

export default Fullpage;
