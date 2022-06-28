import "./App.css";
import React from "react";
import Seats from "./Seats";
import Poster from "./assets/Lightyear.jpeg";
import PriceTable from "./PriceTable";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: 0,
      seatsValues: section,
      availableSeats: section,
      unavailableSeats: [],
      selectedSeats: [],
      value: "Standard Ticket",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBook = this.handleBook.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    let clickedSeat = e.target.dataset.key;
    if (
      e.target.className.includes("available") &&
      !e.target.className.includes("unavailable")
    ) {
      this.setState((prev) => ({
        tickets: prev.tickets + 1,
        availableSeats: prev.availableSeats.filter(
          (seatNum) => seatNum !== clickedSeat
        ),
        selectedSeats: [...prev.selectedSeats, clickedSeat],
      }));
    } else if (e.target.className.includes("selected")) {
      this.setState((prev) => ({
        tickets: prev.tickets - 1,
        availableSeats: [...prev.availableSeats, clickedSeat],
        selectedSeats: prev.selectedSeats.filter(
          (seatNum) => seatNum !== clickedSeat
        ),
      }));
    }
  }

  handleBook() {
    let seatsToBook = this.state.selectedSeats;
    this.setState((prev) => ({
      tickets: 0,
      selectedSeats: [],
      unavailableSeats: [...prev.unavailableSeats, seatsToBook],
    }));
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
    console.log(event.target.value);
  }

  render() {
    let ticketsSelected = "";
    if (this.state.tickets === 0) {
      ticketsSelected = "No tickets selected.";
    } else if (this.state.tickets === 1) {
      ticketsSelected = "1 ticket selected - Seat " + this.state.selectedSeats;
    } else {
      ticketsSelected =
        this.state.tickets +
        " tickets selected - Seats " +
        this.state.selectedSeats[0];
      for (let i = 1; i < this.state.selectedSeats.length; i += 1) {
        ticketsSelected += ", " + this.state.selectedSeats[i];
      }
    }
    return (
      <div className="App">
        <div className="movie-info">
          <img src={Poster} alt="Lightyear image" className="poster" />
          <div className="movie-title-info">
            <span className="movie-classification">NC16</span>
            <div className="movie-name">Disney and Pixar’s Lightyear</div>
            <div className="movie-title-details">Orchard Theatres Hall 1</div>
            <div className="movie-title-details">THURSDAY 16 JUN 2022</div>
            <div className="movie-title-details">8:00 PM</div>
          </div>
        </div>
        <div className="screen">screen</div>
        <div className="seats-and-rows">
          <div className="row-numbers">
            {rowCharArray.map((rowChar) => {
              return (
                <span key={rowChar} className="seat-label">
                  {rowChar}
                </span>
              );
            })}
          </div>
          <Seats
            seatValues={this.state.seatsValues}
            availableSeats={this.state.availableSeats}
            unavailableSeats={this.state.unavailableSeats}
            selectedSeats={this.state.selectedSeats}
            handleClick={this.handleClick}
          />
          <div className="row-numbers">
            {rowCharArray.map((rowChar) => {
              return (
                <span key={rowChar} className="seat-label">
                  {rowChar}
                </span>
              );
            })}
          </div>
        </div>
        <div className="legends">
          <div className="legends-item">
            <div className="available legends-seat"></div>
            <span className="legends-text">Available </span>
          </div>
          <div className="legends-item">
            <div className="selected legends-seat"></div>
            <span className="legends-text">Selected</span>
          </div>
          <div className="legends-item">
            <div className="unavailable legends-seat"></div>
            <span className="legends-text">Unavailable</span>
          </div>
        </div>
        <div>
          <div className="ticket-summary">{ticketsSelected}</div>
          <div>
            <label>
              <span className="ticket-text">Select Ticket Type: </span>
              <select onChange={this.handleChange}>
                <option value="Standard Ticket">
                  Standard Ticket - $14.00
                </option>
                <option value="Student Ticket">Student Ticket - $7.00</option>
                <option value="Bank A Promo Ticket">
                  Bank A Promo Ticket - $10.00
                </option>
                <option value="Bank B Promo Ticket">
                  Bank B Promo Ticket - $10.00
                </option>
              </select>
            </label>
          </div>
          <PriceTable
            tickets={this.state.tickets}
            selectedSeats={this.state.selectedSeats}
            typeOfTicket={this.state.value}
          />
          <div>
            <button>Back</button>
            <button onClick={this.handleBook}>Book</button>
          </div>
        </div>
      </div>
    );
  }
}

let rows = 8;
let columns = 10;
let section = [];
let rowCharArray = [];
const startingChar = "A";
for (let i = 0; i < rows; i += 1) {
  let rowChar = String.fromCharCode(startingChar.charCodeAt(0) + i);
  for (let j = 1; j <= columns; j += 1) {
    let seatNumber = rowChar + j;
    section.push(seatNumber);
    if (j === 5) {
      let emptySeatHolder = i + "empty";
      section.push(emptySeatHolder);
    }
  }
  rowCharArray.push(rowChar);
  if (i === rows - 1) {
    rowCharArray.push("");
  }
}

for (let j = 1; j <= columns; j += 1) {
  section.push(j);
  if (j === 5) {
    section.push("empty");
  }
}
