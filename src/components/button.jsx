/**
 * @file button.jsx - Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React from "react";
/**
 * @module Button
 */
/**
* Componente consistente en enlaces con una dirección, id y contenido dinámico
* @memberOf module:Button
* @param {string} props.direction - Dirección a la que nos llevará el botón
* @param {string} props.id - Id del botón, para darle estilos concretos
* @param {string} props.children - El texto que tendrá el botón
* @returns {JSX} 
*      
*/
function Button ( props ){
    return(
    <a href={`${props.direction}.html`} id={`${props.id}`} className="buttons">{`${props.children}`}</a>
    )
}
export default Button;