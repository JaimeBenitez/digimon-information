import React from "react";

function Button ( props ){
    return(
    <a href={`${props.direction}.html`} id={`${props.id}`} className="buttons">{`${props.children}`}</a>
    )
}
export default Button;