import React from "react";
import Header from "../src/Header/Header";
import GetLeagues from "../src/GetLeagues/GetLeagues";

export default function App() {
  return (
    <div name="App">
      <Header />
      <div className="leagues" />
      <GetLeagues />
    </div>
  );
}
