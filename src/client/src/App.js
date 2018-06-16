import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Count from "./modules/count";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Count} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
