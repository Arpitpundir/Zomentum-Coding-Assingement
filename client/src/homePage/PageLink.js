import React, {Component} from "react"
import styles from "./PagesLink.module.scss"
import {Link} from "react-router-dom"
import Button from "./../utils/Button/button";

const PagesLink = (props)=> {
  return(
    <div className={styles.Cont}>
      <Link to="/createticket">
        <div className = {`${styles.FormCont__form_input_wrapper} ${styles.FormCont__form_button_wrapper}`}>
          <Button
            classes={["Button--1", "Submit"]}
          >
            {" "}
            Create Ticket{" "}
          </Button>
        </div>
      </Link>
      <Link to="/updateticket">
        <div className = {`${styles.FormCont__form_input_wrapper} ${styles.FormCont__form_button_wrapper}`}>
          <Button
            classes={["Button--1", "Submit"]}
          >
            {" "}
            Update Ticket{" "}
          </Button>
        </div>
      </Link>
      <Link to="/deleteticket">
        <div className = {`${styles.FormCont__form_input_wrapper} ${styles.FormCont__form_button_wrapper}`}>
          <Button
            classes={["Button--1", "Submit"]}
          >
            {" "}
            Delete Ticket{" "}
          </Button>
        </div>
      </Link>
      <Link to="/showuser">
        <div className = {`${styles.FormCont__form_input_wrapper} ${styles.FormCont__form_button_wrapper}`}>

          <Button
            classes={["Button--1", "Submit"]}
          >
            {" "}
            Find User{" "}
          </Button>
        </div>
      </Link>
      <Link to="/searchticket">
      <div className = {`${styles.FormCont__form_input_wrapper} ${styles.FormCont__form_button_wrapper}`}>
          <Button
            classes={["Button--1", "Submit"]}
          >
            {" "}
            Search Tickets{" "}
          </Button>
          </div>
      </Link>
    </div>
  )
}

export default PagesLink;