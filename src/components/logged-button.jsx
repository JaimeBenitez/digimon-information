/**
 * @file logged-button.jsx - Logged Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";

function LoggedButton ( props ){
    return(
    <a href={`${props.direction}.html`} className={localStorage.getItem("user") ? "buttons" : "buttons--hide"}>{`${props.children}`}</a>
    )
}
export default LoggedButton;