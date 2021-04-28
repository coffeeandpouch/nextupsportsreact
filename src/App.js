import React from "react";
import Header from "../src/Header/Header";
import SearchForm from "../src/SearchForm/SearchForm";

function App() {
  return (
    <main className="App">
      {<Header />}
      {<SearchForm />}
    </main>
  );
}

export default App;
