import React from "react";

function LoggedButton ( props ){
    return(
    <a href={`${props.direction}.html`} className={localStorage.getItem("user") ? "buttons" : "buttons--hide"}>{`${props.children}`}</a>
    )
}
export default LoggedButton;