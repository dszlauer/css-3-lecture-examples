import React, { Component } from "react";

import Banner from "./components/Banner";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
