/**
 * @file register-form.jsx - Register Form Component
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React,{ useState } from "react";
import BackArrow from "./back-arrow";
import { useNavigate } from "react-router-dom";


//Podemos declarar variables fuera de la función componente y usarlos dentro del mismo

/**
* Regex para validar el email. <br/>
* El email puede tener cualquier caracter en cualquier cantidad siempre y cuando no sea una @, espacio o tabulación en la primera parte
Luego tendrá una @, luego otro set igual que en la primera parte, un punto y finalmente otro set del mismo tipo
* @type {Object} 
*/
const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

/**
* Regex para validar la contraseña. <br/>
* La contraseña debera tener al menos una mayuscula, minuscula y digito, permite caracteres especiales y contara de entre 8 y 16 caracteres
* @type {Object} 
*/ 
const passwordRegexp = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/);

/**
* Regex para validar el nombre de usuario. <br/>
* El usuario admitirá cualquier caracter pero tendrá entre 3 y 20 caracteres
* @type {Object} 
*/
const usernameRegexp = new RegExp(/^[\S]{3,20}$/);


/**
* Componente que renderiza el formulario de registro<br/>
* Funcionalidades: <br/>
* - handleSubmit(e: Evento que activa la función, en este caso un click): Función que comprueba si los datos registrados son correctos y de ser asi los guarda en el localStorage, muestra un mensaje de bienvenida y nos manda al index. <br/>
* - handleChange(e: Evento que activa la función, en este caso un cambio en el input): Función que controla el estado al cambiar algo dentro de los inputs <br/>
* - handle[Username|Email|Password|Date]Error(): Función que testea si el usuario existe y si no muestra un error al quitar el foco del input correspondiente. Solo ocurrirá al quitar el foco del input <br/>
* @returns {JSX} 
*      
*/
function RegisterForm(){
    const navigate = useNavigate();
    //validación de formulario
    const [values,setValues] = useState({
        username: "",
        password: "",
        email: "", 
        date: "",           
        usernameError: false,   
        passwordError: false,
        emailError: false,
        dateError: false,           
    });

    
    function handleSubmit(e){        
        e.preventDefault();
        //Si todo el formulario es valido entonces aparece el alert
        if(!values.usernameError && !values.passwordError && !values.emailError && !values.dateError){
            localStorage.setItem("user",values.username);
            localStorage.setItem("pass",values.password);
            localStorage.setItem("email", values.email);
            localStorage.setItem("registerDate", today);
            localStorage.setItem("bornDate", values.date);   
            alert("Alright, welcome to the digiworld!")
            navigate("/"); 
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

    
    function handleUsernameError(){
        //Testea si pasa la regex y de no ser asi lanza el error. Esto solo ocurrirá cuando se quite el foco del elemento, previninendo
        //que el usuario vea el mensaje de error mientras rellena el campo
        const usernameError = !usernameRegexp.test(values.username);
        setValues((prevState) => ({ ...prevState, usernameError}));
    }

    function handleEmailError(){        
        const emailError = !emailRegexp.test(values.email);
        setValues((prevState) => ({ ...prevState, emailError}));
    }

    
    function handlePasswordError(){        
        const passwordError = !passwordRegexp.test(values.password);
        setValues((prevState) => ({ ...prevState, passwordError}));
    }

    
    function handleDateError(){
        //Comprobación de la fecha, aunque el tipo date ya comprueba todo esto es mejor revalidar por si el usuario modifica el HTML
        //Ojo que el tipo date le da la vuelta a la fecha, empieza por años
        let testDays = true;
        const day = parseInt(values.date.split('-')[2]);
        const month = parseInt(values.date.split('-')[1]);
        const year = parseInt(values.date.split('-')[0]);
        
        const monthDays = new Date(year, month,0).getDate()
        console.log (monthDays)
        if (day > monthDays) {
            testDays =  false
        }        
        //Comprobacion del año actual
        let testYear = true;
        const currentYear = new Date().getFullYear();

        if (year > currentYear){
            testYear = false
        }

        const dateError = !testDays || !testYear;       
        
        setValues((prevState) => ({ ...prevState, dateError}));
    }
    // Seteamos el dia maximo al dia de hoy
       
    const today = new Date().toISOString().split("T")[0];
       
    //Fin de validación  

    //OnBlur se activa al retirar el foco de un elemento
    return (
        <form onSubmit={handleSubmit} id="register__form">   
            <fieldset id="register__fieldset"> 
                <h2 className="register__subtitle">Register Data</h2> 
                
                <label  htmlFor="username" className="formLabel firstLabel">Username</label>           
                <input type="text" name="username" id="register__username" className="register__input" 
                placeholder="Username" value={values.username} onChange={handleChange} onBlur={handleUsernameError} aria-errormessage="usernameError"
                aria-invalid={values.usernameError} required/>
                <span className="error" id="usernameError" aria-live="assertive" style={{visibility: values.usernameError ? "visible" : "hidden"}}>
                    Username invalid. Please enter a valid username</span>

                <label  htmlFor="password" className="formLabel">Password</label>   
                <input type="password" name="password" id="register__password" className="register__input" 
                placeholder="Password" value={values.password} onChange={handleChange} onBlur={handlePasswordError} aria-errormessage="passwordError"
                aria-invalid={values.passwordError} required/>
                <span className="error" id="passwordError" aria-live="assertive" style={{visibility: values.passwordError ? "visible" : "hidden"}}>
                    Password invalid. Please enter a valid password</span>

                <label  htmlFor="email" className="formLabel">Email</label>
                <input type="email" name="email" id="register__email" className="register__input" 
                placeholder="email" value={values.email} onChange={handleChange} onBlur={handleEmailError} aria-errormessage="emailError"
                aria-invalid={values.emailError} required/> 
                {/* El span solo sera visible si se triggerea el error */}
                <span className="error" id="emailError" aria-live="assertive" style={{visibility: values.emailError ? "visible" : "hidden"}}>
                    Email invalid. Please enter a valid e-mail</span>

                <label  htmlFor="date" className="formLabel">Borndate</label>
                <input type="date" name="date" id="register__date" className="register__input"  value={values.date} onChange={handleChange}
                 onBlur={handleDateError} aria-errormessage="dateError" aria-invalid={values.dateError} max={today} required/>  
                <span className="error" id="dateError" aria-live="assertive" style={{visibility: values.dateError ? "visible" : "hidden"}}>
                    Borndate invalid. Please enter a valid borndate</span> 

                <button type="submit" name="submit" id="register__submit" className="buttons">Submit</button>
                <a href="login.html" id="register__toLogin">Do you have an account? Go to login</a>
                <img src={require("../assets/img/Agumon_registro-sf.png")} alt="agumon" id="register__img" />
                <BackArrow />                        
            </fieldset>                        
        </form>        
    )
}
export default RegisterForm;