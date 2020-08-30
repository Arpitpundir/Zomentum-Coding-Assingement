import React, { Component } from "react";
import styles from "./addTicket.module.scss";
import Input from "../utils/Input/Input";
import Button from "../utils/Button/button";
import axios from "axios";
import Ticket from "./../utils/InfoCard/InfoCard"

class ShowUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      form: {
        tId: {
          elementType: "input",
          inputType: "text",
          placeholder: "Ticket Id",
          value: "",
          valid: false,
          touched: false,
          validation: {
            required: true
          }
        }
      },
      formIsValid: false,
      name: null,
      phoneNo:null,
      timing: null,
      date: null,
      status: null,
      msg: null
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
      axios({
        method: "GET",
        url: `/api/v1/ticket/${this.state.form.tId.value}`,
        withCredentials: true
      })
        .then(res => {
          console.log(res.data)
          if(res.data.status=="failed"){
            this.setState({
              status: "failed",
              msg: res.data.msg
            })
          }else{
            const ticket = res.data.docs;
            console.log(ticket)
            this.setState({
              name:ticket.username,
              phoneNo:ticket.phoneno,
              timing: ticket.timing,
              date: ticket.date,
              status:res.data.status
            })
          }
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
    if(this.state.status==null){
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
              Find User{" "}
            </Button>
            </div>
        </div>
    )}else if(this.state.status=="success"){
      return (<Ticket name={this.state.name} phoneNo={this.state.phoneNo}  timing={this.state.timing}
      status={this.state.status} date={this.state.date}/>)
    }else{
      return (<Ticket msg={this.state.msg}
        status={this.state.status}/>)
    }
  }
}

export default ShowUser;