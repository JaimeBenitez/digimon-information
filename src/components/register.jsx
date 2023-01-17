/**
 * @file register.jsx - Register Page
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */
import React from "react";
import Navbar from "./navbar";
import PrincipalImage from "./principal-image";
import RegisterForm from "./register-form";
/**
 * @module Register
 */
/**
* Componente que renderiza la pantalla de registro
* @memberof module:Register
* @returns {JSX} 
*      
*/
function Register(){
    
    return (
        <main>        
            <PrincipalImage />   
            <section id="register">
                <Navbar />              
                <RegisterForm />                 
            </section>
    </main>
    )
}

export default Register;
