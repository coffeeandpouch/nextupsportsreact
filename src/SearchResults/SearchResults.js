import React from "react";

function SearchResults() {
  return (
    <div>
      <section id="results" class="cards">
        <h2 className="cards">Search results</h2>{" "}
      </section>
      <p id="js-error-message" class="error-message"></p>
      <div id="results-list"></div>
    </div>
  );
}

export default SearchResults;
