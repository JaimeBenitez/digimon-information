/**
 * @file not-logged-button.jsx - Not Logged Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";
/**
* Componente que renderiza botones dinámicos que solo aparecerán si el usuario no esta logueado
* @param {string} props.direction - Dirección a la que nos llevará el botón
* @param {string} props.id - Id del botón, para darle estilos concretos
* @param {string} props.children - El texto que tendrá el botón
* @returns {JSX} 
*      
*/
function NotLoggedButton ( props ){
    return(
    <a href={`${props.direction}.html`} className={localStorage.getItem("user") ? "buttons--hide" : "buttons"}>{`${props.children}`}</a>
    )
}
export default NotLoggedButton;