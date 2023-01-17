/**
 * @file logged-button.jsx - Logged Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";
/**
 * @module LoggedButton
 */
/**
 * Componente que renderiza botones dinamicos que solo aparecerán si el usuario esta logueado
 * @memberof module:LoggedButton
 * @param {string} props.direction - Dirección a la que nos llevará el botón
 * @param {string} props.id - Id del botón, para darle estilos concretos
 * @param {string} props.children - El texto que tendrá el botón
 * @returns {JSX}       
 */
function LoggedButton ( props ){
    return(
    <a href={`${props.direction}.html`} className={localStorage.getItem("user") ? "buttons" : "buttons--hide"}>{`${props.children}`}</a>
    )
}
export default LoggedButton;