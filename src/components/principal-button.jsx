/**
 * @file principal-button.jsx - Principal Button Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";

/**
* Componente que renderiza el botón principal del index
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