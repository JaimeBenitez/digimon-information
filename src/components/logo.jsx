import React from "react";

function Logo({ isMyList }){
    return(
        <img src={require("../assets/img/logo.png")} alt="logo" id={isMyList ? "myList__logo" : "logo"} />
    )
};

export default Logo;