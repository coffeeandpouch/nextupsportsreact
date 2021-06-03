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
          setLeagues({ Leagues: data.leagues });
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
      <form>
        <label>
          League:
          <select>
            {leagues.map((leagues) => (
              <li key={leagues.idLeague}>{leagues.strLeague}</li>
            ))}
          </select>
        </label>
      </form>
    );
  }
}
