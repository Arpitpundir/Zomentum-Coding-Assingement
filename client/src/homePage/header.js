import React, {useContext, Component} from "react"
import styles from "./header.module.scss"

class Header extends Component{
  render(){
    return(
      <div className={styles.Header}>
        <div className={styles.Header_topic}>
          Zomentum Coding Assingement-2
        </div>
        <div className={styles.Header_intro}>
          Arpit Pundir 17103046 JIIT
        </div>
      </div>
    );
    }
}

export default Header