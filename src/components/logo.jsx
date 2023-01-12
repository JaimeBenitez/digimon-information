/**
 * @file logo.jsx - Logo Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React from "react";

function Logo({ isMyList }){
    return(
        <img src={require("../assets/img/logo.png")} alt="logo" id={isMyList ? "myList__logo" : "logo"} />
    )
};

export default Logo;