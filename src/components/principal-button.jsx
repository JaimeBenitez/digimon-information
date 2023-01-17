/**
 * @file principal-button.jsx - Principal Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";
/**
 * @module Principal-Button
 */
/**
* Componente que renderiza el botón principal del index
* @memberof module:Principal-Button
* @param {string} props.children - El texto que tendrá el botón
* @returns {JSX} 
*      
*/
function PrincipalButton ( props ){    

    return(
    <a href={"list.html"} className="principal__button">{`${props.children}`}</a>
    )
}
export default PrincipalButton;