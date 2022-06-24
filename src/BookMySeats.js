import React from "react";
import Seat from "./Seats";

export default class BookMySeats extends React.Component {
  constructor(props) {
    super(props);
  }

  createSeats() {
    let section = [];
    const startingChar = "A";
    for (let i = 0; i < 7; i += 1) {
      for (let j = 1; j < 9; j += 1) {
        let rowChar = String.fromCharCode(startingChar.charCodeAt(0) + i);
        section.push(rowChar + j);
      }
    }
    return section;
  }

  render() {
    const seatsSection = this.createSeats();
    return <Seat values={seatsSection} available={true} ={true} />;
  }
}
