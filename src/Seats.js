import React from "react";

export default class Seat extends React.Component {
  render() {
    return (
      <div className="seats-section">
        {this.props.seatValues.map((seat) => {
          // The 'availability' variable is for styling of the seats (refer to App.css).
          let availability;
          if (this.props.availableSeats.includes(seat)) {
            availability = "available";
          } else if (this.props.selectedSeats.includes(seat)) {
            availability = "selected";
          } else if (this.props.unavailableSeats.includes(seat)) {
            availability = "unavailable";
          } else {
            availability = "booked";
          }
          /*
          Each 'seat' in 'seatValues' are either of the following:
          1. Empty space - e.g. "Fempty" for empty space between F5 and F6
          2. Actual seat - e.g. "F2"
          3. To label the columns - e.g. "5" for column 5 (at the bottom of the seats section.
          */
          if (isNaN(seat)) {
            if (seat.length > 3) {
              return <div className="seat-class" key={seat}></div>;
            } else {
              return (
                <button
                  key={seat}
                  data-key={seat}
                  onClick={this.props.handleClick}
                  className={`seat-class ${availability} ${this.props.seatSelectionClass}`}
                ></button>
              );
            }
          } else {
            return (
              <span className="seat-label" key={seat}>
                {seat}
              </span>
            );
          }
        })}
      </div>
    );
  }
}
