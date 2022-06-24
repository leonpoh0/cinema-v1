import React from "react";

export default class Seat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prev) => ({
      isSelected: !prev,
    }));
    //    if (prev === true) {
    //   }
  }

  render() {
    return <button onClick={this.handleClick}>ABC </button>;
  }
}
