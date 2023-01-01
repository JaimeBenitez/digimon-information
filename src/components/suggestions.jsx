import React, { useState } from "react";
import Navbar from './navbar';
import PrincipalImage from "./principal-image";
import BackArrow from "./back-arrow";

//Esta regexp nos permite establecer que minimo se necesiten 3 palabras para que sea válido el campo
const suggestionRegexp = new RegExp(/^[\w',]+\s[\w',]+\s[\w',]+/gm);

function Suggestions(){
    const [values,setValues] = useState({
        suggestion: "",                  
        suggestionError: false,                     
    });
    function handleSubmit(e){
        
        e.preventDefault();
        //Si todo el formulario es valido entonces aparece el alert
        if(!values.suggestionError){
            alert("Thanks for share with us your opinions, the digital world its a little bit better day by day thanks to your suggestions")
        }
        
    }
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
