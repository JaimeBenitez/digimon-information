import React from "react";

function Button ( props ){
    return(
    <a href={`${props.direction}.html`} className="buttons">{`${props.children}`}</a>
    )
}
export default Button;