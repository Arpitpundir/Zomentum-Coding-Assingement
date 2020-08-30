import React, { Component } from "react";
import styles from "./CustomTable.module.scss";

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this)
  }
  getHeader() {
    return this.props.keys.map(key => <td key={key}>{key}</td>);
  }

  getRowsData = function(){
    var items = this.props.data;
    return items.map((row, index) => {
      return (
          <tr key={index}>
            <RenderRow key={index} data={row} match = {this.props.match}/>
          </tr>
      );
    });
  };

  render(){
    console.log(this.props.keys)
    return(
      <table className = {styles.Table}>
        <thead>
          {this.getHeader()}
        </thead>
        <tbody>
          {this.getRowsData()}
        </tbody>
      </table>
    )
  }
}

const RenderRow = (props) => {
return Object.keys(props.data).map(key => {
    return <td key = {key}>{props.data[key]}</td>
    })
}