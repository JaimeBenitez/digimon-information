/**
 * @file suggestions.jsx - Suggestions Page
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React, { useState } from "react";
import Navbar from "./navbar";
import PrincipalImage from "./principal-image";
import BackArrow from "./back-arrow";

//Esta regexp nos permite establecer que minimo se necesiten 3 palabras para que sea válido el campo
/**
* Regex para validar el text area
* @type {Object} 
*/ 
const suggestionRegexp = new RegExp(/^[\w',]+\s[\w',]+\s[\w',]+/gm);

function Suggestions(){
    
    const [values,setValues] = useState({
        suggestion: "",                  
        suggestionError: false,                     
    });


    /**
    * Funcion que comprueba si los datos registrados son correctos y de ser asi te muestra un mensaje en un alert
    * @param {string} e - El evento que activa la función, en este caso un click
    *  
    */
    function handleSubmit(e){        
        e.preventDefault();
        //Si todo el formulario es valido entonces aparece el alert
        if(!values.suggestionError){
            alert("Thanks for share with us your opinions, the digital world its a little bit better day by day thanks to your suggestions")
        }        
    }
    /**
    * Funcion que controla el estado al cambiar algo dentro del text area
    * @param {string} e - El evento que activa la función, en este caso un cambio dentro de un input
    *  
    */
    function handleChange(e){
        //Aqui target es el elemento que ejecuta el evento, name el nombre del input y value el valor actual
        const { target } = e;
        const { name, value } = target;

        // Clonamos el estado actual modificando solo el valor del input que lanzó el evento
        const newValues = {
            ...values, [name]: value,
        };

        //Por ultimo sincronizamos el nuevo estado
        setValues(newValues);
    }
    /**
    * Funcion que controla la salida del mensaje de error en el campo de sugerencias
    *    
    */
    function handleSuggestionError(){        
        const suggestionError = !suggestionRegexp.test(values.suggestion);
        setValues((prevState) => ({ ...prevState, suggestionError}));
    }
    return (
        <main>        
            <PrincipalImage />   
            <section id="suggestions">
                <Navbar />              
                <form  id="suggestions__form" onSubmit={handleSubmit}>   
                    <fieldset id="suggestions__fieldset"> 
                        <h2 className="suggestions__subtitle">Suggestions</h2>

                        <textarea  cols="30" rows="5" id="suggestions__textarea" name="suggestion" placeholder="Write your suggestions" value={values.suggestion}
                         onChange={handleChange} onBlur={handleSuggestionError} aria-errormessage="suggestionError"
                        aria-invalid={values.suggestionError} required></textarea>        
                        <span className="error" id="suggestionError" aria-live="assertive" style={{visibility: values.suggestionError ? "visible" : "hidden"}}>
                        Suggestion invalid. It should have at least 3 words</span>

                        <button type="submit" id="suggestions__submit" className="buttons">Submit</button>
                        <img src={require("../assets/img/Patamon-sf.png")} alt ="patamon" id="contact__img" />
                        <BackArrow />
                    </fieldset>                
                </form>                               
            </section>
           
    </main>
    )
}

export default Suggestions;
