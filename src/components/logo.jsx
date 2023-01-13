/**
 * @file logo.jsx - Logo Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React from "react";

/**
* Componente que renderiza el logo de digimon
* @param {boolean} isMyList - Le dice al logo que clase usar segun la pantalla en la que esté
* @returns {JSX} 
*      
*/
function Logo({ isMyList }){
    return(
        <img src={require("../assets/img/logo.png")} alt="logo" id={isMyList ? "myList__logo" : "logo"} />
    )
};

export default Logo;