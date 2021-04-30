import React from "react";
import Header from "../src/Header/Header";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      League: [],
      Team: [],
    };
  }

  async getLeagues() {
    const res = await axios.get(
      "https://www.thesportsdb.com/api/v1/json/40130162/all_leagues.php"
    );
    const leagues = res.json.leagues.idLeague;

    const selectLeague = leagues.map((l) => ({
      League: l.idLeague,
    }));
    this.setState({ League: selectLeague });
  }
  componentDidMount() {
    this.getLeagues();
  }

  render() {
    console.log(this.state.getLeagues);
    return (
      <div>
        <main className="App">{<Header />}</main>
        <br />
      </div>
    );
  }
}
