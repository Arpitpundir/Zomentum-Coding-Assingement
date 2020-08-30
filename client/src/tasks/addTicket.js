import React, { Component } from "react";
import styles from "./addTicket.module.scss";
import Input from "../utils/Input/Input";
import Button from "../utils/Button/button";
import axios from "axios";
import Ticket from "./../utils/InfoCard/InfoCard"

class AddTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      form: {
        name: {
          elementType: "input",
          inputType: "text",
          placeholder: "Your Name",
          value: ""
        },
        phoneNo: {
          elementType: "input",
          inputType: "text",
          placeholder: "Phone No",
          value: "",
        },
        date: {
          elementType: "input",
          inputType: "text",
          placeholder: "dd-mm-yyyy",
          value: "",
          valid: false,
          touched: false,
          validation: {
            required: true
          }
        },
        timing:{
          elementType: "input",
          inputType: "datalist",
          placeholder: "Show Time",
          datalist:{
            options: ["9", "13", "17", "21"],
            id: "shows-list"
          }
        }
      },
      formIsValid: false,
      tId: null,
      name:null,
      phoneNo: null,
      timing: null,
      date: null
    };
  }

  inputChangeHandler = (event, inputElementIdentifier) => {

    console.log("called", event.target.value)
    let updatedForm = {
      ...this.state.form
    }
    let updatedFormElement = updatedForm[inputElementIdentifier]
    updatedFormElement.value = event.target.value
    this.setState({
      form: updatedForm
    })
  }
  submitHandler = event => {
    event.preventDefault()
    if(true){
      const data = {
        username: this.state.form.name.value,
        phoneno: this.state.form.phoneNo.value,
        date: this.state.form.date.value,
        timing: this.state.form.timing.value
      }
      axios({
        method: "POST",
        url: "/api/v1/ticket/",
        data: data,
        withCredentials: true
      })
        .then(res => {
          console.log(res.data)
          const ticket = res.data.docs;

          console.log(ticket)
          this.setState({
            tId: ticket._id,
            name:ticket.username,
            phoneNo:ticket.phoneno,
            timing: ticket.timing,
            date: ticket.date,
            status:res.data.status
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  render(){
    const form = Object.keys(this.state.form).map(inputField => (
      <div className={styles.FormCont__form_input_wrapper}>
      <Input
        key={inputField}
        elementType={this.state.form[inputField].elementType}
        inputType={this.state.form[inputField].inputType}
        placeholder={this.state.form[inputField].placeholder}
        value={this.state.form[inputField].value}
        onChange={event => this.inputChangeHandler(event, inputField)}
        label={this.state.form[inputField].label}
        datalist={this.state.form[inputField].datalist}
      />
      </div>
    ));
    if(this.state.tId==null){
      return (
        <div className={styles.FormCont}>
          <div className={styles.FormCont__form}>
            {form}
          </div>
          <div className = {`${styles.FormCont__form_input_wrapper} ${styles.FormCont__form_button_wrapper}`}>
          {this.props.errorMessage != null ? <span className = {styles.FormCont__form__errorMessage}>{this.props.errorMessage}</span> : <span></span>}

            <Button
              classes={["Button--1", "Submit"]}
              clicked={event => this.submitHandler(event)}
            >
              {" "}
              Book My Ticket{" "}
            </Button>
            </div>
        </div>
    )}else{
      return (<Ticket name={this.state.name} tId={this.state.tId} phoneNo={this.state.phoneNo}  timing={this.state.timing}
      status={this.state.status} date={this.state.date}/>)
    }
  }
}

export default AddTicket;