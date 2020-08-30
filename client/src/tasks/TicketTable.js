import React from "react"
import CustomTable from "./CustomTable";
export default (props) =>{
  let keys = ["TicketId", "Name","Phone", "Date", "Show"]
  let rows = []
  props.tickets.forEach((ticket) => {
    let row = {}
    row.tId = ticket._id
    row.UserName = ticket.username
    row.PhoneNo = ticket.phoneno
    row.Date = ticket.date
    row.Timing=ticket.timing
    rows.push(row)
  });
  return (<CustomTable data = {rows} keys = {keys} match = {props.match}/>)
}