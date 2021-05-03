import React from "react";

export default function getLeagues(props) {
  //this.handleChange = this.handleChange.bind(this);
  //this.handleSubmit = this.handleSubmit.bind(this);

  //handleChange(event) {
  // this.setState({ value: event.target.value });

  // handleSubmit(event) {
  // alert("Your favorite flavor is " + this.state.value);
  //event.preventDefault();
  //}

  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        League:
        <select value={props.value} onChange={props.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
