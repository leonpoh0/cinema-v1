import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";

export default class PriceTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let seatsToPrint = [...this.props.selectedSeats];
    let printSeats = "";
    if (seatsToPrint.length === 0) {
      printSeats = "-";
    } else {
      for (let i = 0; i < seatsToPrint.length; i += 1) {
        if (i !== seatsToPrint.length - 1) {
          printSeats += seatsToPrint[i] + ", ";
        } else {
          printSeats += seatsToPrint[i];
        }
      }
    }

    let totalPrice = priceList[this.props.typeOfTicket] * this.props.tickets;
    let priceToReflect = "";
    if (isNaN(totalPrice)) {
      priceToReflect = "";
    } else {
      priceToReflect = "$" + totalPrice + ".00";
    }
    return (
      <TableContainer
        component={Paper}
        className="table"
        sx={{ maxWidth: 600 }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticket Type</TableCell>
              <TableCell align="right">Number of tickets</TableCell>
              <TableCell align="right">Seats</TableCell>
              <TableCell align="right">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">{this.props.typeOfTicket}</TableCell>
              <TableCell align="right">{this.props.tickets}</TableCell>
              <TableCell align="right">{printSeats}</TableCell>
              <TableCell align="right">{priceToReflect}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const priceList = {
  "Standard Ticket": 14,
  "Student Ticket": 7,
  "Bank A Promo Ticket": 10,
  "Bank B Promo Ticket": 10,
};
