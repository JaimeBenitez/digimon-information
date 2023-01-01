import React from "react";

function NotLoggedButton ( props ){
    return(
    <a href={`${props.direction}.html`} className={localStorage.getItem("user") ? "buttons--hide" : "buttons"}>{`${props.children}`}</a>
    )
}
export default NotLoggedButton;