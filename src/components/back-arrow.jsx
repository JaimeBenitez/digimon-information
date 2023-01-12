/**
 * @file back-arrow.jsx - Back Arrow Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";

function backArrow(){
    return(
        <a href="/" id="back"><img src={require("../assets/img/back-arrow.svg").default} alt="back" className="arrow" /></a>
    )
}

export default backArrow;