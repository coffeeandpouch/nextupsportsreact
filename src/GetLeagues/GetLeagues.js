import React, { useState, useEffect } from "react";
import "./GetLeagues.css";

export default function GetLeagues() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [leagues, setLeagues] = useState({});

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/40130162/all_leagues.php ")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log(data);
          setLeagues({ leagues: data.leagues });
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="formDiv">
        <form id="leagueForm">
          <label id="leagueName">
            Select a league:
            <select
              value={leagues}
              onChange={(e) => setLeagues(e.currentTarget.value)}
            >
              {[leagues].map((leagues, key) => (
                <option key={key} value={key}>
                  {leagues.idLeague}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}
