/**
 * @file logo.jsx - Logo Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React from "react";
/**
 * @module Logo
 */
/**
* Componente que renderiza el logo de digimon
* @memberof module:Logo
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