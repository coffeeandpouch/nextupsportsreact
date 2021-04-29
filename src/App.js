import React from "react";
import Header from "../src/Header/Header";
import SearchForm from "../src/SearchForm/SearchForm";
import SearchResults from "../src/SearchResults/SearchResults";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      League: [],
      Team: [],
    };

    const leagueUrl =
      "https://www.thesportsdb.com/api/v1/json/40130162/all_leagues.php";

    const allTeamsUrl =
      "https://www.thesportsdb.com/api/v1/json/40130162/lookup_all_teams.php";

    const searchUrl =
      "https://www.thesportsdb.com/api/v1/json/40130162/eventsnext.php";

    const apiKey = "AIzaSyCftPUQqZxBItKv-g-0HAOWNbMuT47BdMM";

    const mapUrl =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCftPUQqZxBItKv-g-0HAOWNbMuT47BdMM&callback=initMap";

    let map, geocoder;

    function displayLeaguesInput(responseJson) {
      //iterate through the leagues array
      for (let i = 0; i < responseJson.leagues.length; i++) {
        //for each league in the leagues array, add a list item to options list with the league name
        this.setState({
          League: (
            <option value={responseJson.leagues[i].idLeague}>
              {responseJson.leagues[i].strLeague}
            </option>
          ),
        });

      //fetch all leagues and display at page load
       getLeagues = () => {
         fetch(leagueUrl)
         .then((response) => {
           if (response.ok) {
             return response.json();
           }
           throw new error(response.statusText)
         })
         .then((responseJson) => displayLeaguesInput(responseJson))
         .catch((err) => {<div><p>(err.message)</p></div>
         },
      
      }
    
  }
}
  }

  render() {
    return (
      <div>
        <main className="App">
          {<Header />}
          <br />
          {<SearchForm />}
          <br />
          {<SearchResults />}
        </main>
      </div>
    );
  }
}
