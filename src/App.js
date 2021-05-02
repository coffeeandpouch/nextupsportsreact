import React from "react";
import Header from "../src/Header/Header";
import GetLeagues from "../src/GetLeagues/GetLeagues";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      League: [],
      Team: [],
    };
  }

  render() {
    return (
      <div>
        <main className="App">
          {<Header />}

          <br />
          <GetLeagues />
        </main>
      </div>
    );
  }
}
