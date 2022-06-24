import React from "react";

export default class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seatNumber: "",
      seatStatus: "available",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({
      seatStatus:
        prev === "available"
          ? "selected"
          : prev === "selected"
          ? "available"
          : prev === "reserved"
          ? "reserved"
          : "reserved",
    }));
  }

  render() {
    return (
      <div>
        {this.props.values.map((seat) => {
          return (
            <button key={seat.seatNumber} onClick={this.handleClick}>
              {seat.seatNumber}
            </button>
          );
        })}
      </div>
    );
  }
}
