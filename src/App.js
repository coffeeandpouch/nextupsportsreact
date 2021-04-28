import React from "react";
import Header from "../src/Header/Header";
import SearchForm from "../src/SearchForm/SearchForm";

export default class App extends React.Component {
  constructor() {
    super();
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
          {<SearchForm />}
        </main>
      </div>
    );
  }
}
