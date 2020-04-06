import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      string: "Hello React from Maxi",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange() {
    console.log("onSearchChange");
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
