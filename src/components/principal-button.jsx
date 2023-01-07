import React from "react";

function PrincipalButton ( props ){    

    return(
    <a href={"list.html"} className="principal__button">{`${props.children}`}</a>
    )
}
export default PrincipalButton;