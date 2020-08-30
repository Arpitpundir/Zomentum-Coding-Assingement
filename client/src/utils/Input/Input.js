import React from "react";
import styles from "./Input.module.scss";
import Aux from "./../Aux";
import Button from "../Button/button";

const input = props => {
let inputElement = null;
let inputClasses = [styles.input];
switch ( props.inputType ) {
    case "text":
        inputElement = (
            <input
                className={styles.input}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                type={props.elementType}
            />)
        break;
    case("datalist"):
        inputElement = (
            <Aux>
                <input
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.onChange}
                placeholder = {props.placeholder}
                type = {props.elementType}
                list = {props.datalist.id}
                />
                <datalist id = {props.datalist.id}>
                    {props.datalist.options.map(option => <option value = {option}/>)}
                </datalist>
            </Aux>
        )
        break
}
return (
    <Aux>
    <label className={styles.input_label}>{props.label}</label>
    {inputElement}
    </Aux>
)
};

export default input;