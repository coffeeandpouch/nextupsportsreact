import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <>
      <form class="js-form">
        <label for="allLeagues">League:</label>
        <select id="allLeagues">
          <option value="" disabled selected>
            Choose your league
          </option>
        </select>
        <br />
        <label for="selectedLeague">Team:</label>
        <select id="selectedLeague">
          <option disabled selected value="">
            Choose your team
          </option>
        </select>

        <label for="teamId" hidden>
          Team ID:
        </label>

        <input
          id="teamId"
          type="text"
          disabled
          placeholder="Select a team"
          hidden
        />

        <input type="submit" value="Go!" />
        <br />
      </form>
      <h2 class="cards">Search results</h2>
    </>
  );
}

export default SearchForm;
