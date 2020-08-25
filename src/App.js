import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>

      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Dexter",
//       animal: "Dog",
//       breed: "Boston Terrier",
//     }),
//     React.createElement(Pet, {
//       name: "Olive",
//       animal: "Dog",
//       breed: "ParkSide Mix",
//     }),
//     React.createElement(Pet, {
//       name: "XYZ",
//       animal: "Cat",
//       breed: "Siamese",
//     }),
//   ]);

{
  /* <Pet name="Dexter" animal="Dog" breed="Boston Terrier" />
      <Pet name="Olive" animal="Dog" breed="ParkSide Mix" />
      <Pet name="XYZ" animal="Cat" breed="Siamese" /> */
}
