import React, { Component } from "react";
import Homepage from "./Homepage";
import Question from "./Question";
import Fullpage from "./Fullpage";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      slidePosition: null,
      slideType: "homepage"
    };
  }

  onLeave = (origin, destination, direction) => {
    this.setState({
      slidePosition: destination.index
    });
  };

  render() {
    const { slideType } = this.state;
    return (
      <div>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Fullpage onLeave={this.onLeave} />
          <Footer slideType={slideType} />
        </Container>
      </div>
    );
  }
}

export default App;
