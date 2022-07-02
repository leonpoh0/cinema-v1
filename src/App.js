import "./App.css";
import React from "react";
import Seats from "./Seats";
import Poster from "./assets/Lightyear.jpeg";
import PriceTable from "./PriceTable";
import emailjs from "@emailjs/browser";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: 0,
      seatsValues: section,
      availableSeats: initialAvailableSeats,
      unavailableSeats: ["G4", "G5"],
      selectedSeats: [],
      bookedSeats: [],
      value: "Standard Ticket",
      name: "",
      email: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBook = this.handleBook.bind(this);
    this.handleChangeTicketType = this.handleChangeTicketType.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  // Method to handle clicks for each seat. If the seat is 'available', to change the state to 'selected'. If seat is 'selected', to change to 'available'.
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

  // Method to handle click to 'book' the 'selected' seats.
  handleBook() {
    let seatsToBook = this.state.selectedSeats;
    this.setState((prev) => ({
      tickets: 0,
      selectedSeats: [],
      bookedSeats: [...prev.bookedSeats, ...seatsToBook],
    }));
  }

  // Method to handle the change in ticket type option.
  handleChangeTicketType(event) {
    this.setState({
      value: event.target.value,
    });
  }

  // Method to handle the input for user's name.
  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  // Method to handle the input for user's email.
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  // Method to send email to user using EmailJS. This method also passes the 'booked' seats to 'unavailable' seats, and resets the states so that user can select seats again.
  sendEmail(event) {
    event.preventDefault();
    let paramToPass = {
      email: this.state.email,
      name: this.state.name,
      bookedSeats: this.state.bookedSeats.toString(),
    };
    emailjs
      .send(
        "service_fr1y9xc",
        "template_63iq6f6",
        paramToPass,
        "JcC44N5fK_OO6C1oJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    let prevBookedSeats = this.state.bookedSeats;
    this.setState((prev) => ({
      tickets: 0,
      bookedSeats: [],
      unavailableSeats: [...prev.unavailableSeats, ...prevBookedSeats],
      name: "",
      email: "",
    }));
  }

  // Create a reference to a section created at the bottom of the page, so that the page automatically scrolls to the bottom with user's interaction.
  messagesEndRef = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    let statusMessage = "";
    let ticketSelectionClass = "";
    let emailClass = "";
    let seatSelectionClass = "";
    // To identify whether user has selected tickets, and booked seats, to show appropriate status message.
    if (this.state.bookedSeats.length === 0) {
      emailClass = "none";
      if (this.state.tickets === 0) {
        statusMessage = "No tickets selected.";
        ticketSelectionClass = "none";
      } else if (this.state.tickets === 1) {
        statusMessage = "1 ticket selected - Seat " + this.state.selectedSeats;
      } else {
        statusMessage =
          this.state.tickets +
          " tickets selected - Seats " +
          this.state.selectedSeats[0];
        for (let i = 1; i < this.state.selectedSeats.length; i += 1) {
          statusMessage += ", " + this.state.selectedSeats[i];
        }
      }
    } else {
      ticketSelectionClass = "none";
      emailClass = "";
      seatSelectionClass = "disable";
      let numberOfBookedTickets = this.state.bookedSeats.length;
      if (numberOfBookedTickets === 1) {
        statusMessage =
          "You have successfully booked 1 ticket. Enter your name and email below to receive a copy of your booking details.";
      } else {
        statusMessage =
          "You have successfully booked " +
          this.state.bookedSeats.length +
          " tickets. Enter your name and email below to receive a copy of your booking details.";
      }
    }
    return (
      <div className="App">
        <div className="movie-info">
          <img src={Poster} alt="Lightyear movie" className="poster" />
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
            seatSelectionClass={seatSelectionClass}
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
            <div className="booked legends-seat"></div>
            <span className="legends-text">Booked</span>
          </div>
          <div className="legends-item">
            <div className="unavailable legends-seat"></div>
            <span className="legends-text">Unavailable</span>
          </div>
        </div>
        <div>
          <div className="ticket-summary">{statusMessage}</div>
          <div className={ticketSelectionClass}>
            <div>
              <label>
                <span className="ticket-text">Select Ticket Type: </span>
                <select onChange={this.handleChangeTicketType}>
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
              className={ticketSelectionClass}
            />
            <span className="ticket-text">Confirm your booking: </span>
            <button className="button-style" onClick={this.handleBook}>
              Book
            </button>
          </div>
        </div>
        <form onSubmit={this.sendEmail} className={emailClass}>
          <div className="email-section">
            <div className="email-label-and-field">
              <label>
                <span className="email-section-label"> Name: </span>
              </label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
            </div>
            <div className="email-label-and-field">
              <label>
                <span className="email-section-label">Email: </span>
              </label>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </div>
          </div>
          <input
            type="submit"
            className="button-style"
            value="Send me a copy of my booking"
          />
        </form>
        <div ref={this.messagesEndRef} />
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

// Initiatialise seats, assume that seat 'G4' and 'G5' are unavailable.
let initialAvailableSeats = [...section];
initialAvailableSeats.splice(69, 2);
