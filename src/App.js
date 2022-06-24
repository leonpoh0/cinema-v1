import "./App.css";
import React from "react";
import SeatComponent from "./Seats";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: 0,
      seatNumbers: [],
      seats: section,
    };
  }

  render() {
    return (
      <div>
        <div>screen</div>
        <div>
          <div>
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span> </span>
          </div>
          <SeatComponent values={this.state.seats} />
          <div>
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span> </span>
          </div>
        </div>
        <div>Legend</div>
        <div>
          <div>{this.state.tickets} ticket(s) selected</div>
          <div>
            <button>Back</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

let section = [];
const startingChar = "A";
for (let i = 0; i < 7; i += 1) {
  for (let j = 1; j < 9; j += 1) {
    let rowChar = String.fromCharCode(startingChar.charCodeAt(0) + i);
    let seatNumber = rowChar + j;
    section.push({
      seatNumber: seatNumber,
      seatStatus: "available",
    });
  }
}
