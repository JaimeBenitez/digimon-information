import React from "react";

function backArrow(){
    return(
        <a href="/" id="back"><img src={require("../assets/img/back-arrow.svg").default} alt="back" className="arrow" /></a>
    )
}

export default backArrow;