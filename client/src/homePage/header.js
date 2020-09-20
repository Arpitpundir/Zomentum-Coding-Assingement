import React, {useContext, Component} from "react"
import styles from "./header.module.scss"

class Header extends Component{
  render(){
    return(
      <div className={styles.Header}>
        <div className={styles.Header_topic}>
          Book Your Ticket Hassle Free
        </div>
        <div className={styles.Header_intro}>
          Your Feedback Matters.
        </div>
      </div>
    );
    }
}

export default Header