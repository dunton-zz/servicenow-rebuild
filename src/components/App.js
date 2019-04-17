import React, { Component } from "react";
import Homepage from "./Homepage";
import Question from "./Question";
import Fullpage from "./Fullpage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      slidePosition: null
    };
  }

  render() {
    return (
      // <div>
      //   <Homepage />
      //   {this.produceSections()}
      // </div>
      <Fullpage />
    );
  }
}

export default App;
