// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import { cars } from "./practice";

// let tesla = cars.find((o) => {
//   return o.id === "Tesla";
// });

// let teslaTopSpeed = tesla.speedStats.topSpeed;

// let teslaTopColour = tesla.coloursByPopularity[0];

// let honda = cars.find((o) => {
//   return o.id === "Honda";
// });

// let hondaTopSpeed = honda.speedStats.topSpeed;
// let hondaTopColour = honda.coloursByPopularity[0];

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
