/**
 * @file button.jsx - Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React from "react";

function Button ( props ){
    return(
    <a href={`${props.direction}.html`} id={`${props.id}`} className="buttons">{`${props.children}`}</a>
    )
}
export default Button;