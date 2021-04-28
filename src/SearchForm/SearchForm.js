import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <>
      <form className="js-form">
        <label htmlFor="allLeagues">League:</label>
        <select id="allLeagues">
          <option defaultValue="" disabled selected>
            Choose your league
          </option>
        </select>
        <br />
        <label for="selectedLeague">Team:</label>
        <select id="selectedLeague">
          <option disabled selected defaultValue="">
            Choose your team
          </option>
        </select>

        <label htmlFor="teamId" hidden>
          Team ID:
        </label>

        <input
          id="teamId"
          type="text"
          disabled
          placeholder="Select a team"
          hidden
        />

        <input type="submit" defaultValue="Go!" />
        <br />
      </form>
    </>
  );
}

export default SearchForm;
