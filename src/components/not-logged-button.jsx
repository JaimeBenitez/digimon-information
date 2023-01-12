/**
 * @file not-logged-button.jsx - Not Logged Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";

function NotLoggedButton ( props ){
    return(
    <a href={`${props.direction}.html`} className={localStorage.getItem("user") ? "buttons--hide" : "buttons"}>{`${props.children}`}</a>
    )
}
export default NotLoggedButton;