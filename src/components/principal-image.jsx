/**
 * @file principal-image.jsx - Principal Image Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";

/**
* Componente que renderiza la imagen que ocupa la mitad de la pantalla en la mayoria de pantallas
* @returns {JSX} 
*      
*/
function PrincipalImage (){
    return (
        <picture>
        <source
                media="(min-width: 980px)"
                srcSet={require("../assets/img/Digimon-Adventure-2020.jpg")}/>                            
        <source srcSet={require("../assets/img/digimon.jpg")}/>
        <img src={require("../assets/img/digimon.jpg")} id="img-principal" alt="principal" />   
        </picture> 
    )
}
export default PrincipalImage;