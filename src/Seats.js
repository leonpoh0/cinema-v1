import React from "react";

export default class Seat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="seats-section">
        {this.props.seatValues.map((seat) => {
          let availability;
          if (this.props.availableSeats.includes(seat)) {
            availability = "available";
          } else if (this.props.selectedSeats.includes(seat)) {
            availability = "selected";
          } else {
            availability = "unavailable";
          }
          if (isNaN(seat)) {
            if (seat.length > 3) {
              return <div className="seat-class" key={seat}></div>;
            } else {
              return (
                <button
                  key={seat}
                  data-key={seat}
                  onClick={this.props.handleClick}
                  className={`seat-class ${availability}`}
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
