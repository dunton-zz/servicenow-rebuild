import React, { Component } from "react";
import Homepage from "./Homepage";
import Question from "./Question";
import Fullpage from "./Fullpage";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { getHeaderData } from "../functions/getHeaderData";
import { headerData } from "../data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      slidePosition: null,
      slideType: "homepage",
      whatsThis: false
    };
  }

  onLeave = (origin, destination, direction) => {
    this.setState({
      slidePosition: destination.index
    });
  };

  displayWhatsThis = () => {
    this.setState(prevState => ({
      whatsThis: !prevState.whatsThis
    }));
  };

  render() {
    console.log(this.state);
    const { slideType, whatsThis } = this.state;
    const { clientLogo, programTitle } = getHeaderData(headerData);
    return (
      <div>
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Header
            whatsThis={whatsThis}
            displayWhatsThis={this.displayWhatsThis}
            clientLogo={clientLogo}
            programTitle={programTitle}
          />
          <Fullpage onLeave={this.onLeave} />
          <Footer slideType={slideType} />
        </Container>
      </div>
    );
  }
}

export default App;
