import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-imoportant">Adopt</h1>
      <Pet name="Dexter" animal="Dog" breed="Boston Terrier" />
      <Pet name="Olive" animal="Dog" breed="ParkSide Mix" />
      <Pet name="XYZ" animal="Cat" breed="Siamese" />
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
