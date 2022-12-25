import React,{ useState } from "react";
import BackArrow from "./back-arrow";

//Podemos declarar variables fuera de la función componente y usarlos dentro del mismo
const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

function RegisterForm(){
    
    //validación de formulario
    const [values,setValues] = useState({
        email: "",
        hasError: false,
    });

    function handleSubmit(e){
        e.preventDefault();
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
    
    function handleError(){
        //Testea si pasa la regex y de no ser asi lanza el error. Esto solo ocurrirá cuando se quite el foco del elemento, previninendo
        //que el usuario vea el mensaje de error mientras rellena el campo
        const hasError = !emailRegexp.test(values.email);
        setValues((prevState) => ({ ...prevState, hasError}))
    }
    //Fin de validación
    

    //OnBlur se activa al retirar el foco de un elemento
    return (
        <form onSubmit={handleSubmit} id="register__form">   
            <fieldset id="register__fieldset"> 
                <h2 className="register__subtitle">Register Data</h2>            
                <input type="text" name="username" id="register__username" className="register__input" 
                placeholder="Username" />
                <input type="password" name="password" id="register__password" className="register__input" 
                placeholder="Password" />
                <input type="email" name="email" id="register__email" className="register__input" 
                placeholder="email" value={values.email} onChange={handleChange} onBlur={handleError} aria-errormessage="emailError"
                aria-invalid={values.hasError} /> 
                {/* El span solo sera visible si se triggerea el error */}
                <span id="emailError" aria-live="assertive" style={{visibility: values.hasError ? "visible" : "hidden"}}>
                    Email invalid. Please enter a valid e-mail</span>
                <input type="date" name="date" id="register__date" className="register__input"  />                            
                <button type="submit" name="submit" id="register__submit" className="buttons">Submit</button>
                <a href="login.html" id="register__toLogin">Do you have an account? Go to login</a>
                <img src={require("../assets/img/Agumon_registro-sf.png")} alt="agumon" id="register__img" />
                <BackArrow />                        
            </fieldset>                
        </form>
    )
}
export default RegisterForm;