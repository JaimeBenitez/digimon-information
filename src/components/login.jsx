/**
 * @file login.jsx - Login Page
 * @author Jaime Benitez
 * @see <a href="https://jaimebenitez.com" target="_blank">Jaime Benitez </a>
 */

import React from "react";
import Navbar from "./navbar";
import PrincipalImage from "./principal-image";
import LoginForm from "./login-form";

/**
* Componente que renderiza la pantalla de login
* @returns {JSX} 
*      
*/
function Login(){
    
    return (
        <main>        
            <PrincipalImage />   
            <section id="login">
                <Navbar />              
                <LoginForm />                 
            </section>
    </main>
    )
}

export default Login;
