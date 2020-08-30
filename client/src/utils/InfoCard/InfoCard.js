import React, { Component } from "react";
import styles from "./InfoCard.module.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: {}
    };
  }
  render() {
    let profile = [];
    if (this.props.status) {
      profile.push(
        <div key="status" className={styles.Profile}>
          <h3>
            <b>Status</b>
          </h3>
          {this.props.status == "success" ? (
            <p style={{ color: "green" }}>{this.props.status}</p>
          ) : (
            <p style={{ color: "red" }}> {this.props.status}</p>
          )}
        </div>
      );
    }
    if (this.props.msg) {
      profile.push(
        <div key="msg" className={styles.Profile}>
          <h3>
            <b> Message </b>
          </h3>
          <p> {this.props.msg}</p>
        </div>
      );
    }
    if (this.props.tId) {
      profile.push(
        <div key="ticket-id" className={styles.Profile}>
          <h3>
            <b> TicketId </b>
          </h3>
          <p> {this.props.tId}</p>
        </div>
      );
    }
    if (this.props.name) {
      profile.push(
        <div key="name" className={styles.Profile}>
          <h3>
            <b> Name </b>
          </h3>
          <p> {this.props.name}</p>
        </div>
      );
    }
    if (this.props.phoneNo) {
      profile.push(
        <div key="phoneNo" className={styles.Profile}>
          <h3>
            <b>Phone No.</b>
          </h3>
          <p> {this.props.phoneNo}</p>
        </div>
      );
    }
    if (this.props.date) {
      profile.push(
        <div key="date" className={styles.Profile}>
          <h3>
            <b>Date</b>
          </h3>
          <p> {this.props.date}</p>
        </div>
      );
    }
    if (this.props.timing) {
      profile.push(
        <div key="timing" className={styles.Profile}>
          <h3>
            <b>Timing</b>
          </h3>
          <p> {this.props.timing}:00:00</p>
        </div>
      );
    }
    return (
      <div className={styles.InfoCardCont}>
        <div className={styles.InfoCard}>
          {profile}
        </div>
      </div>
    )
  }
}

export default Profile;